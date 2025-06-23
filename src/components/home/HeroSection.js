"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Star, Users, BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const stats = [
    { number: "50,000+", label: "Students", icon: Users },
    { number: "1,200+", label: "Courses", icon: BookOpen },
    { number: "4.9", label: "Rating", icon: Star },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  // Example featured course (replace with real data as needed)
  const featuredCourse = {
    title: "Modern Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "Build responsive websites with React, Next.js, and Tailwind CSS.",
    link: "/course/modern-web-development",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80"
          alt="Banner Background"
          className="w-full h-full object-cover object-center opacity-60"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-gray-900/70 to-gray-950/90" />
      </div>

      {/* Animated Background Elements */}
      {isClient && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-400 opacity-10 blur-2xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: Math.random() * 120 + 60,
                height: Math.random() * 120 + 60,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl mx-auto text-center py-20">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Potential
            </span>
            <br />
            with{" "}
            <span className="text-gradient">EduFlow Courses</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-purple-700/20 rounded-lg text-purple-300 font-semibold mr-2">
              #1 Online Learning Platform
            </span>
            Join thousands of learners and start mastering new skills today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-purple-200 hover:border-purple-400 text-white bg-white/10 backdrop-blur-md"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

    

        
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center bg-white/10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
