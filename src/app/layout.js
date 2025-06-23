// import { Inter } from 'next/font/google'
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { CourseProvider } from "@/contexts/CourseContext";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "EduFlow - Premium Learning Platform",
  description: "Master new skills with our comprehensive online courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <CourseProvider>
              <Navigation />
              {children}
              <Toaster />
              <Footer />
            </CourseProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
