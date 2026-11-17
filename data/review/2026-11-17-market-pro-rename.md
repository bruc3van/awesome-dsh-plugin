# DSH Pro repository identity migration - 2026-11-17

The maintainer requested consistent references following the DSH Market Pro rename and renamed this catalog to awesome-dsh-plugin-pro.

- GitHub repository 1335235250: bruc3van/safer-dsh-market -> bruc3van/dsh-market-pro.
- GitHub repository 1333144072: bruc3van/awesome-dsh-plugin -> bruc3van/awesome-dsh-plugin-pro.
- Both identities were verified against the live GitHub API. Only these two snapshot records were refreshed; the full snapshot timestamp was retained.
- Approval dates were preserved. The corresponding leaderboard, market-exclusion and editorial-description keys now use canonical names.
- Old self-exclusion aliases remain because immutable npm package metadata can still reference the old repository names.
- This is an identity and documentation update, not approval of additional plugins. Subscription URLs and the awesome-dsh-plugin-feed package name stay compatible.
