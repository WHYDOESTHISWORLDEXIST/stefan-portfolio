import type { ReactNode } from 'react';
import Link from 'next/link';

type TopicShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function TopicShell({ eyebrow, title, intro, children }: TopicShellProps) {
  return (
    <main id="top" className="topicPage">
      <nav className="nav shell" aria-label="Topic navigation">
        <Link className="wordmark" href="/">Stefan</Link>
        <Link className="returnButton" href="/">← Home</Link>
      </nav>
      <header className="topicHero shell">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <section className="topicContent shell">{children}</section>
      <footer className="footer shell"><span>© 2026 Stefan Cutler</span><Link href="/">Back home</Link></footer>
    </main>
  );
}
