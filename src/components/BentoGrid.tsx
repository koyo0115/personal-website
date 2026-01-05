"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Globe } from "lucide-react";

export default function BentoGrid() {
    return (
        <section className="py-32 px-6 md:px-12 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase"
                >
                    Our Methodology
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
                    {/* Main Philosophy - Large Square */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 row-span-2 bg-gray-900 border border-gray-800 p-12 flex flex-col justify-between group hover:border-gray-600 transition-colors"
                    >
                        <div>
                            <Zap className="w-12 h-12 mb-8 text-white" />
                            <h3 className="text-3xl font-bold mb-6 uppercase">Total Domination</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don't just "support" businesses. We inject a high-frequency vision that shatters market norms.
                                By aligning logical strategy with intuitive edge, we create monopolies.
                            </p>
                        </div>
                        <div className="mt-8">
                            <span className="text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Read the Manifesto →</span>
                        </div>
                    </motion.div>

                    {/* Service 1 - Quarter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 bg-gray-900 border border-gray-800 p-8 flex flex-col justify-between hover:bg-gray-800 transition-colors"
                    >
                        <Globe className="w-8 h-8 mb-4 text-gray-400" />
                        <div>
                            <h4 className="text-xl font-bold mb-2 uppercase">Global Strategy</h4>
                            <p className="text-sm text-gray-500">Cross-border market entry and scaling.</p>
                        </div>
                    </motion.div>

                    {/* Service 2 - Quarter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 bg-white text-black p-8 flex flex-col justify-between"
                    >
                        <Star className="w-8 h-8 mb-4 text-black" />
                        <div>
                            <h4 className="text-xl font-bold mb-2 uppercase">Brand Architecture</h4>
                            <p className="text-sm text-gray-600">Forging identities that command premium.</p>
                        </div>
                    </motion.div>

                    {/* Image Block - Wide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 md:col-span-2 bg-gray-900 border border-gray-800 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/111111/444444/png?text=VISION')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50" />
                        <div className="absolute inset-0 p-8 flex items-end">
                            <h3 className="text-4xl font-black text-white mix-blend-difference uppercase">Visionary<br />Network</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
