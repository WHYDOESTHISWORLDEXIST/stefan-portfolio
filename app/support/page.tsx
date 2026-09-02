export const metadata = {
  title: 'Support — Stefan',
  description: 'Support Stefan’s projects and writing on Buy Me a Coffee.',
};

export default function SupportPage() {
  return (
    <main className="supportPage" id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="returnButton" href="/">← Return home</a>
        <div className="navLinks"><a href="/about">About me</a><a href="/music">Music</a><a href="/support" aria-current="page">Support</a><a href="/contact">Contact</a></div>
      </nav>
      <section className="supportLayout shell">
        <header className="supportIntro">
          <p className="kicker">Support my work</p>
          <h1>A little fuel for<br />the next idea.</h1>
          <p>If you enjoy what I&apos;m making or writing, you can support me on Buy Me a Coffee. No pressure—thanks for taking a look around.</p>
          <a className="textLink" href="/#projects">See what I&apos;m working on ↗</a>
        </header>
        <div className="supportCard">
          <p className="kicker">Thanks for being here</p>
          <h2>Buy me a coffee.</h2>
          <p>A small way to say you like the work and want to see more.</p>
          <a className="coffeeButton" href="https://buymeacoffee.com/StefanCutler" target="_blank" rel="noopener noreferrer">Support on Buy Me a Coffee ↗</a>
          <p className="supportNote">Opens in a new tab. Any payment is handled on Buy Me a Coffee, not on this website.</p>
        </div>
      </section>
      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/privacy">Privacy</a><a href="/">Back home ↑</a></div></footer>
    </main>
  );
}
