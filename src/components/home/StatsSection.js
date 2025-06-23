"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function StatsSection() {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    rating: 0,
    certificates: 0,
  });

  const finalValues = {
    students: 50000,
    courses: 1200,
    rating: 4.9,
    certificates: 25000,
  };

  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const stepTime = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(interval);
        }

        setCounters((prev) => ({
          ...prev,
          [key]:
            key === "rating"
              ? currentValue.toFixed(1)
              : Math.floor(currentValue),
        }));
      }, stepTime);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Happy Students",
      value: counters.students.toLocaleString() + "+",
      description: "Active learners worldwide",
      delay: 0,
    },
    {
      icon: BookOpen,
      label: "Premium Courses",
      value: counters.courses.toLocaleString() + "+",
      description: "Expert-crafted content",
      delay: 0.1,
    },
    {
      icon: Star,
      label: "Average Rating",
      value: counters.rating,
      description: "Student satisfaction",
      delay: 0.2,
    },
    {
      icon: Award,
      label: "Certificates Issued",
      value: counters.certificates.toLocaleString() + "+",
      description: "Career achievements",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple accent shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#a356f7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#a356f7]/3 rounded-full blur-3xl" />

        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#a356f7]/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#a356f7]/30 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#a356f7]/15 rounded-full" />

        {/* Floating dots animation */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#a356f7]/20 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#a356f7]/10 text-[#a356f7] px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-[#a356f7]/20"
          >
            <TrendingUp className="h-4 w-4" />
            Growing Every Day
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Impact in{" "}
            <span className="text-[#a356f7] relative">
              Numbers
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#a356f7]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join thousands of learners who have transformed their careers with
            our premium courses and expert guidance
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Purple accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a356f7] to-[#a356f7]/60" />

                  {/* Background pattern */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-[#a356f7]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-[#a356f7] rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-[#a356f7] mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a356f7] to-[#a356f7]/80 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white rounded-3xl h-full w-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#a356f7]/5 to-[#a356f7]/10 rounded-3xl p-12 border border-[#a356f7]/20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-[#a356f7] rounded-2xl mb-6 shadow-lg"
            >
              <CheckCircle className="h-8 w-8 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Community?
            </h3>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your learning journey today and become part of our growing
              community of successful learners.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#a356f7] hover:bg-[#a356f7]/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
