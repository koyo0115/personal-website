"use client";

import { motion } from "framer-motion";

export default function Profile() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 aspect-square bg-gray-200 rounded-2xl overflow-hidden relative"
                >
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 bg-gray-300" />
                </motion.div>

                <div className="w-full md:w-1/2 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold uppercase tracking-widest text-gray-400"
                    >
                        Profile
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold"
                    >
                        山崎 耕陽<br />
                        <span className="text-xl font-normal text-gray-600 block mt-2">Koyo Yamazaki</span>
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 leading-relaxed space-y-4"
                    >
                        <p>
                            Visionary Coach / Entrepreneur.
                        </p>
                        <p>
                            「常識」という枠組みを取り払い、誰もが自分の本来の輝きを取り戻すためのコーチングを提供しています。
                        </p>
                        <p>
                            ビジネスだけでなく、人生そのものを「アート」として捉え、クライアント一人ひとりの魂が震えるようなビジョンを共に描き、実装まで伴走します。
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
