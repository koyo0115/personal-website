"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, BookOpen, Send } from "lucide-react";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
        >
            <Link href="/" className="text-xl font-black tracking-tighter uppercase flex items-center gap-3 hover:opacity-80 transition-opacity">
                On. Ur Own
            </Link>

            <nav className="flex items-center gap-6">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Instagram"
                >
                    <Instagram size={20} />
                </a>
                <a
                    href="https://note.com"
                    target="_blank"
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Note"
                >
                    <BookOpen size={20} />
                </a>
                <a
                    href="https://line.me"
                    target="_blank"
                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="LINE"
                >
                    <Send size={20} />
                </a>
            </nav>
        </motion.header>
    );
}
