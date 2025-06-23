"use client";

import CourseCard from "./course-card";
import { motion } from "framer-motion";

export default function CourseGrid() {
  // Sample course data with Indian context
  const courses = [
    {
      id: 1,
      title: "Complete React.js Development Course",
      instructor: "Arjun Sharma",
      category: "Web Development",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.8,
      duration: "15h 30m",
      students: "3.2k",
      price: 1299,
      originalPrice: 2999,
      level: "Intermediate",
      trending: true,
      description:
        "Master React.js with hands-on projects and real-world applications. Build modern web applications from scratch.",
      slug: "react-development-course",
    },
    {
      id: 2,
      title: "Python for Data Science & AI",
      instructor: "Priya Patel",
      category: "Data Science",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.9,
      duration: "20h 45m",
      students: "5.1k",
      price: 1599,
      originalPrice: 3499,
      level: "Beginner",
      description:
        "Learn Python programming for data analysis, machine learning, and artificial intelligence applications.",
      slug: "python-data-science-course",
    },
    {
      id: 3,
      title: "Full Stack JavaScript Development",
      instructor: "Rahul Kumar",
      category: "Full Stack",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.7,
      duration: "25h 15m",
      students: "2.8k",
      price: 1799,
      originalPrice: 4299,
      level: "Advanced",
      trending: true,
      progress: 65,
      description:
        "Complete full-stack development course covering Node.js, Express, MongoDB, and modern frontend frameworks.",
      slug: "fullstack-javascript-course",
    },
    {
      id: 4,
      title: "Mobile App Development with Flutter",
      instructor: "Sneha Gupta",
      category: "Mobile Development",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.6,
      duration: "18h 20m",
      students: "1.9k",
      price: 1499,
      originalPrice: 3299,
      level: "Intermediate",
      description:
        "Build beautiful cross-platform mobile apps using Flutter and Dart programming language.",
      slug: "flutter-mobile-development",
    },
    {
      id: 5,
      title: "Digital Marketing Mastery",
      instructor: "Amit Singh",
      category: "Marketing",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.5,
      duration: "12h 30m",
      students: "4.3k",
      price: 999,
      originalPrice: 2499,
      level: "Beginner",
      description:
        "Complete digital marketing course covering SEO, social media marketing, Google Ads, and content marketing.",
      slug: "digital-marketing-course",
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      instructor: "Kavya Reddy",
      category: "Design",
      image: "/placeholder.svg?height=240&width=400",
      rating: 4.8,
      duration: "16h 45m",
      students: "2.1k",
      price: 1399,
      originalPrice: 2999,
      level: "Beginner",
      progress: 30,
      description:
        "Learn user interface and user experience design principles with hands-on projects using Figma and Adobe XD.",
      slug: "ui-ux-design-course",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#a356f7] to-[#a356f7]/80 bg-clip-text text-transparent mb-4">
            Premium Courses
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Unlock your potential with our expertly crafted courses designed for
            Indian learners
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#a356f7]">50,000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#a356f7]">100+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#a356f7]">4.8★</div>
              <div className="text-gray-600">Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#a356f7] to-[#a356f7]/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Load More Courses
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
