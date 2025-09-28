"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggle } from "../common/theme/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "bg-background/50 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="https://nvhac9j28qs9fiq8.public.blob.vercel-storage.com/logos/F_Logo_2_w_2k_asterisk.png"
            alt="Logo"
            width={200}
            height={80}
            className="object-cover pointer-events-none select-none"
            draggable={false}
          />
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#services">Services</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="relative group px-8 py-4 border border-white/20 rounded-full text-white/90 hover:text-black font-medium transition-all duration-300 hover:bg-accent"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-white opacity-10 blur-xl rounded-full group-hover:opacity-30 transition duration-300" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
