"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jobs } from "@/lib/jobs";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Briefcase } from "lucide-react";

export default function Careers() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8"
                >
                    Open Roles
                </motion.h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto uppercase tracking-widest">
                    Join the elite unit defining the future of business.
                </p>
            </section>

            {/* Job Grid */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/careers/${job.slug}`} className="group block relative aspect-video overflow-hidden border border-gray-800 bg-gray-900">
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                    style={{ backgroundImage: `url(${job.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h2 className="text-3xl font-black uppercase mb-4 leading-none">{job.title}</h2>
                                    <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} /> {job.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} /> {job.type}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Anti-Persona Section */}
            <section className="py-32 px-6 md:px-12 bg-black border-t border-gray-900">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-black uppercase leading-tight mb-8">
                            You Shouldn't<br />Apply If
                        </h2>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <span className="text-gray-600 font-mono">01</span>
                            <p className="text-lg font-medium leading-relaxed">
                                You want a normal 9-5. This role is <span className="text-white font-bold">NOT easy</span> & requires an all-in mentality. We put in the work that others won't.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600 font-mono">02</span>
                            <p className="text-lg font-medium leading-relaxed">
                                You are married to your ideas. We demand <span className="text-white font-bold">radical open-mindedness</span>. If you can't take direct, sometimes harsh feedback, you won't last.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600 font-mono">03</span>
                            <p className="text-lg font-medium leading-relaxed">
                                You crave stability over growth. We are in constant flux, always pushing the "Edge". Chaos is our comfort zone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
