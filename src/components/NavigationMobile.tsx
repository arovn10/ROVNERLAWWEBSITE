"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const practiceAreas = [
    { name: "Personal Injury", href: "/practice/personal-injury" },
    { name: "Auto Accidents", href: "/practice/auto-accidents" },
    { name: "Motorcycle Accidents", href: "/practice/motorcycle-accidents" },
    { name: "Truck Accidents", href: "/practice/truck-accidents" },
    { name: "Premises Liability", href: "/practice/premises-liability" },
    { name: "Medical Malpractice", href: "/practice/medical-malpractice" },
    { name: "Products Liability", href: "/practice/products-liability" },
    { name: "Workers' Compensation", href: "/practice/workers-compensation" },
    { name: "Family Law", href: "/practice/family-law" },
    { name: "Criminal Defense", href: "/practice/criminal-defense" },
    { name: "Social Security Disability", href: "/practice/social-security-disability" },
    { name: "General Legal Matters", href: "/practice/general-legal-matters" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">Rovner Law</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/attorneys" className="text-gray-700 hover:text-blue-600 transition-colors">
              Attorneys
            </Link>
            
            {/* Practice Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPracticeOpen(!practiceOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Practice Areas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {practiceOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setPracticeOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Locations
            </Link>
            <Link href="/photo-gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
              Photo Gallery
            </Link>
            <Link href="/in-the-news" className="text-gray-700 hover:text-blue-600 transition-colors">
              In The News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Phone and CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:215-259-5958" className="flex items-center text-blue-600 font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              215-259-5958
            </a>
            <Button asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a href="tel:215-259-5958" className="flex items-center text-blue-600 font-semibold text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">215-259-5958</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/attorneys" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Attorneys
              </Link>
              
              {/* Mobile Practice Areas */}
              <div className="px-3 py-3">
                <button
                  onClick={() => setPracticeOpen(!practiceOpen)}
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 w-full text-left"
                >
                  <span>Practice Areas</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${practiceOpen ? 'rotate-180' : ''}`} />
                </button>
                {practiceOpen && (
                  <div className="mt-2 space-y-1">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => {
                          setPracticeOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/locations" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link 
                href="/photo-gallery" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Photo Gallery
              </Link>
              <Link 
                href="/in-the-news" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                In The News
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-3 py-3">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 