"use client";
import { useState, useEffect } from "react"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTranslations } from 'next-intl';
import Link from "next/link"
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navbar')

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  const home = t("home")
  const plans = t("plans")
  const terms = t("terms")
  const about_us = t("about_us")
  const contact_us = t("contact_us")

  const menuItems = [
    { href: "#", label: home },
    { href: "#", label: plans },
    { href: "#", label: terms },
    { href: "#", label: about_us },
    { href: "#", label: contact_us },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-primary" : "text-text"}`}>
          Orbital Colombia
        </Link>
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={`hover:text-primary ${isScrolled ? "text-text" : "text-text"}`}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`md:hidden ${isScrolled ? "text-gray-700 border-primary" : "text-gray-700 border-white"}`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <h2 className="sr-only">Menú de navegación</h2>
            <nav className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-lg font-medium text-text hover:text-primary">
                  {item.label}
                </Link>
              ))} 
              <li>
                <LanguageSwitcher />
              </li>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

