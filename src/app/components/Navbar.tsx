"use client";
import { Goal, Menu, PhoneCall, User, X, MoonStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: "About", href: "#about", icon: <User size={18} /> },
    { title: "Mission", href: "#mission", icon: <Goal size={18} /> },
    { title: "Contact", href: "#contact", icon: <PhoneCall size={18} /> },
    {
      title: "Sallah Conevntion",
      href: "/sallah-convention",
      icon: <MoonStar size={18} />,
    },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking navigation items
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-20 transition-all duration-300 ${
          scrolled ? "bg-[#573f23] shadow-md py-2" : "bg-[#573f23]/95 py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto flex flex-row justify-between items-center px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 transition hover:opacity-80"
            aria-label="BAFOSA Home"
          >
            <Image
              src="/white-logo.png"
              alt="BAFOSA Logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold text-[#f0ede5]">BAFOSA</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-[#f0ede5] bg-[#6a4d2a]/90 hover:bg-[#6a4d2a] transition-colors"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-[#f0ede5]">
            {navLinks.map((link, index) =>
              link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  key={index}
                  className="flex items-center gap-2 py-2 transition-colors hover:text-[#e6dfd3] relative group"
                >
                  {link.icon}
                  <span>{link.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e6dfd3] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  href="#about"
                  key={index}
                  className="flex items-center gap-2 py-2 transition-colors hover:text-[#e6dfd3] relative group"
                >
                  {link.icon}
                  <span>{link.title}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e6dfd3] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#f0ede5] text-[#573f23] z-30 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out pt-20 shadow-lg`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#e6dfd3]"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col px-4 py-2 space-y-4">
          {navLinks.map((link, index) =>
            link.href.startsWith("#") ? (
              <a
                href={link.href}
                key={index}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-[#e6dfd3] transition-colors"
                onClick={handleNavClick}
              >
                {link.icon}
                <span className="font-medium">{link.title}</span>
              </a>
            ) : (
              <Link
                href={link.href}
                key={index}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-[#e6dfd3] transition-colors"
                onClick={handleNavClick}
              >
                {link.icon}
                <span className="font-medium">{link.title}</span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
