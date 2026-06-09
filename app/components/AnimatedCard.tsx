"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg card-hover"
    >
      {children}
    </motion.div>
  );
}