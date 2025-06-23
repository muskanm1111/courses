"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Star,
  Clock,
  Users,
  Play,
  CheckCircle,
  BookOpen,
  Award,
  Download,
  Heart,
  Share2,
  Globe,
  Calendar,
} from "lucide-react";

const courseData = {
  "complete-react-development-course": {
    id: 1,
    title: "Complete React Development Course",
    description:
      "Master React from basics to advanced with hands-on projects and real-world applications",
    longDescription:
      "This comprehensive React course will take you from a complete beginner to an advanced React developer. You'll learn modern React concepts including hooks, context, state management, and build real-world projects that you can add to your portfolio.",
    instructor: {
      name: "John Smith",
      bio: "Senior Frontend Developer with 8+ years of experience at top tech companies",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      students: 50000,
      courses: 12,
    },
    rating: 4.8,
    students: 12500,
    duration: "24 hours",
    price: 89,
    originalPrice: 149,
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Development",
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01-15",
    certificate: true,
    downloadable: true,
    lifetime: true,
    lessons: 156,
    projects: 8,
    requirements: [
      "Basic knowledge of HTML and CSS",
      "JavaScript fundamentals",
      "A computer with internet connection",
      "Code editor (VS Code recommended)",
    ],
    whatYouLearn: [
      "Build modern React applications from scratch",
      "Master React Hooks and functional components",
      "State management with Context API and Redux",
      "React Router for navigation",
      "API integration and data fetching",
      "Testing React applications",
      "Deploy React apps to production",
      "Performance optimization techniques",
    ],
    curriculum: [
      {
        title: "Getting Started with React",
        lessons: 12,
        duration: "2.5 hours",
        topics: [
          "What is React?",
          "Setting up development environment",
          "Your first React app",
          "JSX fundamentals",
        ],
      },
      {
        title: "Components and Props",
        lessons: 18,
        duration: "3.2 hours",
        topics: [
          "Functional vs Class components",
          "Props and PropTypes",
          "Component composition",
          "Conditional rendering",
        ],
      },
      {
        title: "State and Event Handling",
        lessons: 22,
        duration: "4.1 hours",
        topics: [
          "useState Hook",
          "Event handling",
          "Forms in React",
          "Controlled components",
        ],
      },
      {
        title: "Advanced React Concepts",
        lessons: 28,
        duration: "5.8 hours",
        topics: [
          "useEffect Hook",
          "Custom Hooks",
          "Context API",
          "useReducer Hook",
        ],
      },
    ],
  },
};

export default function CoursePage({ params }) {
  const [activeTab, setActiveTab] = useState("overview");
  const course = courseData[params.slug];

  if (!course) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Course Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The course you're looking for doesn't exist.
            </p>
            <Link href="/courses">
              <Button className="gradient-bg text-white">
                Browse All Courses
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Course Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-purple-600 border-purple-200"
                    >
                      {course.category}
                    </Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {course.title}
                  </h1>

                  <p className="text-xl text-gray-600 mb-6">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-gray-500">
                        ({course.students.toLocaleString()} students)
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-5 w-5 text-gray-500" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-5 w-5 text-gray-500" />
                      <span>{course.language}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-4 mb-8">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        Created by {course.instructor.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.instructor.bio}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Course Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="sticky top-24"
                >
                  <Card className="overflow-hidden shadow-2xl border-0">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white/90 text-gray-900 hover:bg-white"
                        >
                          <Play className="mr-2 h-5 w-5" />
                          Preview Course
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <span className="text-3xl font-bold text-purple-600">
                            ${course.price}
                          </span>
                          <span className="text-lg text-gray-400 line-through ml-2">
                            ${course.originalPrice}
                          </span>
                        </div>
                        <Badge className="gradient-bg text-white">
                          {Math.round(
                            ((course.originalPrice - course.price) /
                              course.originalPrice) *
                              100
                          )}
                          % OFF
                        </Badge>
                      </div>

                      <Button className="w-full gradient-bg text-white mb-4 py-3 text-lg">
                        Enroll Now
                      </Button>

                      <div className="text-center text-sm text-gray-500 mb-6">
                        30-Day Money-Back Guarantee
                      </div>

                      {/* Course Features */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Lifetime access</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-green-500" />
                          <span className="text-sm">
                            Certificate of completion
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5 text-green-500" />
                          <span className="text-sm">
                            Downloadable resources
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-green-500" />
                          <span className="text-sm">
                            Access on mobile and TV
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2 mt-6">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Heart className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Tabs */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-8">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "curriculum", label: "Curriculum" },
                  { id: "instructor", label: "Instructor" },
                  { id: "reviews", label: "Reviews" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {activeTab === "overview" && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          About this course
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {course.longDescription}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          What you'll learn
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.whatYouLearn.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Requirements
                        </h3>
                        <ul className="space-y-2">
                          {course.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Course Curriculum
                      </h3>
                      {course.curriculum.map((section, index) => (
                        <Card key={index} className="border border-gray-200">
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              <span>{section.title}</span>
                              <span className="text-sm text-gray-500">
                                {section.lessons} lessons • {section.duration}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {section.topics.map((topic, topicIndex) => (
                                <li
                                  key={topicIndex}
                                  className="flex items-center space-x-3"
                                >
                                  <Play className="h-4 w-4 text-purple-600" />
                                  <span className="text-gray-700">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Course includes:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">
                          {course.duration} on-demand video
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">
                          {course.projects} coding exercises
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">
                          Certificate of completion
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <span className="text-sm">
                          Last updated {course.lastUpdated}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
