"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  Settings,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect backdrop-blur-lg shadow-2xl border-b border-purple-400/30 bg-white/30"
          : "bg-gradient-to-r from-purple-900/80 via-gray-900/60 to-purple-800/80 shadow-lg"
      } rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl border-x border-purple-300/20`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        boxShadow: isScrolled
          ? "0 8px 32px 0 rgba(80, 0, 120, 0.18), 0 1.5px 0 0 #a78bfa44"
          : "0 4px 24px 0 rgba(80, 0, 120, 0.10)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo - Responsive sizing */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <motion.div
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 shadow-xl border-white/30 group-hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9 text-white drop-shadow-lg" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-pink-200 drop-shadow-lg tracking-tight glow-text">
                EduFlow
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-base xl:text-lg font-semibold transition-colors duration-200 group px-2 ${
                  isScrolled
                    ? "text-black hover:text-yellow-500"
                    : "text-gray-100 hover:text-yellow-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-yellow-400" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
            {/* Cart - Responsive sizing */}
            <Link href="/cart">
              <motion.div
                className="relative p-1.5 sm:p-2 rounded-full hover:bg-yellow-100/30 transition-colors duration-200 shadow-md border border-purple-200/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-yellow-400 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                    <span className="text-xs sm:text-sm">
                      {cartItems.length}
                    </span>
                  </span>
                )}
              </motion.div>
            </Link>

            {/* User Menu - Responsive */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-purple-300/40 shadow-md hover:scale-105 transition-transform"
                  >
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {user.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 sm:w-56"
                  align="end"
                  forceMount
                >
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-bold text-sm sm:text-base">
                        {user.name}
                      </p>
                      <p className="w-[150px] sm:w-[200px] truncate text-xs sm:text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="text-sm sm:text-base">
                      <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="text-sm sm:text-base">
                      <Settings className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-50 text-sm sm:text-base"
                  >
                    <LogOut className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="border-white text-purple-500 hover:bg-purple-50 hover:text-black font-semibold px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-sm sm:text-base transition-colors duration-200"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="gradient-bg text-white shadow-xl font-bold px-3 py-1 sm:px-4 sm:py-1.5 lg:px-5 lg:py-2 text-sm sm:text-base rounded-lg lg:rounded-xl hover:scale-105 transition-transform">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button - Show on mobile and tablet */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden border border-purple-200/30 shadow p-1.5 sm:p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced responsive design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect backdrop-blur-2xl rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl shadow-2xl border-t-2 border-purple-400/30 bg-white/40"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-5">
              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 font-bold text-lg sm:text-xl hover:text-yellow-500 transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth Buttons - Show only if user not logged in */}
              {!user && (
                <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full hover:text-yellow-400 font-semibold text-sm sm:text-base py-2 sm:py-3"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full gradient-bg text-white shadow-lg font-bold text-sm sm:text-base py-2 sm:py-3">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile User Menu - Show if user is logged in */}
              {user && (
                <div className="pt-3 sm:pt-4 border-t border-purple-200/30">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-4 px-2">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {user.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate max-w-[200px]">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 px-2 py-2 text-gray-900 hover:text-yellow-500 transition-colors"
                    >
                      <User className="h-4 w-4" />
                      <span className="text-sm sm:text-base font-medium">
                        Dashboard
                      </span>
                    </Link>
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-2 px-2 py-2 text-gray-900 hover:text-yellow-500 transition-colors"
                    >
                      <Settings className="h-4 w-4" />
                      <span className="text-sm sm:text-base font-medium">
                        Profile
                      </span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 px-2 py-2 text-red-500 hover:text-red-600 transition-colors w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm sm:text-base font-medium">
                        Log out
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
