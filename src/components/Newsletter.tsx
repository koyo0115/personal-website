"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Visionary Insights</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            最新のコーチング理論、ビジネスのヒント、そしてKoyo Yamazakiの個人的な気づきを不定期でお届けします。
                        </p>

                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 transition-colors"
                            />
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                Subscribe <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
