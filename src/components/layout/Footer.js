'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Courses',
      links: [
        { name: 'Programming', href: '/courses?category=Programming' },
        { name: 'Design', href: '/courses?category=Design' },
        { name: 'Business', href: '/courses?category=Business' },
        { name: 'Marketing', href: '/courses?category=Marketing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Refund Policy', href: '/refund' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gradient-to-tr from-purple-900 via-gray-900 to-purple-700 text-white shadow-2xl rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <GraduationCap className="h-10 w-10 text-purple-400 drop-shadow-lg animate-bounce" />
              <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EduFlow</span>
            </Link>
            <p className="text-gray-200 mb-6 max-w-md text-lg font-light italic">
              Empowering learners worldwide with high-quality online education. <br />
              <span className="text-purple-300 font-semibold">Master new skills and advance your career with our expert-led courses.</span>
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-200">support@eduflow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-200">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4 text-purple-300 tracking-wide uppercase">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-center md:text-left text-sm">
              © 2025 DesireDiv. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 backdrop-blur-xl border border-white/30  shadow-[0_8px_32px_rgba(31,38,135,0.37)]   rounded-full flex items-center justify-center hover:scale-110 hover:from-purple-500 hover:to-purple-700 transition-all duration-200   border-gray-800 hover:border-purple-400"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}