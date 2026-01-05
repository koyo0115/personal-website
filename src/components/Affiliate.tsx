"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const products = [
    { title: "Recommended Book 1", category: "Book", link: "#" },
    { title: "Productivity Tool", category: "Gadget", link: "#" },
    { title: "Wellness Supplement", category: "Health", link: "#" },
];

export default function Affiliate() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
                >
                    My Essentials
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.a
                            key={index}
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="bg-gray-100 aspect-[4/3] rounded-xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                                    <ExternalLink className="text-black" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-sm text-gray-400">{product.category}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
