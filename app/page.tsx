import { projects } from './projects/projects';

export default function Home() {
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">Stefan</a>
        <div className="navLinks"><a href="/about">About me</a><a href="/music">Music</a><a href="/support">Support</a><a href="/contact">Contact</a></div>
      </nav>
      <div className="topicBar" aria-label="Portfolio topics">
        <div className="shell topicBarInner">
          <a href="/certifications"><span>Certifications</span><strong>3</strong></a>
          <a href="/books"><span>Books published</span><strong>1</strong></a>
          <a href="/websites"><span>Websites launched</span><strong>2</strong></a>
          <a href="/projects"><span>Current projects</span><strong>{projects.length}</strong></a>
        </div>
      </div>

      <section className="hero shell">
        <p className="kicker">Developer in progress</p>
        <h1>Hello, I&apos;m Stefan.</h1>
        <p className="intro">I&apos;m learning to build for the web. This is where I keep track of what I&apos;ve made, what I&apos;m figuring out, and what comes next.</p>
        <div className="heroMeta"><a href="#projects">See what I&apos;m working on ↓</a><span>Last updated August 2026</span></div>
      </section>

      <section className="work shell" id="projects">
        <header className="sectionHead"><p>01 / Work</p><h2>Things I&apos;m making</h2></header>
        <div className="projectList">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <span className="projectNumber">0{index + 1}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <a className="projectReadMore" href={`/projects/${project.slug}`} target="_self">Open project page →</a>
              </div>
              <div className="projectMeta"><span>{project.tools}</span><span>{project.year}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="record shell" aria-label="Published work and credentials">
        <div className="recordBlock" id="websites">
          <div className="recordTitle"><p>Websites launched</p><span>01</span></div>
          <div className="recordEntry"><strong>Personal portfolio</strong><span>This website · 2026</span></div>
        </div>
        <div className="recordBlock" id="certifications">
          <div className="recordTitle"><p>Certifications</p><span>03</span></div>
          <div className="recordEntry"><strong>HubSpot Marketing Certification</strong><span>HubSpot Academy</span></div>
          <div className="recordEntry"><strong>Rat Tickling Certification</strong><span>Purdue University</span></div>
          <div className="recordEntry"><strong>Montana Bear Identification Certification</strong><span>Montana Fish, Wildlife &amp; Parks</span></div>
        </div>
        <div className="recordBlock" id="books">
          <div className="recordTitle"><p>Books published</p><span>01</span></div>
          <a className="recordEntry recordLink bookEntry" href="https://www.amazon.com/dp/B0HBPKS26N" target="_blank" rel="noreferrer">
            <img src="/book-semiconductors.jpg" alt="Cover of Semiconductors: All About Them, I Guess? by Stefan Cutler" />
            <span className="bookDetails"><strong>Semiconductors: All About Them, I Guess?</strong><span>View on Amazon ↗</span></span>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell aboutGrid">
          <header className="sectionHead"><p>02 / About</p><h2>Starting small.<br />Paying attention.</h2></header>
          <div className="aboutCopy">
            <p>I&apos;m early in my development journey. I don&apos;t know everything yet, and that&apos;s the point—I like taking something unfamiliar apart until it makes sense.</p>
            <p>Right now I&apos;m focused on the web: learning how good interfaces are structured, how code becomes a working product, and how to make each project a little better than the last.</p>
            <a className="textLink" href="/about">More about me and what I&apos;m into ↗</a>
            <dl><div><dt>Known</dt><dd>C++, Java, TypeScript / JavaScript</dd></div><div><dt>Learning</dt><dd>Python, HTML, CSS, Node.js</dd></div><div><dt>Using</dt><dd>VS Code, Git, GitHub</dd></div><div><dt>Interested in</dt><dd>Useful software and thoughtful design</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="kicker">03 / Contact</p>
        <h2>If you&apos;re building something interesting, I&apos;d like to hear about it.</h2>
        <div className="contactLinks">
          <a className="emailLink" href="/contact">Send me a message ↗</a>
          <a className="emailLink" href="https://www.linkedin.com/in/stefan-cutler-9015223b3" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/privacy">Privacy</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
