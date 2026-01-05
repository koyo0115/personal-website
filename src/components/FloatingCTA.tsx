"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-6 left-6 right-6 md:hidden z-50 pointer-events-none"
                >
                    <a
                        href="https://line.me/R/ti/p/@placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto bg-black text-white w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl"
                    >
                        <Send size={18} />
                        Apply on LINE
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
