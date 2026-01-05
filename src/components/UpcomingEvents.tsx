"use client";

import { motion } from "framer-motion";

const logs = [
    { date: "2024.12.15", title: "Year End Bonenkai @ Roppongi", cat: "Social" },
    { date: "2024.11.23", title: "Autumn Leaves Hike @ Mt. Oyama", cat: "Hiking" },
    { date: "2024.10.10", title: "HYROX Simulation", cat: "Training" },
];

export default function UpcomingEvents() {
    return (
        <section className="py-32 px-6 md:px-12 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
                {/* Next Event */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8"
                    >
                        [ Next Session ]
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="border-l-2 border-white pl-8"
                    >
                        <span className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2 block">Incoming</span>
                        <h3 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">
                            Mt. Takao<br />Winter Hike
                        </h3>
                        <p className="text-xl font-mono text-gray-400">Jan 18, 2026 — 08:00 AM</p>
                    </motion.div>
                </div>

                {/* Logs */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8"
                    >
                        [ Activity Log ]
                    </motion.h2>
                    <div className="space-y-6">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex justify-between items-center border-b border-gray-900 pb-4 group cursor-default"
                            >
                                <div>
                                    <p className="text-xs text-gray-600 font-mono mb-1">{log.date}</p>
                                    <h4 className="text-lg font-bold group-hover:text-gray-300 transition-colors">{log.title}</h4>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-600 border border-gray-800 px-2 py-1 rounded-sm">
                                    {log.cat}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
