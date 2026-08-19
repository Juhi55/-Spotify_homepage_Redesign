import {
  Heart,
  MoreHorizontal,
  Play,
  Volume2,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { motion } from "framer-motion";

const playlists = [
  {
    title: "Midnight Drive",
    artist: "Demo Artist",
    color: "linear-gradient(135deg, #1ed760, #163b25)",
  },
  {
    title: "Deep Focus",
    artist: "Focus Mix",
    color: "linear-gradient(135deg, #6c63ff, #242047)",
  },
  {
    title: "Slow Sunday",
    artist: "Sunday Sessions",
    color: "linear-gradient(135deg, #f59e0b, #4a2d05)",
  },
  {
    title: "After Hours",
    artist: "Night Collection",
    color: "linear-gradient(135deg, #ec4899, #47132f)",
  },
];

function ProductShowcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-container">

        {/* Section heading */}
        <motion.div
          className="showcase-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">THE EXPERIENCE</p>

          <h2>
            Your music,
            <span> your space.</span>
          </h2>

          <p>
            A calmer way to explore what you love,
            discover something new, and keep listening.
          </p>
        </motion.div>

        {/* Product UI */}
        <motion.div
          className="product-window"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >

          {/* Sidebar */}
          <aside className="product-sidebar">
            <div className="sidebar-logo">
              Spotify
            </div>

            <nav className="sidebar-nav">
              <a href="#showcase" className="active">
                Home
              </a>

              <a href="#discover">
                Discover
              </a>

              <a href="#showcase">
                Your Library
              </a>
            </nav>

            <div className="sidebar-playlist">
              <p>YOUR PLAYLISTS</p>

              <span>Deep Focus</span>
              <span>Night Drive</span>
              <span>Weekend Mix</span>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="product-main">

            <div className="dashboard-top">
              <div>
                <p className="dashboard-eyebrow">
                  GOOD EVENING
                </p>

                <h3>Made for your moment</h3>
              </div>

              <button className="profile-button">
                JD
              </button>
            </div>

            {/* Recently played */}
            <div className="dashboard-section">
              <div className="dashboard-section-header">
                <h4>Recently played</h4>
                <span>See all</span>
              </div>

              <div className="playlist-grid">
                {playlists.map((playlist) => (
                  <div
                    className="playlist-card"
                    key={playlist.title}
                  >
                    <div
                      className="playlist-cover"
                      style={{
                        background: playlist.color,
                      }}
                    >
                      <span>♪</span>

                      <button
                        className="playlist-play"
                        aria-label={`Play ${playlist.title}`}
                      >
                        <Play
                          size={16}
                          fill="currentColor"
                        />
                      </button>
                    </div>

                    <h5>{playlist.title}</h5>
                    <p>{playlist.artist}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current focus */}
            <div className="current-track">

              <div className="track-art">
                ♪
              </div>

              <div className="track-details">
                <span>NOW PLAYING</span>
                <strong>Midnight Drive</strong>
                <small>Demo Artist</small>
              </div>

              <button
                className="track-heart"
                aria-label="Like song"
              >
                <Heart size={18} />
              </button>

              <button
                className="track-play"
                aria-label="Play song"
              >
                <Play
                  size={18}
                  fill="currentColor"
                />
              </button>

            </div>

            {/* Bottom player */}
            <div className="dashboard-player">

              <div className="player-song">
                <strong>Midnight Drive</strong>
                <span>Demo Artist</span>
              </div>

              <div className="dashboard-controls">

                <div className="control-buttons">
                  <button aria-label="Previous">
                    <SkipBack size={16} />
                  </button>

                  <button
                    className="dashboard-play"
                    aria-label="Play"
                  >
                    <Play
                      size={16}
                      fill="currentColor"
                    />
                  </button>

                  <button aria-label="Next">
                    <SkipForward size={16} />
                  </button>
                </div>

                <div className="dashboard-progress">
                  <div className="dashboard-progress-fill" />
                </div>

              </div>

              <div className="volume">
                <Volume2 size={16} />
                <div className="volume-line">
                  <div />
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ProductShowcase;