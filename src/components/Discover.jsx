import { ArrowUpRight, Headphones, Moon, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const moods = [
  {
    title: "Deep Focus",
    description: "Stay locked in.",
    icon: Headphones,
  },
  {
    title: "Slow Sunday",
    description: "Take it easy.",
    icon: Moon,
  },
  {
    title: "Good Energy",
    description: "Turn it up.",
    icon: Zap,
  },
  {
    title: "Late Night",
    description: "For after hours.",
    icon: Sparkles,
  },
];

function Discover() {
  return (
    <section className="discover-section" id="discover">
      <div className="discover-container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">DISCOVER</p>

          <h2>What are you in the mood for?</h2>

          <p>
            Start with a feeling. We'll take care of the music.
          </p>
        </motion.div>

        {/* Mood Cards */}
        <div className="mood-grid">
          {moods.map((mood, index) => {
            const Icon = mood.icon;

            return (
              <motion.div
                className="mood-card"
                key={mood.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
              >
                <div className="mood-icon">
                  <Icon size={22} />
                </div>

                <div className="mood-content">
                  <h3>{mood.title}</h3>
                  <p>{mood.description}</p>
                </div>

                <button
                  className="mood-arrow"
                  aria-label={`Explore ${mood.title}`}
                >
                  <ArrowUpRight size={20} />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Discover;