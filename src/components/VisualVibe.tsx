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
                    href="https://www.instagram.com/on.ur.own?igsh=a2swbHV6ZmkwcnR5&utm_source=qr"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                    <Instagram size={16} /> Follow our Journey <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-6">
                {[
                    { title: "Silence", img: "https://images.unsplash.com/photo-1519681393798-38e36fefce15?q=80&w=1000&auto=format&fit=crop" },
                    { title: "Focus", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1000&auto=format&fit=crop" },
                    { title: "Release", img: "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&w=1000&auto=format&fit=crop" },
                    { title: "Immerse", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-square bg-[#111] relative overflow-hidden group cursor-pointer"
                    >
                        <div
                            className="w-full h-full bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url('${item.img}')` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                            <span className="text-white font-bold tracking-widest uppercase border-b border-white pb-1">{item.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
