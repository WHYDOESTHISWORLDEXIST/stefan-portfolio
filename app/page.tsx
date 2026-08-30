const projects = [
  { number: '01', title: 'My first web project', description: 'A focused, useful web experience built while learning the foundations of modern development.', tags: ['Web', 'Design', 'JavaScript'] },
  { number: '02', title: 'A helpful little tool', description: 'A simple idea turned into software—made to solve a real problem and sharpen my craft.', tags: ['Node.js', 'Problem solving'] },
  { number: '03', title: 'What I build next', description: 'This space is reserved for the next experiment, collaboration, or ambitious idea.', tags: ['Coming soon'] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Stefa, home">Stefa</a>
        <div className="navLinks"><a href="#about">About</a><a href="#work">Work</a><a className="navCta" href="#contact">Let&apos;s talk</a></div>
      </nav>
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Available to learn, build & collaborate</div>
        <h1>Curiosity.<br /><em>Built beautifully.</em></h1>
        <div className="heroBottom"><p>I&apos;m Stefa, an aspiring developer exploring the space where thoughtful design meets useful technology.</p><a className="roundLink" href="#work">View my work <span>↘</span></a></div>
        <div className="orb orbOne" aria-hidden="true" /><div className="orb orbTwo" aria-hidden="true" />
      </section>
      <section className="about shell" id="about">
        <p className="sectionLabel">About</p>
        <div className="aboutGrid"><h2>Learning in public.<br />Building with purpose.</h2><div className="aboutCopy">
          <p>I&apos;m at the beginning of my development journey, which means I bring fresh energy, an open mind, and a willingness to figure things out.</p>
          <p>Right now I&apos;m growing my skills in the tools that power the web—and looking for meaningful problems to solve along the way.</p>
          <div className="skills" aria-label="Skills"><span>HTML & CSS</span><span>JavaScript</span><span>Node.js</span><span>Git & GitHub</span></div>
        </div></div>
      </section>
      <section className="work shell" id="work">
        <div className="sectionHead"><div><p className="sectionLabel">Selected work</p><h2>Ideas, made tangible.</h2></div><p>A growing collection. Replace these cards with your real projects as you build them.</p></div>
        <div className="projectGrid">{projects.map((project) => <article className="project" key={project.number}><div className="projectTop"><span>{project.number}</span><span className="arrow">↗</span></div><div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>
      <section className="contact" id="contact"><div className="shell contactInner">
        <p className="sectionLabel light">Start a conversation</p><h2>Let&apos;s make<br /><em>something great.</em></h2>
        <a className="emailLink" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
        <footer><span>© 2026 Stefa</span><span>Built with curiosity and care.</span></footer>
      </div></section>
    </main>
  );
}
