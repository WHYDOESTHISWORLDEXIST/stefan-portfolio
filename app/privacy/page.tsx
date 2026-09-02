export const metadata = {
  title: 'Privacy Policy — Stefan',
  description: 'How Stefan’s portfolio collects, uses, and protects information.',
};

export default function PrivacyPage() {
  return (
    <main className="privacyPage" id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="returnButton" href="/">← Return home</a>
        <div className="navLinks"><a href="/about">About me</a><a href="/music">Music</a><a href="/contact">Contact</a></div>
      </nav>

      <header className="privacyHero shell">
        <p className="kicker">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>A plain-language explanation of what this portfolio collects and how that information is used.</p>
      </header>

      <div className="privacyContent shell">
        <aside className="privacyMeta">Effective September 2, 2026<br />Last updated September 2, 2026</aside>
        <article className="privacyBody">
          <section><h2>Information collected</h2><p>If you use the contact form, this website collects the name, email address, and message you provide. If you select the optional updates checkbox, it also records that choice. The hosting provider may automatically process basic technical information, such as an IP address, browser type, and request logs, to operate and secure the website.</p></section>
          <section><h2>How information is used</h2><p>Your information is used to respond to your message, maintain the security and operation of the website, and—only if you choose the optional checkbox—send occasional updates about projects, writing, or new work.</p></section>
          <section><h2>Sharing</h2><p>Your information is not sold. It may be processed by service providers that host or operate this website, solely as needed to provide those services. Information may also be disclosed if required by law or necessary to protect the website and its users.</p></section>
          <section><h2>Retention and security</h2><p>Contact submissions are kept only as long as reasonably needed to respond, maintain records, or honor your communication preferences. Reasonable safeguards are used, but no internet service can guarantee absolute security.</p></section>
          <section><h2>Email updates</h2><p>Signing up for recurring updates is optional. You may withdraw your consent at any time by using the unsubscribe instructions in an email or by contacting Stefan directly. Opting out of updates does not prevent a response to a message you submitted.</p></section>
          <section><h2>Cookies and external links</h2><p>This portfolio does not intentionally use advertising or tracking cookies. Links to services such as LinkedIn, Amazon, and Apple Music lead to other websites with their own privacy practices.</p></section>
          <section><h2>Your choices</h2><p>You may ask to access, correct, or delete information you submitted through this website. To make a request, email <a href="mailto:stefan.cutler@gmail.com">stefan.cutler@gmail.com</a>. A reasonable step may be taken to verify the request before acting on it.</p></section>
          <section><h2>Changes</h2><p>This policy may be updated when the website or its practices change. The revised date will be posted at the top of this page.</p></section>
          <section><h2>Contact</h2><p>Questions about this policy can be sent to <a href="mailto:stefan.cutler@gmail.com">stefan.cutler@gmail.com</a>.</p></section>
        </article>
      </div>

      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/contact">Contact</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
