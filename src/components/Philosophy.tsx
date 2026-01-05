"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Philosophy() {
    return (
        <section className="py-32 px-6 md:px-12 text-white border-b border-white/5 bg-gradient-to-b from-[#021a12] to-[#042218]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left: Concept */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-white">
                        Why "On Ur Own"?
                    </h2>
                    <p className="text-gray-400 text-lg leading-loose font-medium">
                        豊かな共創は、自立した個から始まる。<br />
                        群れるのではなく、まず自分自身の足で立つこと。<br />
                        内なる声に耳を傾け、心身を研ぎ澄ますこと。<br /><br />
                        私たちは、自分自身を深く知るための活動を共有し、<br />
                        互いに高め合う「個」の集合体です。
                    </p>
                </motion.div>

                {/* Right: Note Link */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="https://note.com/"
                        target="_blank"
                        className="block bg-[#111] p-12 border border-white/10 hover:border-white/30 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Manifesto</span>
                            <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-8">
                            思想を読む。
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Read the full manifesto on Note.
                        </p>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
