"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

export default function VisualVibe() {
    return (
        <section className="py-32 px-6 md:px-12 text-white border-t border-white/10 bg-gradient-to-t from-[#021a12] to-transparent">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                    Moments of Clarity.
                </h2>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                    <Instagram size={16} /> Follow our Journey <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-square bg-[#111] overflow-hidden group cursor-pointer"
                    >
                        <div className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url('https://placehold.co/600x600/1a1a1a/333333/png?text=Vibe+${i}')` }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
