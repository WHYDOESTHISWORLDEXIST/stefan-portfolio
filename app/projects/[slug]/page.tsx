import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — Stefan Cutler`,
    description: project.shortDescription,
    openGraph: { images: [] },
    twitter: { images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="top" className="projectPage">
      <nav className="nav shell" aria-label="Project navigation">
        <a className="wordmark" href="/">Stefan</a>
        <a className="returnButton" href="/projects">← All projects</a>
      </nav>

      <header className="projectStoryHero shell">
        <p className="eyebrow">Project story · {project.year}</p>
        <h1>{project.title}</h1>
        <p className="projectStoryLead">{project.shortDescription}</p>
        <dl className="projectFacts">
          <div><dt>My role</dt><dd>{project.role}</dd></div>
          <div><dt>Tools and fields</dt><dd>{project.tools}</dd></div>
        </dl>
      </header>

      <article className="projectStory shell">
        <section><p className="storyLabel">01 / What it is</p><div><h2>The project</h2><p>{project.overview}</p></div></section>
        <section><p className="storyLabel">02 / My part</p><div><h2>What I contributed</h2><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section><p className="storyLabel">03 / Experience</p><div><h2>What I have gained</h2><ul>{project.experience.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <section><p className="storyLabel">04 / Now</p><div><h2>Where it is going</h2><h3>Current focus</h3><p>{project.currentFocus}</p><h3>Next step</h3><p>{project.nextStep}</p><div className="storyLinks">{project.website && <a className="storySource" href={project.website.href} target="_blank" rel="noreferrer">{project.website.label} ↗</a>}{project.source && <a className="storySource" href={project.source.href} target="_blank" rel="noreferrer">{project.source.label} ↗</a>}</div></div></section>
      </article>

      <aside className="nextProject shell">
        <p>Next project</p>
        <a href={`/projects/${nextProject.slug}`}>{nextProject.title} <span>→</span></a>
      </aside>
      <footer className="footer shell"><span>© 2026 Stefan Cutler</span><a href="/projects">Project index</a></footer>
    </main>
  );
}
