"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    { q: "コーチングは初めてですが大丈夫ですか？", a: "はい、全く問題ありません。現在の状況や目標に合わせて、最適な進め方を一緒に設計していきます。" },
    { q: "どのような人が受けていますか？", a: "経営者、フリーランス、クリエイターなど、現状を打破し、次のステージへ進みたいと願うすべての方々です。" },
    { q: "セッションはオンラインですか？", a: "基本はZoomを使用したオンラインセッションです。ご希望があれば対面での実施も調整可能です（別途交通費等）。" },
    { q: "支払い方法は？", a: "銀行振込、またはクレジットカード（Stripe）に対応しています。" },
];

export default function FAQ() {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="font-bold text-lg mb-2 flex items-start gap-3">
                                <span className="text-gray-300">Q.</span> {item.q}
                            </h3>
                            <p className="text-gray-600 pl-8 text-sm leading-relaxed">
                                {item.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
