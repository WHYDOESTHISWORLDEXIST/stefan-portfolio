# Stefan Cutler — Personal Portfolio

A personal portfolio for documenting my software, engineering, writing, certifications, education, and current interests.

**Live site:** [stefan-portfolio.stefan-cutler.workers.dev](https://stefan-portfolio.stefan-cutler.workers.dev)

## What is included

- Individual pages for current projects
- Certifications, published work, and launched websites
- About, education, books, and music pages
- A contact form with optional newsletter signup
- Responsive layouts for desktop, tablet, and mobile screens
- Privacy information and links to external profiles

## Built with

- Next.js and React
- TypeScript
- Vinext and Vite
- Cloudflare Workers
- Cloudflare D1 for contact submissions
- Resend for contact email and newsletter delivery

## Run locally

Requirements:

- Node.js 22.13 or newer
- npm

Install the dependencies:

```bash
npm install
```

Copy `.env.example` to `.env.local` and add your own development credentials. Never commit `.env.local` or real API keys.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends contact-form emails and manages newsletter contacts |
| `RESEND_NEWSLETTER_SEGMENT_ID` | Selects the Resend newsletter segment |
| `CONTACT_FROM_EMAIL` | Sets the verified sender used for contact emails |

The deployed Worker also requires a D1 binding named `DB`. The contact endpoint creates the required table if it does not already exist; the matching schema is recorded in `drizzle/0000_contact_submissions.sql`.

## Useful commands

```bash
npm run dev     # Start local development
npm run lint    # Check code quality
npm run build   # Create a production build
npm run start   # Run the production build locally
```

## Deployment

The production site runs on Cloudflare Workers. After a successful build, deploy the generated Worker configuration:

```bash
npx wrangler deploy --config dist/server/wrangler.json --name stefan-portfolio --keep-vars
```

Runtime credentials should be stored as Cloudflare secrets or variables, not in the repository.

## Project structure

```text
app/                 Pages, shared components, and the contact API
app/projects/        Project index, detail pages, and project data
db/                  D1 schema definition
drizzle/             Database migration SQL
public/              Images, favicon, and social preview assets
```

## Security and privacy

- Real credentials belong in `.env.local` or the hosting provider's secret store.
- Contact submissions are validated before being stored or emailed.
- External email and database operations use timeouts so one failure does not crash the entire request.
- Review `app/privacy/page.tsx` before adapting the contact form for another site or data-handling workflow.

## License

No open-source license has been added. Unless a license is added later, the source remains fully copyrighted by Stefan Cutler.
