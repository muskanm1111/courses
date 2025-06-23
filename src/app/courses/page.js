"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star, Clock, Users, Play } from "lucide-react";
import CourseCard from "@/components/course/CourseCard";

const coursesData = [
  {
    id: 1,
    title: "Complete React Development Course",
    slug: "complete-react-development-course",
    description: "Master React from basics to advanced with hands-on projects",
    instructor: "John Smith",
    rating: 4.8,
    students: 12500,
    duration: "24 hours",
    price: 89,
    originalPrice: 149,
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Web Development",
    level: "Beginner to Advanced",
    featured: true,
  },
  {
    id: 2,
    title: "Python for Data Science",
    slug: "python-for-data-science",
    description:
      "Learn Python programming and data analysis with real projects",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 8900,
    duration: "18 hours",
    price: 79,
    originalPrice: 129,
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Data Science",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    slug: "ui-ux-design-masterclass",
    description:
      "Create beautiful and user-friendly designs with industry tools",
    instructor: "Mike Chen",
    rating: 4.7,
    students: 6700,
    duration: "20 hours",
    price: 99,
    originalPrice: 169,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    slug: "digital-marketing-strategy",
    description: "Build comprehensive marketing campaigns that convert",
    instructor: "Emily Davis",
    rating: 4.6,
    students: 9200,
    duration: "16 hours",
    price: 69,
    originalPrice: 119,
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Marketing",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Machine Learning Fundamentals",
    slug: "machine-learning-fundamentals",
    description:
      "Deep dive into machine learning and AI with practical examples",
    instructor: "Alex Thompson",
    rating: 4.7,
    students: 7800,
    duration: "22 hours",
    price: 99,
    originalPrice: 149,
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "AI & ML",
    level: "Intermediate",
  },
];

const categories = [
  "All",
  "Web Development",
  "Data Science",
  "Design",
  "Marketing",
  "AI & ML",
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterCourses(term, selectedCategory);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterCourses(searchTerm, category);
  };

  const filterCourses = (term, category) => {
    let filtered = coursesData;

    if (term) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(term.toLowerCase()) ||
          course.description.toLowerCase().includes(term.toLowerCase()) ||
          course.instructor.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((course) => course.category === category);
    }

    setFilteredCourses(filtered);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Explore Our <span className="text-gradient">Courses</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover world-class courses taught by industry experts and
                transform your career
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses, instructors, or topics..."
                  className="pl-12 pr-4 py-4 text-lg border-2 border-purple-200 focus:border-purple-400 rounded-full"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "gradient-bg text-white shadow-lg"
                        : "border-purple-200 text-gray-700 hover:border-purple-400"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={{
                  ...course,
                  // Convert price to INR if needed, or keep as is for demo
                  price: course.price,
                  originalPrice: course.originalPrice,
                  students: course.students,
                  trending: course.featured, // Map 'featured' to 'trending' for badge
                }} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
