"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Hiroshi T.",
        role: "Tech Startup CEO",
        text: "Koyo's coaching shattered my self-imposed limits. I didn't just scale my business; I evolved my entire existence. Truly visionary."
    },
    {
        name: "Sarah M.",
        role: "Creative Director",
        text: "I was lost in the noise. The sessions helped me find my 'Vibe' again. Now, I create with absolute clarity and purpose."
    },
    {
        name: "Kenji Y.",
        role: "Freelance Developer",
        text: "Beyond technical advice, he guided me to design a life that resonates with my soul. The ROI is immeasurable."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight"
                >
                    Voices of Visionaries
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-900 p-8 rounded-2xl border border-gray-800 relative hover:border-gray-600 transition-colors"
                        >
                            <div className="text-4xl text-gray-700 absolute top-4 left-6">“</div>
                            <p className="text-gray-300 leading-relaxed mb-6 pt-4 relative z-10">
                                {t.text}
                            </p>
                            <div>
                                <h4 className="font-bold">{t.name}</h4>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
