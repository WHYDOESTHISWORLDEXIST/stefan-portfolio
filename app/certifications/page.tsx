import type { Metadata } from 'next';
import TopicShell from '../components/TopicShell';

export const metadata: Metadata = {
  title: 'Certifications — Stefan Cutler',
  description: 'Certifications and independent learning completed by Stefan Cutler.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function CertificationsPage() {
  return (
    <TopicShell eyebrow="Credentials" title="Certifications" intro="Formal and informal courses I have completed while following my curiosity across marketing, science, and technology.">
      <article className="topicEntry"><span>01</span><div><h2>Claude Certified Architect</h2><p>Anthropic</p><p className="topicNote">Credential focused on designing effective systems and workflows using Claude.</p></div></article>
      <article className="topicEntry"><span>02</span><div><h2>HubSpot Marketing Certification</h2><p>HubSpot Academy</p><p className="topicNote">Coursework in the principles and tools used to plan, communicate, and measure digital marketing.</p></div></article>
      <article className="topicEntry"><span>03</span><div><h2>Rat Tickling Certification</h2><p>Purdue University</p><p className="topicNote">Training in a research-backed handling and enrichment technique intended to improve rat welfare.</p></div></article>
      <article className="topicEntry"><span>04</span><div><h2>Montana Bear Identification Certification</h2><p>Montana Fish, Wildlife &amp; Parks</p><p className="topicNote">Training in distinguishing black bears from grizzly bears using physical features and field observations.</p></div></article>
      <article className="topicEntry"><span>05</span><div><h2>Unicorn Hunter License</h2><p>License credential</p><p className="topicNote">A novelty credential celebrating curiosity, imagination, and an adventurous approach to exploration.</p></div></article>
      <article className="topicEntry"><span>06</span><div><h2>Ordained Ministry</h2><p>Ordination credential</p><p className="topicNote">An ordination credential recognizing ministerial standing.</p></div></article>
    </TopicShell>
  );
}
