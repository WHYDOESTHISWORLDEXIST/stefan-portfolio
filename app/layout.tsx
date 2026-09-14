import type { Metadata } from 'next';
import { Geist, Geist_Mono, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const serifHeading = Bodoni_Moda({
  variable: '--font-editorial',
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stefan — Developer & Creative Builder',
  description: 'Personal portfolio of Stefan, an aspiring developer building thoughtful and useful digital experiences.',
  metadataBase: new URL('https://stefan-portfolio.stefan-cutler.workers.dev'),
  openGraph: {
    title: 'Stefan — Developer & Creative Builder',
    description: 'Developer in progress.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefan — Developer & Creative Builder',
    description: 'Developer in progress.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serifHeading.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
