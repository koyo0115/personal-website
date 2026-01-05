"use client";

import { activities } from "@/lib/activities";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ActivityDetail() {
    const params = useParams();
    const activity = activities.find(a => a.id === params.slug);

    if (!activity) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Activity Not Found</div>;
    }

    return (
        <main className="min-h-screen bg-[#021a12] text-white selection:bg-white selection:text-black">
            <Header />

            {/* Immersive Hero */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${activity.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#021a12]" />

                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="block text-sm font-bold tracking-[0.5em] uppercase text-gray-300 mb-6"
                    >
                        {activity.englishName}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8"
                    >
                        {activity.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl font-medium text-gray-200 tracking-wide"
                    >
                        {activity.concept}
                    </motion.p>
                </div>
            </section>

            {/* Philosophy & Ritual */}
            <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
                            The Philosophy
                        </h2>
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-200">
                            {activity.philosophy}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Ritual Section */}
                        <div>
                            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                                The Ritual
                            </h2>
                            <p className="text-lg text-gray-400 leading-loose border-l-2 border-white/20 pl-6">
                                {activity.ritual}
                            </p>
                        </div>

                        {/* Dynamic Details Section (Recommendations / Schedules) */}
                        {activity.details && (
                            <div>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                                    {activity.detailsTitle}
                                </h2>
                                <ul className="space-y-4">
                                    {activity.details.map((item, index) => (
                                        <li key={index} className="flex items-center gap-4 text-lg font-medium text-gray-300 border-b border-white/5 pb-4">
                                            <span className="text-xs text-gray-600 font-mono">0{index + 1}</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-8">
                            <a
                                href="https://discord.gg/952MyeaX"
                                target="_blank"
                                className="inline-block w-full text-center bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gray-200 transition-colors"
                            >
                                Join The Circle
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back Button */}
            <div className="fixed bottom-8 left-8 z-50">
                <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                    <ArrowLeft size={14} /> Back
                </Link>
            </div>

            <Footer />
        </main>
    );
}
