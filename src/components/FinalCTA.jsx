import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="final-cta">
      <motion.div
        className="final-cta-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">READY WHEN YOU ARE</p>

        <h2>
          Your next favorite song
          <span> is one click away.</span>
        </h2>

        <p>
          Discover something new and make your next
          listening session count.
        </p>

        <a href="#player" className="final-cta-button">
          Start listening
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}

export default FinalCTA;