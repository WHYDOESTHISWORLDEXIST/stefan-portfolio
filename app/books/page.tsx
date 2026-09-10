import type { Metadata } from 'next';
import Image from 'next/image';
import TopicShell from '../components/TopicShell';

export const metadata: Metadata = {
  title: 'Books Published — Stefan Cutler',
  description: 'Books published by Stefan Cutler.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function BooksPage() {
  return (
    <TopicShell eyebrow="Published work" title="Books published" intro="Long-form projects I have taken from an initial question to a finished, publicly available book.">
      <a className="publishedBook" href="https://www.amazon.com/dp/B0HBPKS26N" target="_blank" rel="noreferrer">
        <Image src="/book-semiconductors.jpg" width={300} height={450} alt="Cover of Semiconductors: All About Them, I Guess? by Stefan Cutler" />
        <div><span>01 / Available on Amazon</span><h2>Semiconductors: All About Them, I Guess?</h2><p>An approachable introduction to what semiconductors are, why they matter, and how they shape modern technology.</p><strong>View the book ↗</strong></div>
      </a>
    </TopicShell>
  );
}
