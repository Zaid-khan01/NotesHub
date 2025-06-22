import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 bg-[#050414] text-white overflow-hidden"
    >
      {/* Top SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
          <path
            d="M-0.00,49.98 C149.99,150.00 271.01,-49.98 500.00,49.98 L500.00,0.00 L-0.00,0.00 Z"
            fill="#050414"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-blue-400"
        >
          About Notes Hub
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Notes Hub is a free platform designed for students of all levels — school or college — to access
          high-quality, well-organized academic notes. Whether you’re in 10th, 12th, BCA, BTech, or Diploma,
          our goal is to make your learning easier and smarter.
        </motion.p>

        <motion.p
          className="text-lg mt-6 leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Built using modern web technologies like
          <span className="font-semibold text-blue-400"> React </span>
          and
          <span className="font-semibold text-blue-400"> Tailwind CSS</span>, the platform is fast, responsive, and visually pleasing.
          We believe learning should be accessible to everyone — that’s why it’s 100% free.
        </motion.p>
      </motion.div>

      {/* Bottom SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
          <path
            d="M-0.00,49.98 C149.99,150.00 271.01,-49.98 500.00,49.98 L500.00,150.00 L-0.00,150.00 Z"
            fill="#050414"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
