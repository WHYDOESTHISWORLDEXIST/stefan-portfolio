export const metadata = {
  title: 'Music — Stefan',
  description: 'The music Stefan is listening to, organized into personal playlists.',
};

const appleMusicUrl = 'https://music.apple.com/us/playlist/netty-demon/pl.u-KVXBk1JuZqWrjB1';

const playlists = [
  { number: '01', title: 'Current playlist', description: 'Netty Demon — my current rotation on Apple Music.', status: 'Listen on Apple Music ↗', href: appleMusicUrl },
  { number: '02', title: 'Focus & coding', description: 'Music for building, reading, and getting work done.', status: 'Playlist coming soon' },
  { number: '03', title: 'Late night', description: 'A quieter soundtrack for the end of the day.', status: 'Playlist coming soon' },
  { number: '04', title: 'All-time favorites', description: 'Albums and songs that have stayed with me.', status: 'Recommendations coming soon' },
];

export default function MusicPage() {
  return (
    <main id="top" className="musicPage">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="returnButton" href="/">← Return home</a>
        <div className="navLinks"><a href="/about">About me</a><a href="#playlists">Playlists</a><a href="/support">Support</a><a href="/contact">Contact</a></div>
      </nav>

      <header className="musicHero shell">
        <p className="kicker">Music</p>
        <h1>What I&apos;m listening to.</h1>
        <div className="musicHeroBottom">
          <p>A place for the tracks, albums, and playlists that have my attention. I&apos;ll keep this page updated as my listening changes.</p>
          {appleMusicUrl ? (
            <a className="appleMusicLink" href={appleMusicUrl} target="_blank" rel="noreferrer">Open my current playlist ↗</a>
          ) : (
            <span className="appleMusicLink isDisabled" aria-disabled="true">Apple Music link coming soon</span>
          )}
        </div>
      </header>

      <section className="songOfWeek shell" aria-labelledby="song-of-week-title">
        <p className="kicker">01 / Song of the week</p>
        <div className="featuredSong">
          <span className="featuredSongLabel">This week</span>
          <div>
            <h2 id="song-of-week-title">Sober</h2>
            <p>by Nettspend</p>
          </div>
          <span className="featuredSongMark" aria-hidden="true">♪</span>
        </div>
      </section>

      <section className="playlistSection shell" id="playlists">
        <header className="sectionHead"><p>02 / Playlists</p><h2>Different moods,<br />different queues.</h2></header>
        <div className="playlistGrid">
          {playlists.map((playlist) => (
            <article className="playlistCard" key={playlist.title}>
              <span className="playlistNumber">{playlist.number}</span>
              <div>
                <h3>{playlist.title}</h3>
                <p>{playlist.description}</p>
              </div>
              {'href' in playlist && playlist.href ? (
                <a className="playlistStatus playlistStatusLink" href={playlist.href} target="_blank" rel="noreferrer">{playlist.status}</a>
              ) : (
                <span className="playlistStatus">{playlist.status}</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="musicNote">
        <div className="shell musicNoteInner">
          <p className="kicker">03 / Still listening</p>
          <h2>This page will grow one song at a time.</h2>
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Stefan</span><div className="footerLinks"><a href="/privacy">Privacy</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
