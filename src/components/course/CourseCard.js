"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Star,
  Clock,
  Users,
  ShoppingCart,
  Play,
  BookOpen,
  Award,
  TrendingUp,
  Heart,
  Download,
} from "lucide-react";
import { useState } from "react";

export default function CourseCard({ course }) {
  const [isInCart, setIsInCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!isInCart) {
      setIsInCart(true);
      // Add your cart logic here
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group w-full max-w-sm mx-auto"
    >
      <Link href={`/course/${course?.slug || "#"}`}>
        <Card className="relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl h-full">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#a356f7] via-[#a356f7]/80 to-[#a356f7] rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white rounded-3xl h-full w-full" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Course Image Section */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <motion.div variants={imageVariants} whileHover="hover">
                <Image
                  src={course?.image || "/placeholder.svg?height=240&width=400"}
                  alt={course?.title || "Course"}
                  width={400}
                  height={240}
                  className="w-full h-48 sm:h-52 object-cover"
                />
              </motion.div>

              {/* Play Button Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#a356f7]/30 via-transparent to-[#a356f7]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover="hover"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl"
                >
                  <Play className="h-8 w-8 text-[#a356f7] fill-[#a356f7]" />
                </motion.div>
              </motion.div>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <Badge className="bg-gradient-to-r from-[#a356f7] to-[#a356f7]/80 text-white border-0 shadow-lg backdrop-blur-sm rounded-full px-3 py-1">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {course?.category || "Programming"}
                </Badge>

                <div className="flex gap-2">
                  {course?.trending && (
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                      className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
                    >
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                      HOT
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWishlist}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isWishlisted
                          ? "text-red-500 fill-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </motion.button>
                </div>
              </div>

              {/* Level Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg border border-gray-100">
                  <Award className="h-3 w-3 inline mr-1 text-[#a356f7]" />
                  {course?.level || "Beginner"}
                </div>
              </div>
            </div>

            <CardContent className="p-6 pb-4 space-y-4 flex-grow">
              {/* Course Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#a356f7] transition-colors duration-300 leading-tight">
                {course?.title || "Complete Web Development Course"}
              </h3>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#a356f7] to-[#a356f7]/80 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {course?.instructor?.charAt(0) || "A"}
                </div>
                <p className="text-gray-600 font-medium text-sm">
                  {course?.instructor || "Arjun Sharma"}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-2 border border-yellow-100">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-yellow-700">
                    {course?.rating || "4.8"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-2 border border-blue-100">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-blue-700 text-xs">
                    {course?.duration || "12h"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-2 border border-green-100">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-700 text-xs">
                    {course?.students || "2.5k"}
                  </span>
                </div>
              </div>

              {/* Course Description */}
              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                {course?.description ||
                  "Master modern web development with hands-on projects and real-world applications. Perfect for beginners and intermediate developers."}
              </p>

              {/* Progress Bar (if enrolled) */}
              {course?.progress && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="font-medium">Progress</span>
                    <span className="font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#a356f7] to-[#a356f7]/80 h-2 rounded-full shadow-sm"
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Course Features */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 py-1 text-xs text-gray-600">
                  <Download className="h-3 w-3" />
                  <span>Downloadable</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 py-1 text-xs text-gray-600">
                  <Award className="h-3 w-3" />
                  <span>Certificate</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-2 mt-auto">
              <div className="flex items-center justify-between w-full">
                {/* Indian Pricing */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#a356f7]">
                      ₹{course?.price || "999"}
                    </span>
                    {course?.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course?.originalPrice && (
                    <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full inline-block">
                      Save ₹{course.originalPrice - (course?.price || 999)}
                    </div>
                  )}
                  <div className="text-xs text-gray-500">
                    EMI from ₹{Math.ceil((course?.price || 999) / 6)}/month
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className={`${
                      isInCart
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        : "bg-gradient-to-r from-[#a356f7] to-[#a356f7]/90 hover:from-[#a356f7]/90 hover:to-[#a356f7]"
                    } text-white border-0 shadow-lg transition-all duration-300 px-4 py-2 rounded-xl font-semibold text-sm`}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                  >
                    {isInCart ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          ✓
                        </motion.div>
                        <span className="hidden sm:inline">In Cart</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </div>
            </CardFooter>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#a356f7] rounded-full opacity-30"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
              />
            ))}
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a356f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Card>
      </Link>
    </motion.div>
  );
}
