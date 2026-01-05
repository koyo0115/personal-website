"use client";

import { motion } from "framer-motion";
import { Mountain, Dumbbell, Film, Waves } from "lucide-react";

const pillars = [
    {
        title: "Hiking",
        subtitle: "Peak Performance",
        desc: "山と向き合い、己の限界を知る。",
        icon: <Mountain className="w-8 h-8" />,
        bg: "from-green-900 to-green-950"
    },
    {
        title: "HYROX",
        subtitle: "The Engine",
        desc: "心拍を上げ、身体の強さを証明する。",
        icon: <Dumbbell className="w-8 h-8" />,
        bg: "from-stone-800 to-stone-900"
    },
    {
        title: "Cinema",
        subtitle: "Deep Dive",
        desc: "他者の物語を通じ、自らの価値観を問う。",
        icon: <Film className="w-8 h-8" />,
        bg: "from-teal-900 to-teal-950"
    },
    {
        title: "Sauna",
        subtitle: "Recovery",
        desc: "思考を削ぎ落とし、自分に戻る時間。",
        icon: <Waves className="w-8 h-8" />,
        bg: "from-emerald-900 to-[#021a12]"
    }
];

export default function ActivityPillars() {
    return (
        <section className="py-32 px-6 md:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12"
                >
                    [ 01 — Activity Pillars ]
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-12 border border-white/10 bg-gradient-to-br ${pillar.bg} overflow-hidden hover:border-white/30 transition-colors`}
                        >
                            <div className="absolute top-4 right-4 text-gray-700 group-hover:text-white transition-colors duration-500">
                                {pillar.icon}
                            </div>

                            <div className="relative z-10 pt-12">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                                    {pillar.subtitle}
                                </p>
                                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300">
                                    {pillar.desc}
                                </p>
                            </div>

                            {/* Hover Effect */}
                            <motion.div
                                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
