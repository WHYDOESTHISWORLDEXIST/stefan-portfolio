import type { Metadata } from 'next';
import TopicShell from '../components/TopicShell';

export const metadata: Metadata = {
  title: 'Websites Launched — Stefan Cutler',
  description: 'Websites designed and launched by Stefan Cutler.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function WebsitesPage() {
  return (
    <TopicShell eyebrow="Live on the web" title="Websites launched" intro="Sites I have designed, built, and made available for people to use.">
      <a className="topicEntry topicEntryLink" href="https://stefancutler.com/" target="_blank" rel="noreferrer"><span>01</span><div><h2>Personal portfolio</h2><p>2026 · Next.js · Cloudflare Workers</p><p className="topicNote">This evolving record of my projects, education, published work, interests, and technical growth.</p><strong>Visit website ↗</strong></div></a>
      <a className="topicEntry topicEntryLink" href="https://stackwise-tolerance-tool.stefan-paranos-cutle.chatgpt.site/" target="_blank" rel="noreferrer"><span>02</span><div><h2>Stackwise</h2><p>2026 · Engineering software</p><p className="topicNote">A browser-based tolerance stack-up calculator with simulation, design guidance, project tools, and reports.</p><strong>Visit website ↗</strong></div></a>
    </TopicShell>
  );
}
