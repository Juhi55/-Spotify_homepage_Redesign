import { ArrowRight, Play, Pause, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(102);

  const duration = 225;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTime((currentTime) => {
        if (currentTime >= duration) {
          setIsPlaying(false);
          return duration;
        }

        return currentTime + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const resetPlayer = () => {
    setIsPlaying(false);
    setTime(102);
  };

  const skipForward = () => {
    setTime((currentTime) =>
      Math.min(currentTime + 10, duration)
    );
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const progress = (time / duration) * 100;

  return (
    <section className="hero" id="player">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="hero-label">
            YOUR MUSIC, YOUR MOMENT
          </p>

          <h1>
            Find your next
            <span> favorite song.</span>
          </h1>

          <p className="hero-description">
            Discover music that fits your mood, your moment,
            and the way you want to listen.
          </p>

          <a href="#discover" className="hero-button">
            Start listening
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* MUSIC PLAYER */}
        <motion.div
          className="music-card"
          initial={{
  opacity: 0,
  x: 60,
  scale: 0.95,
}}
animate={{
  opacity: 1,
  x: 0,
  scale: 1,
}}
transition={{
  duration: 1,
  delay: 0.2,
  ease: "easeOut",
}}
        >
          {/* ALBUM ART */}
          <div className="album-art">
            <span>♪</span>
          </div>

          {/* SONG INFORMATION */}
          <div className="song-info">
            <div>
              <h3>Midnight Drive</h3>
              <p>Demo Artist</p>
            </div>

            <button
              className="play-button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause
                  size={20}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={20}
                  fill="currentColor"
                />
              )}
            </button>
          </div>

          {/* PROGRESS BAR */}
          <div className="progress-area">
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
            </div>

            <div className="time">
              <span>{formatTime(time)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* PLAYER CONTROLS */}
          <div className="player-controls">

            {/* RESET */}
            <button
              onClick={resetPlayer}
              aria-label="Reset player"
            >
              <RotateCcw size={18} />
            </button>

            {/* PLAY / PAUSE */}
            <button
              className="main-play"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause
                  size={20}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={20}
                  fill="currentColor"
                />
              )}
            </button>

            {/* SKIP */}
            <button
              onClick={skipForward}
              aria-label="Skip forward 10 seconds"
            >
              +10
            </button>

          </div>

          {/* PLAYING STATUS */}
          {isPlaying && (
            <p className="playing-text">
              ● Now playing
            </p>
          )}
        </motion.div>

      </div>
    </section>
  );
}

export default Home;