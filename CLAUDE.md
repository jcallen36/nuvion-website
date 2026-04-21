# Nuvion Solutions Website — Claude Code Rules

This repo is shared between multiple collaborators. Follow these rules in every session.

## Deploys: GitHub-only, never CLI

**Default deploy path: push to `main` on GitHub. Vercel auto-deploys within ~30 seconds.**

- **Do NOT run `vercel --prod`, `vercel deploy --prod`, or any `vercel` CLI deploy command** unless the user explicitly says "push to vercel" or "deploy via CLI".
- Running a CLI deploy from a stale local checkout will overwrite a collaborator's work that is already live. This has happened before.
- If the user says "push the site" / "deploy" / "publish" — that means `git push origin main`, not Vercel CLI.

## Session start checklist (run BEFORE any edits)

Every new session that's going to touch code, run these in order:

```
git status                    # flag any uncommitted work from last session
git pull --rebase origin main # grab the collaborator's latest
```

If `git status` shows uncommitted changes from a previous session, surface them to the user before pulling — they may be half-finished work that needs to be committed, discarded, or stashed. Do NOT silently carry them through a rebase.

If `git pull --rebase` produces conflicts: resolve them manually, showing the user both sides before picking. **Never force-push.**

## After editing — the push checklist

```
git add <specific files>       # never `git add -A` — you may sweep in secrets
git commit -m "imperative short message"
git push origin main
```

Then **verify the Vercel deploy actually succeeded** — a push to `main` auto-triggers a deploy, but builds can fail silently (syntax error, missing import) and production stays on the previous version. Confirm with:

```
npx vercel ls --prod   # top entry should be "Ready", not "Error"
```

If the deploy failed, fix the error and push again. Do NOT use `vercel --prod` to recover — push the fix via git.

## Session end

Before ending a session, check `git status`. If there are unpushed commits or uncommitted changes, tell the user explicitly — unpushed work won't be seen by the collaborator and can create conflicts next session.

## Tech stack

- **Framework:** Vite + React 19 + react-router-dom v7 + react-helmet-async
- **Entry:** [src/main.jsx](src/main.jsx) — all routes registered here
- **Home page:** [src/NuvionWebsite.jsx](src/NuvionWebsite.jsx) — single-file landing page with all sections (Hero, Services, Testimonials, Team, FAQ, etc.) and the `SERVICES` / `TESTIMONIALS` data arrays
- **Service pages:** [src/pages/](src/pages/) — one file per service, each uses `BASE_CSS` from [src/pages/shared.js](src/pages/shared.js) and the shared `Footer` component
- **Footer:** [src/components/Footer.jsx](src/components/Footer.jsx) — has its own `services` list that must stay in sync with the home page `SERVICES` array
- **Hosting:** Vercel, connected to this GitHub repo for auto-deploy on push to `main`

## Adding a new service (the three-step pattern)

1. Add an entry to `SERVICES` in [src/NuvionWebsite.jsx](src/NuvionWebsite.jsx) (icon, bg color, title, slug, desc)
2. Add an entry to `services` in [src/components/Footer.jsx](src/components/Footer.jsx)
3. Create `src/pages/<NewService>.jsx` (copy pattern from [src/pages/SeoAso.jsx](src/pages/SeoAso.jsx) or [src/pages/WebDesign.jsx](src/pages/WebDesign.jsx))
4. Register the route in [src/main.jsx](src/main.jsx)

## Commit style

Short imperative subject (~70 chars), colon + scope if useful. Examples from recent history:
- `Fix Book page: scroll to top on load, remove duplicate Footer`
- `Add shared Footer component to all service and book pages`
- `Update FAQ: 60 days -> 3 weeks for ROI recovery`

Include a `Co-Authored-By:` trailer for Claude commits.
