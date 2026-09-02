export const metadata = {
  title: 'About Stefan',
  description: 'More about Stefan, what he is learning, and what he is currently reading and playing.',
};

const shelves = [
  {
    number: '01',
    title: 'Games I’m playing',
    note: 'Hypixel SkyBlock · Roblox · Grand Theft Auto V',
  },
  {
    number: '02',
    title: 'Books I’m reading',
    note: 'Animal Farm by George Orwell',
  },
  {
    number: '03',
    title: 'Books I recommend',
    note: 'Recommendations coming soon.',
  },
  {
    number: '04',
    title: 'What I’m learning',
    note: 'Python, web development, robotics, and machine learning.',
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="aboutPage">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="returnButton" href="/">← Return home</a>
        <div className="navLinks"><a href="#education">Education</a><a href="#currently">Currently</a><a href="/contact">Contact</a></div>
      </nav>

      <header className="aboutHero shell">
        <p className="kicker">About me</p>
        <h1>I like figuring out how things work.</h1>
        <div className="aboutIntro">
          <p>I&apos;m Stefan, a developer who is still early in the journey and serious about learning. I&apos;m drawn to projects that mix software, engineering, and practical problem-solving.</p>
          <p>This page is the less formal side of my portfolio—a running record of what I&apos;m playing, reading, recommending, and learning right now.</p>
        </div>
        <a className="jumpLink" href="#currently">See what I&apos;m into ↓</a>
      </header>

      <section className="currently shell" id="currently">
        <header className="sectionHead"><p>01 / Currently</p><h2>What has my attention</h2></header>
        <div className="shelfList">
          {shelves.map((shelf) => (
            <article className="shelf" key={shelf.title}>
              <span>{shelf.number}</span>
              <h3>{shelf.title}</h3>
              <p>{shelf.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="education shell" id="education">
        <header className="sectionHead"><p>02 / Education</p><h2>Where I&apos;m studying</h2></header>
        <div className="educationList">
          <article className="educationEntry">
            <span>01</span>
            <h3>Great Neck South High School</h3>
            <p>Aug 2022 — Jun 2026</p>
          </article>
          <article className="educationEntry">
            <span>02</span>
            <h3>Olin College of Engineering</h3>
            <p>Sept 2026 — May 2030</p>
          </article>
        </div>
      </section>

      <section className="aboutValues">
        <div className="shell valuesGrid">
          <p className="kicker">03 / The short version</p>
          <div>
            <h2>Curious by default.</h2>
            <p>I learn best by making something real, testing it, and improving it. That might mean building a website, thinking through a robotic arm, or reading until a complicated subject starts to feel understandable.</p>
            <a className="textLink" href="/#projects">See my current projects ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/privacy">Privacy</a><a href="/">Back home ↑</a></div></footer>
    </main>
  );
}
