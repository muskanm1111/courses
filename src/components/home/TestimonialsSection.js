"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockTestimonials } from "@/data/mockData";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length
    );
    setIsAutoPlay(false);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Hear from thousands of learners who have transformed their careers
            with our courses
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile, positioned better on larger screens */}
          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 lg:-translate-x-12 z-10 rounded-full hover:bg-white hover:shadow-lg transition-all duration-200"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 lg:translate-x-12 z-10 rounded-full hover:bg-white hover:shadow-lg transition-all duration-200"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-between items-center mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="flex items-center gap-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Previous</span>
            </Button>

            <span className="text-sm text-gray-500 font-medium">
              {currentIndex + 1} of {mockTestimonials.length}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="flex items-center gap-2 rounded-full"
              aria-label="Next testimonial"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Cards */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-lg sm:shadow-xl mx-2 sm:mx-0">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="text-center">
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                    {[...Array(mockTestimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed italic px-2 sm:px-4">
                    &ldquo;{mockTestimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={mockTestimonials[currentIndex].avatar}
                        alt={mockTestimonials[currentIndex].name}
                        width={60}
                        height={60}
                        className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {mockTestimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm">
                        {mockTestimonials[currentIndex].role}
                      </div>
                      <div className="text-xs sm:text-sm text-purple-600 font-medium">
                        {mockTestimonials[currentIndex].course}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8 px-4">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                  index === currentIndex
                    ? "bg-purple-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Touch-friendly swipe indicators on mobile */}
          <div className="block sm:hidden text-center mt-4">
            <p className="text-xs text-gray-500">
              Swipe left or right, or use the buttons above
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
