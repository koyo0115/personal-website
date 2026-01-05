"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
    {
        title: "Personal Coaching",
        price: "¥30,000 / month",
        description: "1対1で深く向き合い、あなたの潜在能力を最大限に引き出す継続セッション。",
        features: ["月2回のオンラインセッション (60分)", "LINEでの無制限相談", "目標達成プランニング"],
        recommended: true,
    },
    {
        title: "Visionary Session",
        price: "¥15,000 / shot",
        description: "現状の課題を整理し、次の一歩を明確にする単発の戦略セッション。",
        features: ["オンラインセッション (90分)", "アクションプラン作成", "フォローアップメッセージ"],
        recommended: false,
    },
];

export default function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50 text-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
                >
                    Coaching Plans
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${plan.recommended
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-gray-200"
                                }`}
                        >
                            {plan.recommended && (
                                <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                    RECOMMENDED
                                </span>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                            <p className={`text-3xl font-bold mb-4 ${plan.recommended ? "text-gray-200" : "text-gray-800"}`}>
                                {plan.price}
                            </p>
                            <p className={`mb-8 ${plan.recommended ? "text-gray-400" : "text-gray-600"}`}>
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check size={18} className={plan.recommended ? "text-white" : "text-black"} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://line.me/R/ti/p/@placeholder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-colors ${plan.recommended
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                Apply Now <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
