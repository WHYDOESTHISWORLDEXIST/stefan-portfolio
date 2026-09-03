import type { Metadata } from 'next';
import { Geist, Geist_Mono, UnifrakturCook, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const gothicHeading = UnifrakturCook({
  variable: '--font-gothic',
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
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
  metadataBase: new URL('https://stefa-developer-portfolio.stefan-cutler.chatgpt.site'),
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
        className={`${geistSans.variable} ${geistMono.variable} ${gothicHeading.variable} ${serifHeading.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
