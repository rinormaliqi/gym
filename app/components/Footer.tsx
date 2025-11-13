"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/services", key: "services" },
    { href: "/programs", key: "programs" },
    { href: "/pricing", key: "pricing" },
  ];

  const services = [
    { href: "/services#weight-loss", key: "weightLoss" },
    { href: "/services#muscle-building", key: "muscleBuilding" },
    { href: "/services#body-toning", key: "bodyToning" },
    { href: "/services#online-coaching", key: "onlineCoaching" },
  ];

  return (
    <section id="footer">
      <footer className="bg-black text-white px-8 py-16 lg:py-24 text-center flex flex-col lg:flex-row lg:text-left gap-16 lg:justify-between lg:px-32">
        {/* Left Section - Brand & Social */}
        <div className="space-y-6 lg:w-96">
          <div className="space-y-4">
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
            <p className="text-gray-300 text-[0.9rem] leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <Link
              href="https://www.facebook.com"
              className="bg-gray-800 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.instagram.com"
              className="bg-gray-800 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              href="https://www.youtube.com"
              className="bg-gray-800 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link
              href="https://www.tiktok.com"
              className="bg-gray-800 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
            >
              <i className="fa-brands fa-tiktok"></i>
            </Link>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4 pt-4">
            <h3 className="font-bold text-lg">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 text-sm">{t('footer.newsletter.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff0336]"
              />
              <button className="bg-[#ff0336] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Right Sections - Links & Contact */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Quick Links */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">{t('footer.quickLinks')}</h1>
              <span className="top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none absolute w-16 h-1 bg-[#ff0336]"></span>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              {quickLinks.map((link) => (
                <Link 
                  key={link.key}
                  href={link.href} 
                  className="text-gray-300 hover:text-[#ff0336] hover:font-semibold duration-300 ease-linear"
                >
                  {t(`header.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">{t('footer.services')}</h1>
              <span className="top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none absolute w-16 h-1 bg-[#ff0336]"></span>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              {services.map((service) => (
                <Link 
                  key={service.key}
                  href={service.href} 
                  className="text-gray-300 hover:text-[#ff0336] hover:font-semibold duration-300 ease-linear"
                >
                  {t(`features.programs.${service.key}.title`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">{t('footer.contact')}</h1>
              <span className="top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none absolute w-16 h-1 bg-[#ff0336]"></span>
            </div>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                <p className="text-sm">{t('footer.address')}</p>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <i className="fa-solid fa-phone text-[#ff0336]"></i>
                <p className="text-sm">{t('footer.phone')}</p>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                <p className="text-sm">{t('footer.email')}</p>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <i className="fa-solid fa-clock text-[#ff0336]"></i>
                <p className="text-sm">24/7 Online Support</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-red-600 py-6 px-8 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
          <div className="text-center lg:text-left">
            <p>
              © {new Date().getFullYear()} Blerdon Sopaj. {t('footer.rights')}
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#ff0336] duration-300">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-[#ff0336] duration-300">
              {t('footer.terms')}
            </Link>
            <Link href="/cookies" className="hover:text-[#ff0336] duration-300">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;