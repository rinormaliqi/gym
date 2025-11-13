"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTogglerContext } from "../context/toggler";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const { setMobileNavbar, setAboutSidebar } = useTogglerContext();
  const { t, language, setLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onPageScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.backgroundColor =
          window.pageYOffset > 20 ? "black" : "transparent";
        headerRef.current.style.backdropFilter =
          window.pageYOffset > 20 ? "blur(10px)" : "none";
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/services", key: "services" },
    { href: "/programs", key: "programs" },
    { href: "/pricing", key: "pricing" },
    { href: "/contact", key: "contact" },
  ];

  const languageNames = {
    al: "Shqip",
    en: "English", 
    de: "Deutsch"
  };

  return (
    <section id="header">
      <header
        className="fixed inset-x-0 top-0 duration-300 ease-linear text-white flex justify-between items-center py-6 px-8 z-50"
        ref={headerRef}
      >
        {/* Logo */}
<div>
  <Link href="/" className="block group">
    <div className="flex flex-col leading-tight transition-transform duration-300 group-hover:scale-105">
      <span className="text-white text-2xl font-bold tracking-wide">
        Blerdon Sopaj
      </span>
      <span className="text-red-500 text-sm font-semibold">
        Personal Trainer
      </span>
    </div>
  </Link>
</div>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`hover:text-[#ff0336] font-medium text-sm uppercase tracking-wide ${
                pathname === item.href ? "text-[#ff0336]" : ""
              } duration-300 ease-linear`}
            >
              {t(`header.${item.key}`)}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Compact Language Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md border border-white/20 hover:bg-white/10 transition-all duration-200 text-sm font-medium"
            >
              <span className="w-6 text-center">
                {language.toUpperCase()}
              </span>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
                isLanguageOpen ? "rotate-180" : ""
              }`}></i>
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-black/95 backdrop-blur-md rounded-md border border-white/20 shadow-lg py-1 z-50">
                <button
                  onClick={() => {
                    setLanguage('al');
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#FF0336] transition-colors duration-200 ${
                    language === 'al' ? 'text-[#FF0336] hover:text-white' : 'text-white'
                  }`}
                >
                  <span className="font-medium">AL</span>
                  <span className="text-xs ml-2 text-gray-300">Shqip</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#FF0336] transition-colors duration-200 ${
                    language === 'en' ? 'text-[#FF0336] hover:text-white' : 'text-white'
                  }`}
                >
                  <span className="font-medium">EN</span>
                  <span className="text-xs ml-2 text-gray-300">English</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('de');
                    setIsLanguageOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 hover:bg-[#FF0336] transition-colors duration-200 ${
                    language === 'de' ? 'text-[#FF0336] hover:text-white' : 'text-white'
                  }`}
                >
                  <span className="font-medium">DE</span>
                  <span className="text-xs ml-2 text-gray-300">Deutsch</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavbar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200 lg:hidden"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* User Account */}
          <Link
            href="/login"
            className="text-2xl hover:text-[#FF0336] ease-in duration-200 hidden lg:block"
            aria-label={t('header.login')}
          >
            <i className="fa-regular fa-user"></i>
          </Link>

          {/* Stats/Progress */}
          <button
            onClick={() => setAboutSidebar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200 hidden lg:block"
            aria-label="View stats"
          >
            <i className="fa-regular fa-chart-bar"></i>
          </button>

          {/* CTA Button */}
        </div>
      </header>
    </section>
  );
}

export default Header;