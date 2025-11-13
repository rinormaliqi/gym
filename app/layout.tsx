import { LanguageProvider } from "./context/LanguageContext";
import { TogglerProvider } from "./context/toggler";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "Blerdon Sopaj - Professional Personal Trainer & Fitness Coach",
    template: "%s | Blerdon Sopaj - Personal Trainer"
  },
  description: "Transform your body with Blerdon Sopaj - certified personal trainer offering customized meal plans, exercise programs, and online coaching. Achieve your fitness goals with professional guidance.",
  keywords: "personal trainer, fitness coach, meal plans, exercise programs, online coaching, weight loss, muscle building, body transformation, Albania fitness, Blerdon Sopaj",
  authors: [{ name: "Blerdon Sopaj" }],
  creator: "Blerdon Sopaj",
  publisher: "Blerdon Sopaj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blerdonsopaj.com'),
  alternates: {
    canonical: '/',
    languages: {
      'al': '/al',
      'en': '/en',
      'de': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blerdonsopaj.com',
    siteName: 'Blerdon Sopaj - Personal Trainer',
    title: 'Blerdon Sopaj - Professional Personal Trainer & Fitness Coach',
    description: 'Transform your body with customized meal plans and exercise programs. Professional online coaching available.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blerdon Sopaj - Professional Personal Trainer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blerdon Sopaj - Professional Personal Trainer',
    description: 'Transform your body with customized fitness programs and online coaching',
    images: ['/images/og-image.jpg'],
    creator: '@blerdonsopaj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console code
    yandex: 'your-yandex-verification-code', // Optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          src="https://kit.fontawesome.com/23cc326a28.js"
          crossOrigin="anonymous"
        ></script>
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Personaltrainer",
              "@id": "https://blerdonsopaj.com#personaltrainer",
              "name": "Blerdon Sopaj",
              "description": "Professional Personal Trainer and Fitness Coach",
              "url": "https://blerdonsopaj.com",
              "telephone": "+355-69-123-4567",
              "email": "info@blerdonsopaj.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rruga e Dëshmorëve",
                "addressLocality": "Tirana",
                "addressCountry": "AL"
              },
              "areaServed": ["Albania", "Kosovo", "Europe"],
              "serviceType": [
                "Personal Training",
                "Online Coaching", 
                "Meal Planning",
                "Fitness Programs",
                "Body Transformation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Training Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic Training Plan",
                      "description": "Personalized meal and basic workout plan"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Coaching",
                      "description": "Complete nutrition and training plan with weekly reviews"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elite Program",
                      "description": "VIP coaching with daily monitoring and unlimited support"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/blerdonsopaj",
                "https://www.instagram.com/blerdonsopaj",
                "https://www.youtube.com/@blerdonsopaj"
              ]
            })
          }}
        />

        {/* Additional Structured Data for Fitness Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Personal Training",
              "provider": {
                "@type": "Person",
                "name": "Blerdon Sopaj"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Albania"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fitness Programs"
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.className}`}>
        <LanguageProvider>
          <TogglerProvider>
            {children}
          </TogglerProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}