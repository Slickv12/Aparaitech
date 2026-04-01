import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Open Roles', value: '24+' },
  { label: 'Hiring Cities', value: '3' },
  { label: 'Avg Response', value: '48h' },
];

const floating = {
  animate: { y: [0, -12, 0], x: [0, 8, 0] },
  transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
};

const HeroAnimated = () => (
  <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 md:p-16 text-white">
    <motion.div className="absolute -top-16 -left-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" {...floating} />
    <motion.div className="absolute -bottom-10 right-10 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" {...floating} transition={{ ...floating.transition, duration: 10 }} />

    <div className="relative z-10 max-w-4xl">
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-sm uppercase tracking-widest text-cyan-200">
        Career Platform 2.0
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold leading-tight">
        Build your next <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">breakthrough career</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-slate-200 text-lg md:text-xl">
        Explore modern roles, AI-powered recommendations, and a guided hiring journey designed for high-impact engineers.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link to="/positions" className="btn-primary">Explore Opportunities</Link>
        <Link to="/dashboard" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">Open Dashboard</Link>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + index * 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm text-slate-300">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroAnimated;
