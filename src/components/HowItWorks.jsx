import { Compass, SlidersHorizontal, Play } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "Explore music based on your mood, moment, and what you already love.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Personalize",
    description:
      "Shape your listening experience around the sounds that feel right to you.",
  },
  {
    number: "03",
    icon: Play,
    title: "Listen",
    description:
      "Press play and let the right soundtrack take over your moment.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        <motion.div
          className="how-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            Less searching.
            <span> More listening.</span>
          </h2>

          <p>
            A simple experience designed to get you
            from "what should I listen to?" to play.
          </p>
        </motion.div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="step-card"
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="step-top">
                  <span>{step.number}</span>

                  <div className="step-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;