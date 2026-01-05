"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Kinetic Background */}
            {/* Alps Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#021a12]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 mix-blend-difference">
                        First, Find<br />
                        Your Own Ground.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.5 }}
                    className="text-sm md:text-lg text-gray-400 font-medium tracking-wide mb-16 max-w-xl mx-auto leading-relaxed"
                >
                    身体を動かし、整える。<br />
                    自分自身と向き合うための、招待制アクティビティ・コレクティブ。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    <a
                        href="https://line.me/R/ti/p/@placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-12 py-4 text-sm font-bold tracking-widest uppercase hover:blur-[1px] transition-all"
                    >
                        参加リクエスト
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
