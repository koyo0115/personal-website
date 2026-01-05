"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jobs } from "@/lib/jobs";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function JobDetail({ params }: { params: { slug: string } }) {
    const job = jobs.find((j) => j.slug === params.slug);

    if (!job) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="pt-40 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Title Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                        {job.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-800 py-8">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Location</p>
                            <p className="font-bold text-lg">{job.location}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Team</p>
                            <p className="font-bold text-lg">{job.team}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Type</p>
                            <p className="font-bold text-lg">{job.type}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Date Posted</p>
                            <p className="font-bold text-lg">Feb 2025</p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full aspect-[21/9] bg-gray-900 rounded-none overflow-hidden mb-24 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto space-y-24 pb-32">
                    <section>
                        <h3 className="text-3xl font-bold mb-8">Job Summary</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {job.summary}
                        </p>
                    </section>

                    <section className="border-t border-gray-900 pt-12">
                        <h3 className="text-3xl font-bold mb-8">Your Role</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {job.role}
                        </p>
                    </section>

                    <section className="border-t border-gray-900 pt-12">
                        <h3 className="text-3xl font-bold mb-8">Ideal Candidate</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {job.candidate}
                        </p>
                    </section>

                    {/* Apply Card */}
                    <section className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-12 text-center rounded-none mt-12">
                        <h3 className="text-3xl font-bold mb-8">Think you're a fit? Apply Today.</h3>
                        <button className="bg-white text-black px-12 py-4 font-black uppercase tracking-widest hover:scale-105 transition-transform">
                            Apply Now
                        </button>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    );
}
