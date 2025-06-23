"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, ShoppingCart, ArrowRight, Tag } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "John Smith",
      price: 89,
      originalPrice: 149,
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.8,
      duration: "24 hours",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Sarah Johnson",
      price: 79,
      originalPrice: 129,
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.9,
      duration: "18 hours",
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice,
    0
  );
  const savings = originalTotal - subtotal;

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Shopping <span className="text-gradient">Cart</span>
              </h1>

              {cartItems.length === 0 ? (
                <div className="text-center py-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Your cart is empty
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Start learning today by adding courses to your cart
                    </p>
                    <Link href="/courses">
                      <Button className="gradient-bg text-white px-8 py-3">
                        Browse Courses
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="text-lg font-medium text-gray-900 mb-4">
                      {cartItems.length}{" "}
                      {cartItems.length === 1 ? "Course" : "Courses"} in Cart
                    </div>

                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                                />
                              </div>

                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                    {item.title}
                                  </h3>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>

                                <p className="text-gray-600 mb-2">
                                  by {item.instructor}
                                </p>

                                <div className="flex items-center space-x-4 mb-4">
                                  <div className="flex items-center space-x-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm font-medium">
                                      {item.rating}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">
                                    {item.duration}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-2xl font-bold text-purple-600">
                                      ${item.price}
                                    </span>
                                    <span className="text-lg text-gray-400 line-through">
                                      ${item.originalPrice}
                                    </span>
                                    <Badge className="bg-green-100 text-green-800">
                                      {Math.round(
                                        ((item.originalPrice - item.price) /
                                          item.originalPrice) *
                                          100
                                      )}
                                      % OFF
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="sticky top-24"
                    >
                      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            Order Summary
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              Original Price:
                            </span>
                            <span className="text-gray-900 font-medium">
                              ${originalTotal}
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-green-600">
                            <span>Discount:</span>
                            <span className="font-medium">-${savings}</span>
                          </div>

                          <hr className="border-gray-200" />

                          <div className="flex justify-between items-center text-xl font-bold">
                            <span className="text-gray-900">Total:</span>
                            <span className="text-purple-600">${subtotal}</span>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Tag className="h-5 w-5 text-green-600" />
                              <span className="text-green-800 font-medium">
                                You save ${savings}!
                              </span>
                            </div>
                          </div>

                          <Button className="w-full gradient-bg text-white py-3 text-lg">
                            Checkout
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>

                          <div className="text-center text-sm text-gray-500">
                            30-Day Money-Back Guarantee
                          </div>

                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <span>✓</span>
                              <span>Lifetime access</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>✓</span>
                              <span>Mobile and TV access</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>✓</span>
                              <span>Certificate of completion</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
