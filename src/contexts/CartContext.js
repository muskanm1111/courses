'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (course) => {
    const existingItem = cartItems.find(item => item.id === course.id)
    if (!existingItem) {
      setCartItems([...cartItems, { ...course, quantity: 1 }])
    }
  }

  const removeFromCart = (courseId) => {
    setCartItems(cartItems.filter(item => item.id !== courseId))
  }

  const clearCart = () => {
    setCartItems([])
    setCouponCode('')
    setDiscount(0)
  }

  const applyCoupon = (code) => {
    const coupons = {
      'SAVE20': 0.20,
      'WELCOME10': 0.10,
      'STUDENT15': 0.15
    }
    
    if (coupons[code]) {
      setCouponCode(code)
      setDiscount(coupons[code])
      return { success: true, discount: coupons[code] * 100 }
    }
    
    return { success: false, message: 'Invalid coupon code' }
  }

  const removeCoupon = () => {
    setCouponCode('')
    setDiscount(0)
  }

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const getDiscount = () => {
    return getSubtotal() * discount
  }

  const getTotal = () => {
    return getSubtotal() - getDiscount()
  }

  const value = {
    cartItems,
    couponCode,
    discount,
    addToCart,
    removeFromCart,
    clearCart,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscount,
    getTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}