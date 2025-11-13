"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

function AboutSidebar() {
  const { aboutSidebar, setAboutSidebar } = useTogglerContext();
  const { t } = useLanguage();

  return (
    <section id="about-sidebar">
      <div
        className={`fixed inset-y-0 right-0 bg-black/80 ${
          aboutSidebar ? "left-0" : "left-[150%]"
        } z-[1000] duration-300 ease-linear`}
      >
        <div
          className="hidden lg:block absolute inset-y-0 left-0 right-[30%]"
          onClick={() => setAboutSidebar(false)}
        ></div>
        <div className="absolute inset-0 lg:left-[70%] bg-white z-[1001] p-8 overflow-y-auto space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">

            <button 
              onClick={() => setAboutSidebar(false)}
              className="hover:text-[#ff0336] duration-300 ease-linear text-3xl"
              aria-label="Close sidebar"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* About Me Section */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">{t('about.title')}</h1>
            <p className="text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-[#ff0336]">8+</p>
                <p className="text-sm text-gray-600">{t('about.experience')}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-[#ff0336]">500+</p>
                <p className="text-sm text-gray-600">{t('about.clients')}</p>
              </div>
            </div>
          </div>

          {/* Success Gallery */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">{t('Galeri')}</h1>
         
            <div className="grid grid-cols-3 gap-3">
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-1.jpg"
                  alt="Client transformation"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-2.jpg"
                  alt="Training session"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-3.jpg"
                  alt="Meal prep"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-4.jpg"
                  alt="Workout plan"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-5.jpg"
                  alt="Progress tracking"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
              <div className="relative group">
                <Image
                  src="/images/about-sidebar/gallery/img-6.jpg"
                  alt="Online coaching"
                  width={100}
                  height={100}
                  className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-plus text-white text-sm"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">{t('footer.contact')}</h1>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#ff0336] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-white text-sm"></i>
                </span>
                <div>
                  <p className="text-gray-600 text-sm">{t('footer.address')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#ff0336] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-phone text-white text-sm"></i>
                </span>
                <div>
                  <p className="text-gray-600 text-sm">+355 69 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#ff0336] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-white text-sm"></i>
                </span>
                <div>
                  <p className="text-gray-600 text-sm">info@blerdonsopaj.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#ff0336] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-clock text-white text-sm"></i>
                </span>
                <div>
                  <p className="text-gray-600 text-sm">24/7 Online Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/pricing"
              onClick={() => setAboutSidebar(false)}
              className="w-full bg-[#ff0336] text-white py-3 rounded-lg font-semibold text-center block hover:bg-red-700 transition-colors duration-300"
            >
              {t('pricing.plans.premium.cta')}
            </Link>
            <Link
              href="/contact"
              onClick={() => setAboutSidebar(false)}
              className="w-full border-2 border-[#ff0336] text-[#ff0336] py-3 rounded-lg font-semibold text-center block hover:bg-[#ff0336] hover:text-white transition-all duration-300"
            >
              {t('header.contact')}
            </Link>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">{t('footer.social')}</h1>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/blerdonsopaj"
                className="bg-gray-100 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.instagram.com/blerdonsopaj"
                className="bg-gray-100 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@blerdonsopaj"
                className="bg-gray-100 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link
                href="https://www.tiktok.com/@blerdonsopaj"
                className="bg-gray-100 w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#ff0336] hover:text-white duration-300 ease-linear"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSidebar;