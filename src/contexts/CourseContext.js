'use client'

import { createContext, useContext, useState } from 'react'
import { mockCourses } from '@/data/mockData'

const CourseContext = createContext()

export const useCourses = () => {
  const context = useContext(CourseContext)
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider')
  }
  return context
}

export const CourseProvider = ({ children }) => {
  const [courses] = useState(mockCourses)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = [
    'all',
    'Programming',
    'Design',
    'Business',
    'Marketing',
    'Photography',
    'Music'
  ]

  const getFilteredCourses = () => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
      
      const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })
  }

  const getCourseBySlug = (slug) => {
    return courses.find(course => course.slug === slug)
  }

  const getFeaturedCourses = () => {
    return courses.filter(course => course.featured)
  }

  const getCoursesByCategory = (category) => {
    return courses.filter(course => course.category === category)
  }

  const value = {
    courses,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    categories,
    getFilteredCourses,
    getCourseBySlug,
    getFeaturedCourses,
    getCoursesByCategory
  }

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}