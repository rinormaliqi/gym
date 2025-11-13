"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();

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
    <section id="mobile-navbar">
      <nav
        className={`fixed inset-y-0 right-0 bg-white ${
          mobileNavbar ? "left-0" : "left-[150%]"
        } z-50 duration-300 ease-linear p-8 flex items-center justify-center flex-col`}
      >
        {/* Close Button */}
        <button
          className="text-3xl absolute top-10 right-10 hover:text-[#ff0336] duration-300 ease-linear"
          onClick={() => setMobileNavbar(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Language Switcher - Mobile */}
        <div className="absolute top-10 left-10">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLanguage('al')}
              className={`px-3 py-1 rounded text-sm font-medium ${
                language === 'al' ? 'bg-[#FF0336] text-white' : 'text-gray-700'
              }`}
            >
              AL
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium ${
                language === 'en' ? 'bg-[#FF0336] text-white' : 'text-gray-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('de')}
              className={`px-3 py-1 rounded text-sm font-medium ${
                language === 'de' ? 'bg-[#FF0336] text-white' : 'text-gray-700'
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center gap-8 font-semibold text-xl">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={() => setMobileNavbar(false)}
                className={`hover:text-[#ff0336] ${
                  pathname === item.href ? "text-[#ff0336]" : "text-gray-800"
                } duration-300 ease-linear`}
              >
                {t(`header.${item.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col gap-4 mt-12">
          <Link
            href="/login"
            onClick={() => setMobileNavbar(false)}
            className="bg-[#FF0336] text-white px-8 py-3 rounded-md font-semibold text-center hover:bg-red-700 transition-colors duration-300"
          >
            {t('header.login')}
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="font-semibold mb-2">{t('footer.phone')}</p>
          <p className="text-sm">+355 69 123 4567</p>
          <p className="font-semibold mt-4 mb-2">{t('footer.email')}</p>
          <p className="text-sm">info@blerdonsopaj.com</p>
        </div>

        {/* Social Media */}
        <div className="flex gap-6 mt-8 text-2xl text-gray-700">
          <a href="#" className="hover:text-[#FF0336] transition-colors duration-300">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-[#FF0336] transition-colors duration-300">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-[#FF0336] transition-colors duration-300">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-[#FF0336] transition-colors duration-300">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </nav>
    </section>
  );
}

export default MobileNavbar;