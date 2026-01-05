"use client";

import { motion } from "framer-motion";
import { BookOpen, Instagram } from "lucide-react";

export default function Media() {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Media & Articles
                    </motion.h2>
                    <a href="https://note.com" target="_blank" className="text-gray-400 hover:text-white transition-colors mt-4 md:mt-0 underline underline-offset-4">
                        View All on Note
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Placeholder for Note Articles */}
                    {[1, 2].map((item) => (
                        <motion.a
                            key={item}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item * 0.1 }}
                            className="block bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors"
                        >
                            <BookOpen className="mb-4 text-gray-400" />
                            <h3 className="text-xl font-bold mb-2">
                                Visionary思考の実践：第{item}章
                            </h3>
                            <p className="text-gray-400 text-sm">
                                2024.01.0{item} • Note
                            </p>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Instagram />
                        <span>Follow on Instagram</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
