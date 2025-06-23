'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  LogOut, 
  Settings,
  BookOpen,
  GraduationCap
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { cartItems } = useCart()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect backdrop-blur-lg shadow-2xl border-b border-purple-400/30 bg-white/30'
          : 'bg-gradient-to-r from-purple-900/80 via-gray-900/60 to-purple-800/80 shadow-lg'
      } rounded-b-3xl border-x border-purple-300/20`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        boxShadow: isScrolled
          ? '0 8px 32px 0 rgba(80, 0, 120, 0.18), 0 1.5px 0 0 #a78bfa44'
          : '0 4px 24px 0 rgba(80, 0, 120, 0.10)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="flex items-center space-x-2 px-4 py-2  shadow-xl  border-white/30 group-hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
            >
              <GraduationCap className="h-9 w-9 text-white drop-shadow-lg" />
              <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-pink-200 drop-shadow-lg tracking-tight glow-text">EduFlow</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg font-semibold transition-colors duration-200 group px-2 ${isScrolled ? 'text-black hover:text-yellow-500' : 'text-gray-100 hover:text-yellow-400'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-yellow-400' : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-5">
            {/* Cart */}
            <Link href="/cart">
              <motion.div
                className="relative p-2 rounded-full hover:bg-yellow-100/30 transition-colors duration-200 shadow-md border border-purple-200/30"
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="h-6 w-6 text-yellow-400" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-yellow-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-purple-300/40 shadow-md hover:scale-105 transition-transform">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-bold">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <Settings className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="outline" className="border-white text-purple-500 hover:bg-purple-50 hover:text-black font-semibold px-4 py-2 transition-colors duration-200">Login</Button>
                </Link>
                <Link href="/register">
                  <Button className="gradient-bg text-white shadow-xl font-bold px-5 py-2 rounded-xl hover:scale-105 transition-transform">Sign Up</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden border border-purple-200/30 shadow"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect backdrop-blur-2xl rounded-b-3xl shadow-2xl border-t-2 border-purple-400/30 bg-white/40"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 font-bold text-xl hover:text-yellow-500 transition-colors duration-200 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!user && (
                <div className="pt-4 space-y-3">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full hover:text-yellow-400 font-semibold">Login</Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full gradient-bg text-white shadow-lg font-bold">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}