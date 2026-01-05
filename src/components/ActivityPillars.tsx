"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { activities } from "@/lib/activities";

// Rendering 6 Pillars Grid
export default function ActivityPillars() {
    return (
        <section className="py-32 px-6 md:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-16"
                >
                    Our Pillars
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((pillar, index) => (
                        <Link href={`/activities/${pillar.id}`} key={index} className="group block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative h-[400px] p-8 flex flex-col justify-between overflow-hidden border border-white/10 hover:border-white/30 transition-colors bg-gradient-to-br ${pillar.gradient}`}
                            >
                                {/* Hover Image Reveal */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-700 grayscale"
                                    style={{ backgroundImage: `url(${pillar.image})` }}
                                />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
                                        <pillar.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                                    </div>
                                    <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block group-hover:text-gray-300">
                                        {pillar.englishName}
                                    </span>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:scale-105 transition-transform origin-left">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-white transition-colors">
                                        {pillar.concept}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
