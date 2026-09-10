import type { Metadata } from 'next';
import TopicShell from '../components/TopicShell';
import { projects } from './projects';

export const metadata: Metadata = {
  title: 'Current Projects — Stefan Cutler',
  description: 'Current software, robotics, engineering, and fabrication projects by Stefan Cutler.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ProjectsPage() {
  return (
    <TopicShell eyebrow="Work in progress" title="Current projects" intro="What I am building, researching, and learning from right now. Select a project for the full story.">
      <div className="topicProjectGrid">
        {projects.map((project, index) => (
          <a className="topicProjectCard" href={`/projects/${project.slug}`} key={project.slug}>
            <span>0{index + 1} / {project.year}</span>
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <strong>Read project story →</strong>
          </a>
        ))}
      </div>
    </TopicShell>
  );
}
