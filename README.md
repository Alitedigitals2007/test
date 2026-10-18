# Ajoje the Renaissance — Science of Service

The campaign site for **Adedeji-Ajoje Daniel (AJOJE)**, Faculty of Science Students'
Association (FASSA), University of Ibadan.

- Single-page public site: experience, vision (Welfare, Infrastructure, Empowerment),
  and a private feedback channel for FASSA students.
- On-site feedback form that stores submissions in Postgres.
- Password-protected `/admin` area to read submissions, track what has been reviewed,
  and manage the site's links (WhatsApp, Instagram, X, email, manifesto) without touching code.

Built with Next.js (App Router), Tailwind CSS v4, and Postgres. Designed to deploy on
Vercel with a Neon database.

## Environment variables

Copy `.env.example` to `.env.local` for local development, or set these in Vercel →
Project → Settings → Environment Variables:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string. Vercel's Neon integration sets this automatically. |
| `ADMIN_PASSWORD` | The password for `/admin`. Choose something long and unique. |
| `ADMIN_SESSION_SECRET` | Random string (48+ chars) used to sign the admin session cookie. `openssl rand -hex 32` |
| `NEXT_PUBLIC_SITE_URL` | Optional canonical URL, used for metadata and Open Graph tags. |

Tables (`feedback`, `settings`) are created automatically on first use.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in the values

# quick local database (Docker)
docker run -d --name renaissance-pg \
  -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=renaissance \
  -p 5432:5432 postgres:16-alpine

npm run dev
```

- Public site: http://localhost:3000
- Admin: http://localhost:3000/admin (use the `ADMIN_PASSWORD` you set)

If `DATABASE_URL` is missing or unreachable, the public site still renders — link
buttons just fall back to their defaults and the form will report an error on submit.

## Deploying on Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repository. The framework is detected
   automatically; no build settings needed.
3. Create the database: **Storage → Create Database → Neon (Postgres)**, then connect it
   to the project. `DATABASE_URL` is injected automatically.
4. Add `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in **Settings → Environment Variables**.
5. Deploy, then open `/admin` on the live domain to confirm login works.

## Content and accuracy notes

- Timeline entries and committee roles follow the approved brief
  (`RENAISSANCE-SITE-BRIEF.md`). Roles still awaiting verified dates are grouped under
  **"Dates to confirm"** — update them once confirmed.
- Proposed initiatives are proposals, never described as completed work.
- Feedback submissions are private; only reviewed, anonymised summaries should ever be
  published, each stating the number of responses, period covered, and limitations.
- Photos live in `public/images/` (1200px webp, 4:5 crop). Replace them with the same
  filenames to swap images.
