"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; // Fixed import path
import { useSearchParams } from "next/navigation";
import { plansContent } from "../content/plans";
import Link from "next/link";

function Checkout() {
  const { language, t } = useLanguage(); // Added t function
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("card");
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "",
    postalCode: "",
    saveCard: false,
    terms: false
  });

  const content = plansContent[language];

  // Get plan from URL parameters and set selected plan
  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && content) {
      const plan = content.plans.find(p => p.key === planParam);
      if (plan) {
        setSelectedPlan(plan);
      } else {
        // Default to premium if plan not found
        setSelectedPlan(content.plans.find(p => p.key === 'premium'));
      }
    } else if (content) {
      // Default to premium if no plan parameter
      setSelectedPlan(content.plans.find(p => p.key === 'premium'));
    }
  }, [searchParams, content, language]); // Added language to dependencies

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission here
    console.log('Submitting payment for plan:', selectedPlan?.key);
  };

  if (!selectedPlan || !content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#ff0336] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section id="checkout" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('checkout.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('checkout.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Payment Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              {/* Progress Steps */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#ff0336] text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="ml-2 font-semibold text-gray-900">{t('checkout.payment')}</span>
                </div>
                <div className="flex-1 h-1 bg-gray-300 mx-4"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="ml-2 font-semibold text-gray-500">{t('checkout.confirmation')}</span>
                </div>
              </div>

              {/* Selected Plan Info */}
              <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-red-900">
                      {t('checkout.selectedPlan')}: {selectedPlan.name}
                    </h4>
                    <p className="text-red-700 text-sm">
                      {selectedPlan.price} {content.monthly}
                    </p>
                  </div>
                  <Link 
                    href="/pricing"
                    className="text-red-600 hover:text-red-800 text-sm font-semibold"
                  >
                    {t('checkout.changePlan')}
                  </Link>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('checkout.contactInfo')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('checkout.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0336] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Tabs */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('checkout.paymentMethod')}
                </h3>
                
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab("card")}
                    className={`flex-1 py-3 font-medium text-center border-b-2 transition-colors ${
                      activeTab === "card" 
                        ? "border-[#ff0336] text-[#ff0336]" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <i className="fa-regular fa-credit-card mr-2"></i>
                    {t('checkout.creditCard')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("paysera")}
                    className={`flex-1 py-3 font-medium text-center border-b-2 transition-colors ${
                      activeTab === "paysera" 
                        ? "border-[#ff0336] text-[#ff0336]" 
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <i className="fa-solid fa-globe mr-2"></i>
                    Paysera
                  </button>
                </div>

                {/* Card Payment Form */}
                {activeTab === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('checkout.cardNumber')}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formatCardNumber(formData.cardNumber)}
                          onChange={handleInputChange}
                          maxLength={19}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0336] focus:border-transparent pl-12"
                          placeholder="1234 5678 9012 3456"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <i className="fa-regular fa-credit-card"></i>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('checkout.expiryDate')}
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formatExpiry(formData.expiry)}
                          onChange={handleInputChange}
                          maxLength={5}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0336] focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('checkout.cvv')}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            maxLength={4}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0336] focus:border-transparent"
                            placeholder="123"
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <i className="fa-solid fa-lock"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('checkout.nameOnCard')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0336] focus:border-transparent"
                        placeholder={t('checkout.nameOnCard')}
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveCard"
                        checked={formData.saveCard}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#ff0336] border-gray-300 rounded focus:ring-[#ff0336]"
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        {t('checkout.saveCard')}
                      </label>
                    </div>
                  </div>
                )}

                {/* Paysera Payment Option */}
                {activeTab === "paysera" && (
                  <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="fa-solid fa-globe text-white text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-lg text-gray-900">Paysera</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {t('checkout.payseraDescription')}
                      </p>
                    </div>
                    <button 
                      type="button"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      {t('checkout.payWithPaysera')}
                    </button>
                  </div>
                )}
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <i className="fa-solid fa-lock text-green-600 text-xl"></i>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t('checkout.securePayment')}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {t('checkout.encrypted')}
                  </p>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="mt-8">
                <div className="flex items-start mb-6">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-[#ff0336] border-gray-300 rounded focus:ring-[#ff0336] mt-1"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    {t('checkout.agreeTerms')}{" "}
                    <a href="/terms" className="text-[#ff0336] hover:underline">
                      {t('checkout.terms')}
                    </a>{" "}
                    {t('checkout.and')}{" "}
                    <a href="/privacy" className="text-[#ff0336] hover:underline">
                      {t('checkout.privacy')}
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff0336] hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.terms}
                >
                  {t('checkout.proceedPayment')} - {selectedPlan.price}
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  {t('checkout.currencyNote')}
                </p>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t('checkout.orderSummary')}
              </h3>

              {/* Selected Plan */}
              <div className="bg-gradient-to-r from-[#ff0336] to-pink-600 rounded-lg p-6 text-white mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg capitalize">
                      {selectedPlan.name}
                    </h4>
                    <p className="text-pink-100 text-sm">
                      {selectedPlan.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{selectedPlan.price}</p>
                    <p className="text-pink-100 text-sm">
                      {content.monthly}
                    </p>
                  </div>
                </div>
              </div>

              {/* Plan Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {t('checkout.included')}:
                </h4>
                <ul className="space-y-3">
                  {selectedPlan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>{t('checkout.subtotal')}</span>
                  <span>{selectedPlan.price}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>{t('checkout.tax')}</span>
                  <span>0€</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>{t('checkout.discount')}</span>
                  <span className="text-green-600">-0€</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 mt-4 pt-4 border-t border-gray-200">
                  <span>{t('checkout.total')}</span>
                  <span>{selectedPlan.price}</span>
                </div>
              </div>

              {/* Support Info */}
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-start">
                  <i className="fa-solid fa-headset text-red-600 text-lg mr-3 mt-1"></i>
                  <div>
                    <h5 className="font-semibold text-red-900 text-sm">
                      {t('checkout.supportTitle')}
                    </h5>
                    <p className="text-red-700 text-sm mt-1">
                      {t('checkout.supportDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Checkout;