"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero">
      <div className="h-[110vh] bg-[url('/images/hero/abc.png')] bg-[50%] bg-cover flex justify-center items-center text-white p-8">
        {/* Social Media Sidebar */}
        {/* <div className="hidden lg:flex gap-4 flex-row-reverse -rotate-90 text-white absolute top-2/4 -right-8 items-center">
          <p className="uppercase text-xl font-bold tracking-widest">
            {t('hero.share')}
          </p>
          <span className="w-10 bg-[#FF0336] h-[0.1563rem]"></span>
          <div className="text-white gap-4 flex">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-linkedin-in text-xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex flex-col gap-8 items-center lg:items-start relative lg:ml-[36rem] max-w-2xl">
          {/* Abstract Design Element */}
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={270}
            height={270}
            className="absolute left-5.5 lg:left-0 -top-2.5"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          
          {/* Tagline */}
          <p className="text-white z-10 font-semibold text-lg lg:ml-11 bg-[#FF0336] px-4 py-2 rounded-full">
            {t('hero.tagline')}
          </p>

          {/* Main Title */}
          <h1 className="font-bold text-[2.5rem] lg:text-6xl flex flex-col gap-2 text-center lg:text-left leading-tight lg:space-y-2">
            <span className="text-white drop-shadow-lg">{t('hero.titleLine1')}</span>{" "}
            <span className="font-normal text-[#FF0336] drop-shadow-lg">{t('hero.titleLine2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-center lg:text-left text-gray-200 leading-relaxed max-w-xl">
            {t('hero.subtitle')}
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF0336]">500+</p>
              <p className="text-gray-300 text-sm">{t('hero.stats.clients')}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF0336]">8+</p>
              <p className="text-gray-300 text-sm">{t('hero.stats.experience')}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FF0336]">98%</p>
              <p className="text-gray-300 text-sm">{t('hero.stats.success')}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/pricing"
              className="relative flex items-center gap-2 bg-[#FF0336] text-white font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-[13rem] after:duration-300 after:ease-linear after:border after:border-[#FF0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 hover:bg-white hover:text-[#FF0336] transition-all duration-300"
            >
              <span>{t('hero.cta')}</span>
              <span className="text-white hover:text-[#FF0336] transition-colors duration-300">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            
            <Link
              href="/programs"
              className="relative flex items-center gap-2 bg-transparent text-white font-bold px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>{t('hero.secondary')}</span>
              <span>
                <i className="fa-solid fa-dumbbell"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;