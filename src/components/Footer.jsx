function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#player" className="footer-logo">
            Spotify
          </a>

          <p>
            Music discovery, redesigned.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>

            <a href="#discover">Discover</a>
            <a href="#showcase">Experience</a>
            <a href="#how-it-works">How it works</a>
          </div>

          <div>
            <span>Project</span>

            <a href="#player">Home</a>
            <a href="#showcase">Product</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Unofficial Spotify redesign concept
        </p>

        <p>
          © 2026 Spotify Concept
        </p>
      </div>
    </footer>
  );
}

export default Footer;