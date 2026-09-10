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
      <article className="topicEntry"><span>01</span><div><h2>HubSpot Marketing Certification</h2><p>HubSpot Academy</p><p className="topicNote">Coursework in the principles and tools used to plan, communicate, and measure digital marketing.</p></div></article>
      <article className="topicEntry"><span>02</span><div><h2>Rat Tickling Certification</h2><p>Purdue University</p><p className="topicNote">Training in a research-backed handling and enrichment technique intended to improve rat welfare.</p></div></article>
    </TopicShell>
  );
}
