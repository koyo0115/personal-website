"use client";

import { motion } from "framer-motion";

const schedule = [
    { day: "WED", time: "20:00", activity: "The Stride", type: "Weekly" },
    { day: "WED", time: "20:00", activity: "The Engine", type: "Weekly" },
    { day: "FRI", time: "19:00", activity: "The Lens", type: "Bi-weekly" },
    { day: "SAT", time: "06:00", activity: "The Ascent", type: "Monthly" },
    { day: "SUN", time: "10:00", activity: "The Void", type: "Monthly" },
];

export default function WeeklyRituals() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <h2 className="text-3xl font-black uppercase tracking-tighter">
                        Weekly Rituals
                    </h2>
                    <p className="text-gray-500 text-sm font-medium">
                        Join the rhythm. Prove your existence.
                    </p>
                </motion.div>

                <div className="border-t border-white/10">
                    {schedule.map((slot, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-colors px-4 group"
                        >
                            <div className="flex items-center gap-8 md:gap-16">
                                <span className="text-xs font-bold text-gray-600 w-8">{slot.day}</span>
                                <span className="text-lg font-bold font-mono text-gray-400 group-hover:text-white transition-colors">{slot.time}</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-black uppercase tracking-tight group-hover:text-green-400 transition-colors">{slot.activity}</span>
                                <span className="text-xs text-gray-600 uppercase tracking-widest">{slot.type}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
