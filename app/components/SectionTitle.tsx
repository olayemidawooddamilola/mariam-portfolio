"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold inline-block border-l-4 border-indigo-500 pl-4 text-gray-800">
        {title}
      </h2>
    </motion.div>
  );
}