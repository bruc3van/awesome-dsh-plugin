import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BOARD_SIZE,
  PENDING_STAR_FLOOR,
  SURGE_DELTA,
  detectStarAnomalies,
  formatStarAnomalySummary,
} from './star-anomaly.mjs';

let nextId = 1;
const repo = (overrides = {}) => ({
  id: nextId++,
  full_name: 'owner/repo',
  html_url: 'https://github.com/owner/repo',
  description: 'A DSH plugin.',
  language: 'JavaScript',
  stargazers_count: 0,
  forks_count: 0,
  created_at: '2026-01-01T00:00:00Z',
  ...overrides,
});

const names = (list) => new Set(list.map((name) => name.toLowerCase()));
const detect = ({ current, previous, approved = [], excluded = [], boardExcluded = [], date = '2026-08-26' }) =>
  detectStarAnomalies({
    current,
    previous,
    currentDate: date,
    previousDate: '2026-08-25',
    approvedNames: names(approved),
    excluded: names(excluded),
    leaderboardExclusions: names(boardExcluded),
  });

test('an empty previous snapshot produces no alerts (avoids flagging the whole board on first run)', () => {
  const now = [repo({ full_name: 'a/plug', stargazers_count: 5000 })];
  const result = detect({ current: now, previous: [], approved: ['a/plug'] });
  assert.equal(result.alerts.length, 0);
});

test('a day-over-day gain of SURGE_DELTA stars is a star_surge', () => {
  const before = [repo({ id: 1, full_name: 'a/hot', stargazers_count: 10, forks_count: 0 })];
  nextId = 1;
  const after = [repo({ id: 1, full_name: 'a/hot', stargazers_count: 10 + SURGE_DELTA, forks_count: 0 })];
  const result = detect({ current: after, previous: before, approved: ['a/hot'] });
  assert.equal(result.alerts.length, 1);
  assert.deepEqual(result.alerts[0].signals, ['star_surge']);
  assert.equal(result.alerts[0].delta, SURGE_DELTA);
  assert.equal(result.alerts[0].queue, 'approved');
  assert.match(result.alerts[0].reviewer_note, /0 forks|Do extra analysis/);
});

test('a gain of SURGE_DELTA - 1 is not a surge by itself', () => {
  const before = [repo({ id: 2, full_name: 'a/warm', stargazers_count: 10 })];
  nextId = 1;
  const after = [repo({ id: 2, full_name: 'a/warm', stargazers_count: 10 + SURGE_DELTA - 1 })];
  const result = detect({ current: after, previous: before, approved: ['a/warm'] });
  assert.equal(result.alerts.length, 0);
});

test('excluded repositories are never flagged', () => {
  const before = [repo({ id: 3, full_name: 'a/rider', stargazers_count: 1 })];
  nextId = 1;
  const after = [repo({ id: 3, full_name: 'a/rider', stargazers_count: 500 })];
  const result = detect({ current: after, previous: before, approved: [], excluded: ['a/rider'] });
  assert.equal(result.alerts.length, 0);
});

test('a pending repo at the star floor that would enter Top 200 is pending_high', () => {
  const board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push(
      repo({
        id: 1000 + i,
        full_name: `board/p${String(i).padStart(3, '0')}`,
        stargazers_count: 80 - Math.floor(i / 4),
      }),
    );
  }
  const pending = repo({
    id: 9,
    full_name: 'new/spike',
    stargazers_count: PENDING_STAR_FLOOR,
    forks_count: 0,
    created_at: '2026-08-25T12:00:00Z',
  });
  const previous = [...board, { ...pending, stargazers_count: 0 }];
  const current = [...board, pending];
  const result = detect({
    current,
    previous,
    approved: board.map((item) => item.full_name),
  });
  const alert = result.alerts.find((item) => item.full_name === 'new/spike');
  assert.ok(alert, 'pending spike should be flagged');
  assert.equal(alert.queue, 'pending');
  assert.ok(alert.signals.includes('pending_high'));
  assert.ok(alert.signals.includes('star_surge'));
  assert.equal(alert.would_rank > 0, true);
  assert.ok(alert.would_rank <= BOARD_SIZE);
  assert.ok(alert.hints.some((hint) => /核准即/.test(hint)));
});

test('an approved repo entering Top 20 is top20_entry', () => {
  const crowd = [];
  for (let i = 0; i < 25; i++) {
    crowd.push(
      repo({
        id: 2000 + i,
        full_name: `top/r${String(i).padStart(2, '0')}`,
        stargazers_count: 800 - i * 10,
      }),
    );
  }
  const climberPrev = repo({ id: 42, full_name: 'top/climber', stargazers_count: 10 });
  const climberNow = { ...climberPrev, stargazers_count: 900 };
  const previous = [...crowd, climberPrev];
  const current = [...crowd, climberNow];
  const approved = [...crowd.map((item) => item.full_name), 'top/climber'];
  const result = detect({ current, previous, approved });
  const alert = result.alerts.find((item) => item.full_name === 'top/climber');
  assert.ok(alert);
  assert.ok(alert.signals.includes('star_surge'));
  assert.ok(alert.signals.includes('top20_entry'));
  assert.equal(alert.rank, 1);
  assert.equal(alert.previous_rank, 26);
  assert.ok(!alert.signals.includes('board_entry'));
});

test('a rank improvement of 50 places is a board_leap; 49 is not', () => {
  const crowd = [];
  for (let i = 0; i < 80; i++) {
    crowd.push(
      repo({
        id: 3000 + i,
        full_name: `leap/r${String(i).padStart(2, '0')}`,
        stargazers_count: 400 - i,
      }),
    );
  }
  // previous rank 80 (10 stars), now enough to pass 50 names but not 51 — wait,
  // 10 + 49 = 59 stars. The crowd has 400..321 for first 80. To leap 50 ranks
  // we need to pass 50 repos. previous last of 80 is 321 stars? 400-79=321.
  // That would need a huge star jump. Use a dedicated ladder instead.
  const ladder = [];
  for (let i = 0; i < 70; i++) {
    ladder.push(
      repo({
        id: 4000 + i,
        full_name: `lad/r${String(i).padStart(2, '0')}`,
        stargazers_count: 200 - i,
      }),
    );
  }
  const mover = repo({ id: 77, full_name: 'lad/mover', stargazers_count: 130 });
  // 200-i: rank of 130 is among 200,199,..131 = 70 names above? 200-130=70, so
  // i=0..69 are 200..131, mover at 130 is rank 71.
  const previous = [...ladder, mover];
  const leap = { ...mover, stargazers_count: 180 };
  // 200-180=20 → i=0..19 are 200..181, rank 21. Leap 71→21 = 50 places.
  const approved = [...ladder.map((item) => item.full_name), 'lad/mover'];
  const resultLeap = detect({ current: [...ladder, leap], previous, approved });
  const alertLeap = resultLeap.alerts.find((item) => item.full_name === 'lad/mover');
  assert.ok(alertLeap, '50-place leap should flag');
  assert.ok(alertLeap.signals.includes('board_leap'));
  assert.equal(alertLeap.previous_rank - alertLeap.rank, 50);

  const short = { ...mover, stargazers_count: 179 };
  const resultShort = detect({ current: [...ladder, short], previous, approved });
  const alertShort = resultShort.alerts.find((item) => item.full_name === 'lad/mover');
  assert.ok(!alertShort || !alertShort.signals.includes('board_leap'));
});

test('rename (same id, new full_name) is not treated as a new pending spike', () => {
  const before = [repo({ id: 55, full_name: 'old/name', stargazers_count: 12 })];
  const after = [repo({ id: 55, full_name: 'new/name', stargazers_count: 12, html_url: 'https://github.com/new/name' })];
  const result = detect({ current: after, previous: before, approved: ['new/name'] });
  assert.equal(result.alerts.length, 0);
});

test('already leaderboard-excluded repos still report a surge, not a board jump', () => {
  const before = [repo({ id: 8, full_name: 'x/generic', stargazers_count: 10 })];
  const after = [repo({ id: 8, full_name: 'x/generic', stargazers_count: 400 })];
  const result = detect({
    current: after,
    previous: before,
    approved: ['x/generic'],
    boardExcluded: ['x/generic'],
  });
  assert.equal(result.alerts.length, 1);
  assert.deepEqual(result.alerts[0].signals, ['star_surge']);
  assert.equal(result.alerts[0].already_board_excluded, true);
  assert.ok(result.alerts[0].hints.includes('已不进榜单'));
});

test('pending alerts sort ahead of approved ones', () => {
  const pending = repo({ id: 1, full_name: 'p/new', stargazers_count: 150 });
  const approved = repo({ id: 2, full_name: 'a/old', stargazers_count: 250 });
  const previous = [
    { ...pending, stargazers_count: 0 },
    { ...approved, stargazers_count: 100 },
  ];
  const board = [];
  for (let i = 0; i < 30; i++) {
    board.push(repo({ id: 5000 + i, full_name: `b/r${i}`, stargazers_count: 40 }));
  }
  const result = detect({
    current: [pending, approved, ...board],
    previous: [...previous, ...board.map((item) => ({ ...item }))],
    approved: ['a/old', ...board.map((item) => item.full_name)],
  });
  assert.ok(result.alerts.length >= 2);
  assert.equal(result.alerts[0].queue, 'pending');
  assert.match(formatStarAnomalySummary(result), /star-growth alert/);
});
