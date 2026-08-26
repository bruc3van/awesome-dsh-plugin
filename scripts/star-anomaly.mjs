// Day-over-day star-growth detector for the review queue.
//
// The daily snapshot (data/repositories.json) is the only star history we
// keep. Comparing it with the previous snapshot flags repositories that
// jumped by hundreds of stars in one interval, or that would suddenly appear
// on / leap up the published leaderboard. The review page lists them in a
// dedicated section so a maintainer (or AI reviewer) does extra analysis
// before approving them onto the board.
//
// Thresholds are intentionally coarse: organic plugins rarely gain 100 stars
// overnight, and a pending repo that would land in Top 200 with 100+ stars is
// exactly the "topic rider with a borrowed audience" case leaderboard_exclusions
// already records by hand.

export const SURGE_DELTA = 100;
export const BOARD_SIZE = 200;
export const TOP20_SIZE = 20;
export const RANK_LEAP = 50;
export const PENDING_STAR_FLOOR = 100;
export const BOARD_ENTRY_DELTA = 50;

const lower = (name) => String(name || '').toLowerCase();

function hasDescription(repo) {
  return Boolean(repo?.description && String(repo.description).trim());
}

function ageDays(createdAt, asOfDate) {
  const created = Date.parse(createdAt);
  const asOf = Date.parse(`${asOfDate}T00:00:00Z`);
  if (!Number.isFinite(created) || !Number.isFinite(asOf)) return null;
  return Math.max(0, Math.floor((asOf - created) / 86400000));
}

function starForkRatio(stars, forks) {
  if (!forks) return stars > 0 ? null : 0;
  return Math.round((stars / forks) * 10) / 10;
}

export function boardOrder(repositories, { approvedNames, excluded, leaderboardExclusions }) {
  return repositories
    .filter(hasDescription)
    .filter((repo) => approvedNames.has(lower(repo.full_name)))
    .filter((repo) => !excluded.has(lower(repo.full_name)))
    .filter((repo) => !leaderboardExclusions.has(lower(repo.full_name)))
    .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));
}

export function rankMap(ordered, limit) {
  const ranks = new Map();
  for (let i = 0; i < ordered.length && i < limit; i++) {
    ranks.set(lower(ordered[i].full_name), i + 1);
  }
  return ranks;
}

function lookupPrevious(repo, previousById, previousByName) {
  if (repo.id != null && previousById.has(repo.id)) return previousById.get(repo.id);
  return previousByName.get(lower(repo.full_name)) ?? null;
}

function wouldRank(stars, fullName, board) {
  let rank = 1;
  for (const repo of board) {
    const ahead =
      repo.stargazers_count > stars ||
      (repo.stargazers_count === stars && repo.full_name.localeCompare(fullName) < 0);
    if (ahead) rank += 1;
    else break;
  }
  return rank;
}

function reviewerNote(alert) {
  const parts = [];
  if (alert.queue === 'pending') {
    parts.push(`Pending: ${alert.stars} stars`);
    if (alert.delta != null) parts.push(`${alert.delta >= 0 ? '+' : ''}${alert.delta} vs previous snapshot`);
    if (alert.would_rank && alert.would_rank <= TOP20_SIZE) {
      parts.push(`approving would place it around Top ${alert.would_rank}`);
    } else if (alert.would_rank && alert.would_rank <= BOARD_SIZE) {
      parts.push(`approving would place it around rank ${alert.would_rank} of the Top ${BOARD_SIZE}`);
    }
  } else {
    parts.push(`Approved: ${alert.stars} stars`);
    if (alert.delta != null) parts.push(`${alert.delta >= 0 ? '+' : ''}${alert.delta} vs previous snapshot`);
    if (alert.previous_rank && alert.rank) parts.push(`board ${alert.previous_rank} → ${alert.rank}`);
    else if (alert.rank) parts.push(`now on the board at rank ${alert.rank}`);
  }
  if (alert.age_days != null && alert.age_days <= 2 && alert.stars >= PENDING_STAR_FLOOR) {
    parts.push(`created ${alert.age_days}d ago`);
  }
  if (alert.forks === 0 && alert.stars >= PENDING_STAR_FLOOR) parts.push('0 forks');
  if (alert.star_fork_ratio != null && alert.star_fork_ratio >= 100) {
    parts.push(`star/fork ${alert.star_fork_ratio}`);
  }
  parts.push('Do extra analysis before putting this on the star board (leaderboard_exclusions if the stars are not from the DSH plugin itself).');
  return parts.join('. ');
}

function hints(alert) {
  const out = [];
  if (alert.signals.includes('star_surge')) out.push(`日增 ${alert.delta >= 0 ? '+' : ''}${alert.delta}★`);
  if (alert.signals.includes('top20_entry')) {
    out.push(
      alert.previous_rank && alert.rank ? `冲入 Top 20（${alert.previous_rank}→${alert.rank}）` : '冲入 Top 20',
    );
  }
  if (alert.signals.includes('board_leap') && alert.previous_rank && alert.rank) {
    out.push(`榜单 ${alert.previous_rank}→${alert.rank}`);
  }
  if (alert.signals.includes('board_entry') && alert.rank) out.push(`新入 Top 200 #${alert.rank}`);
  if (alert.signals.includes('pending_high') && alert.would_rank) {
    out.push(alert.would_rank <= TOP20_SIZE ? `核准即 Top ${alert.would_rank}` : `核准即榜 #${alert.would_rank}`);
  }
  if (alert.age_days != null && alert.age_days <= 2 && alert.stars >= PENDING_STAR_FLOOR) {
    out.push(`创建 ${alert.age_days} 天`);
  }
  if (alert.forks === 0 && alert.stars >= PENDING_STAR_FLOOR) out.push('高星零 fork');
  if (alert.star_fork_ratio != null && alert.star_fork_ratio >= 100) out.push(`★/fork ${alert.star_fork_ratio}`);
  if (alert.already_board_excluded) out.push('已不进榜单');
  return out;
}

export function detectStarAnomalies({
  current = [],
  previous = [],
  currentDate,
  previousDate = null,
  approvedNames,
  excluded,
  leaderboardExclusions,
  boardSize = BOARD_SIZE,
  top20Size = TOP20_SIZE,
} = {}) {
  const empty = {
    snapshot_date: currentDate ?? null,
    previous_snapshot_date: previousDate,
    alerts: [],
  };
  if (!previous.length || !current.length) return empty;

  const previousById = new Map();
  const previousByName = new Map();
  for (const repo of previous) {
    if (repo.id != null) previousById.set(repo.id, repo);
    if (repo.full_name) previousByName.set(lower(repo.full_name), repo);
  }

  const currentById = new Map();
  const currentByName = new Map();
  for (const repo of current) {
    if (repo.id != null) currentById.set(repo.id, repo);
    if (repo.full_name) currentByName.set(lower(repo.full_name), repo);
  }
  const currentBoard = boardOrder(current, { approvedNames, excluded, leaderboardExclusions });
  const previousStarsForBoard = previous.map((repo) => {
    const now =
      (repo.id != null && currentById.get(repo.id)) || currentByName.get(lower(repo.full_name)) || null;
    return now ? { ...now, stargazers_count: repo.stargazers_count, full_name: now.full_name } : repo;
  });
  const previousBoard = boardOrder(previousStarsForBoard, { approvedNames, excluded, leaderboardExclusions });
  const currentRanks = rankMap(currentBoard, boardSize);
  const previousRanks = rankMap(previousBoard, boardSize);
  const currentTop20 = rankMap(currentBoard, top20Size);
  const previousTop20 = rankMap(previousBoard, top20Size);

  const alerts = [];
  for (const repo of current) {
    const name = lower(repo.full_name);
    if (!name || excluded.has(name)) continue;
    if (!hasDescription(repo)) continue;

    const prior = lookupPrevious(repo, previousById, previousByName);
    const previousStars = prior ? Number(prior.stargazers_count) || 0 : null;
    const stars = Number(repo.stargazers_count) || 0;
    const delta = previousStars == null ? null : stars - previousStars;
    const isPending = !approvedNames.has(name);
    const alreadyBoardExcluded = leaderboardExclusions.has(name);
    const signals = [];

    if (delta != null && delta >= SURGE_DELTA) signals.push('star_surge');

    if (!isPending && !alreadyBoardExcluded) {
      const rank = currentRanks.get(name) ?? null;
      const previousRank = previousRanks.get(name) ?? null;
      const enteredBoard = previousRank == null && rank != null && (delta == null || delta >= BOARD_ENTRY_DELTA);
      if (enteredBoard) signals.push('board_entry');
      if (previousRank != null && rank != null && previousRank - rank >= RANK_LEAP) signals.push('board_leap');
      if ((previousTop20.get(name) == null) && currentTop20.has(name)) signals.push('top20_entry');
    }

    let would = null;
    if (isPending && stars >= PENDING_STAR_FLOOR) {
      would = wouldRank(stars, repo.full_name, currentBoard);
      if (would <= boardSize) signals.push('pending_high');
    }

    if (!signals.length) continue;

    const alert = {
      full_name: repo.full_name,
      html_url: repo.html_url,
      description: repo.description,
      queue: isPending ? 'pending' : 'approved',
      stars,
      previous_stars: previousStars,
      delta,
      forks: Number(repo.forks_count) || 0,
      created_at: repo.created_at ?? null,
      age_days: ageDays(repo.created_at, currentDate),
      star_fork_ratio: starForkRatio(stars, Number(repo.forks_count) || 0),
      rank: currentRanks.get(name) ?? null,
      previous_rank: previousRanks.get(name) ?? null,
      would_rank: would,
      already_board_excluded: alreadyBoardExcluded,
      signals,
    };
    alert.hints = hints(alert);
    alert.reviewer_note = reviewerNote(alert);
    alerts.push(alert);
  }

  alerts.sort((a, b) => {
    if (a.queue !== b.queue) return a.queue === 'pending' ? -1 : 1;
    const d = (b.delta ?? -1) - (a.delta ?? -1);
    if (d) return d;
    return b.stars - a.stars || a.full_name.localeCompare(b.full_name);
  });

  return {
    snapshot_date: currentDate ?? null,
    previous_snapshot_date: previousDate,
    alerts,
  };
}

export function formatStarAnomalySummary(anomalies) {
  const alerts = anomalies?.alerts || [];
  if (!alerts.length) return '';
  const pending = alerts.filter((alert) => alert.queue === 'pending').length;
  const approved = alerts.length - pending;
  return `${alerts.length} star-growth alert(s): ${pending} pending, ${approved} approved.`;
}
