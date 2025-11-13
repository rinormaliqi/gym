"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { plansContent } from "../content/plans";

function PricingChart() {
  const { language } = useLanguage();
  const content = plansContent[language];

  const planImages = {
    basic: "/images/pricing-chart/beginners.jpg",
    premium: "/images/pricing-chart/basic.jpg", 
    elite: "/images/pricing-chart/advance.jpg"
  };

  return (
    <section id="pricing-chart" className="relative">
      <div className="bg-[url('/images/bg/bg.jpg')] px-8 py-16 bg-[50%] bg-no-repeat bg-cover relative space-y-16">
        {/* Background Images */}
        <Image
          src="/images/pricing-chart/nodaysoff.png"
          alt="no days off"
          width={270}
          height={270}
          className="absolute left-0"
        />
        <Image
          src="/images/pricing-chart/twobarbels.png"
          alt="dunno"
          width={300}
          height={300}
          className="absolute bottom-0 right-0"
        />

        {/* Header Section */}
        <div className="relative flex flex-col gap-4 items-center text-center">
          <Image
            src="/images/abstract/abstract.svg"
            alt="abstract"
            width={220}
            height={220}
            className="absolute left-[2.95rem] lg:left-[38.75rem] -top-1.5"
          />
          <p className="text-black relative z-10 font-bold text-center mb-4 uppercase tracking-widest">
            {content.title}
          </p>
          <h1 className="font-bold text-4xl text-black">{content.title}</h1>
          <p className="text-gray-800 max-w-2xl text-center">
            {content.subtitle}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-8 z-10 relative">
          {content.plans.map((plan) => (
            <div key={plan.key} className="flex flex-col group relative h-full">
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#FF0336] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg">
                    {content.popular}
                  </div>
                </div>
              )}

              <div className="relative">
                <Image
                  src={planImages[plan.key as keyof typeof planImages]}
                  alt={plan.name}
                  width={500}
                  height={500}
                  className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full h-64 object-cover"
                />
                <div className="bg-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#ff0336] duration-300 ease-linear">
                  {plan.name}
                </div>
              </div>

              {/* Card Body with Fixed Height */}
              <div className="bg-white pb-6 pt-8 shadow-xl flex flex-col flex-grow min-h-[500px]">
                {/* Price Section */}
                <div className="flex flex-col items-center mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl font-bold text-[#FF0336]">€</span>
                    <span className="font-bold text-[3.5rem] text-gray-900">
                      {plan.price.replace('€', '')}
                    </span>
                    <span className="text-xl text-gray-600">{content.monthly}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center px-4 mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Features Section - This will grow to fill available space */}
                <div className="flex-grow px-6 mb-6">
                  <div className="space-y-3 h-full">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <i className="fa-solid fa-check text-green-500 text-sm mt-1 flex-shrink-0"></i>
                        <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button - Always at the bottom */}
                <div className="px-6 mt-auto">
                  <Link
                    href={`/checkout?plan=${plan.key}`}
                    className="relative text-black flex items-center justify-center gap-2 bg-[#FF0336] font-bold px-8 py-4 after:h-[3.5rem] after:absolute after:w-full after:duration-300 after:ease-linear after:border after:border-[#ff0336] after:-top-3 after:-right-3 hover:after:top-0 hover:after:right-0 group-hover:bg-white group-hover:text-[#FF0336] transition-all duration-300 w-full text-center"
                  >
                    <span>{plan.cta}</span>
                    <span>
                      <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <i className="fa-solid fa-shield-check text-[#FF0336] text-2xl"></i>
              <h3 className="text-black font-bold text-lg">{content.guarantee}</h3>
            </div>
            <p className="text-gray-800">
              {content.questions}{' '}
              <Link href="/contact" className="text-[#FF0336] hover:underline font-semibold">
                {content.contact}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingChart;