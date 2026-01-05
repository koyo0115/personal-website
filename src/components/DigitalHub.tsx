"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DigitalHub() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden border-t border-white/10">
            {/* Marquee */}
            <div className="relative flex overflow-x-hidden mb-24 opacity-50">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex text-[10rem] font-black leading-none whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900"
                >
                    THE INNER CIRCLE — KEEP MOVING — STAY CURIOUS — THE INNER CIRCLE — KEEP MOVING — STAY CURIOUS —
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Note Integration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="border border-white/10 p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group cursor-pointer"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-gray-500">[ Philosophy ]</span>
                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-6xl font-black mb-4 tracking-tighter mix-blend-difference">Note</h3>
                        <p className="text-gray-400 max-w-md">
                            Read our manifesto. Understanding "Why" we move is just as important as the movement itself.
                        </p>
                    </div>
                </motion.div>

                {/* Instagram Integration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="border border-white/10 p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group cursor-pointer"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-gray-500">[ Visual Vibe ]</span>
                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-6xl font-black mb-4 tracking-tighter mix-blend-difference">Instagram</h3>
                        <p className="text-gray-400 max-w-md">
                            Visual logs of our journey. From the mountain peaks to the neon city lights.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
