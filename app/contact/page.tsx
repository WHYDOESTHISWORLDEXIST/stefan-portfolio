import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Stefan',
  description: 'Send Stefan a message or sign up for occasional project updates.',
};

export default function ContactPage() {
  return (
    <main className="contactPage" id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="returnButton" href="/">← Return home</a>
        <div className="navLinks"><a href="/about">About me</a><a href="/music">Music</a><a href="/support">Support</a><a href="mailto:stefan.cutler@gmail.com">Email</a></div>
      </nav>
      <section className="contactLayout shell">
        <div className="contactIntro">
          <p className="kicker">Contact</p>
          <h1>Let&apos;s talk.</h1>
          <p>Have a project, question, or idea? Send me a note. The updates option is completely optional.</p>
          <div className="contactAlternatives"><a href="mailto:stefan.cutler@gmail.com">stefan.cutler@gmail.com ↗</a><a href="https://www.linkedin.com/in/stefan-cutler-9015223b3" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <ContactForm />
      </section>
      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/privacy">Privacy</a><a href="/">Back home ↑</a></div></footer>
    </main>
  );
}
