export type PlanType = {
  key: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export type PlansContentType = {
  [key: string]: {
    plans: PlanType[];
    title: string;
    subtitle: string;
    monthly: string;
    popular: string;
    guarantee: string;
    questions: string;
    contact: string;
  };
};

export const plansContent: PlansContentType = {
  al: {
    title: "PLANET E EKSLUZIVE",
    subtitle: "Zgjidhni planin që i përshtatet më së miri qëllimeve tuaja",
    monthly: "/muaj",
    popular: "Më i Kërkuari",
    guarantee: "Garancion 30-ditorë kthimi i parave",
    questions: "Keni pyetje?",
    contact: "Na kontaktoni",
    plans: [
      {
        key: "basic",
        name: "Bazë",
        price: "49€",
        description: "Për fillestarët që duan të fillojnë udhëtimin e tyre",
        features: [
          "Plan ushqimor personalizuar",
          "Plan stërvitor bazë",
          "Rishikim çdo 2 javë",
          "Mbështetje me email",
          "Akses në grupin e komunitetit",
          "Video demonstrimesh"
        ],
        cta: "Fillo Tani"
      },
      {
        key: "premium",
        name: "Premium",
        price: "79€",
        description: "Më i popullarizuar - Për rezultate optimale",
        features: [
          "Plan i plotë ushqimor dhe stërvitor",
          "Rishikim javor",
          "3 konsultime video në muaj",
          "Rregullim sipas nevojave",
          "Mbështetje 24/7 WhatsApp",
          "Monitorim të progresit",
          "Plan emergjent",
          "Këshilla nutricionale"
        ],
        cta: "Zgjidh Premium",
        popular: true
      },
      {
        key: "elite",
        name: "Elite",
        price: "129€",
        description: "Për ata që duan rezultate maksimale dhe të shpejta",
        features: [
          "Çdo gjë në Premium +",
          "Plan shumë i detajuar",
          "Takime direkte online",
          "Monitorim ditor",
          "Plan emergjent 24/7",
          "Konsultime të pakufizuara",
          "Analizë e progresit javor",
          "Plan ushqimor me receta",
          "Mbështetje VIP",
          "Akses në të gjitha burimet"
        ],
        cta: "Bëhu Elite"
      }
    ]
  },
  en: {
    title: "EXCLUSIVE PRICING PLANS",
    subtitle: "Choose the plan that best fits your goals",
    monthly: "/month",
    popular: "Most Popular",
    guarantee: "30-day money-back guarantee",
    questions: "Have questions?",
    contact: "Contact us",
    plans: [
      {
        key: "basic",
        name: "Basic",
        price: "49€",
        description: "For beginners who want to start their journey",
        features: [
          "Personalized meal plan",
          "Basic workout plan",
          "Bi-weekly review",
          "Email support",
          "Access to community group",
          "Demonstration videos"
        ],
        cta: "Start Now"
      },
      {
        key: "premium",
        name: "Premium",
        price: "79€",
        description: "Most popular - For optimal results",
        features: [
          "Complete nutrition and training plan",
          "Weekly review",
          "3 video consultations per month",
          "Adjustments as needed",
          "24/7 WhatsApp support",
          "Progress monitoring",
          "Emergency plan",
          "Nutritional advice"
        ],
        cta: "Choose Premium",
        popular: true
      },
      {
        key: "elite",
        name: "Elite",
        price: "129€",
        description: "For those who want maximum and fast results",
        features: [
          "Everything in Premium +",
          "Highly detailed plan",
          "Direct online meetings",
          "Daily monitoring",
          "24/7 emergency plan",
          "Unlimited consultations",
          "Weekly progress analysis",
          "Meal plan with recipes",
          "VIP support",
          "Access to all resources"
        ],
        cta: "Become Elite"
      }
    ]
  },
  de: {
    title: "EXKLUSIVE PREISPLÄNE",
    subtitle: "Wählen Sie den Plan, der am besten zu Ihren Zielen passt",
    monthly: "/Monat",
    popular: "Beliebteste",
    guarantee: "30-Tage Geld-zurück-Garantie",
    questions: "Haben Sie Fragen?",
    contact: "Kontaktieren Sie uns",
    plans: [
      {
        key: "basic",
        name: "Basis",
        price: "49€",
        description: "Für Anfänger, die ihre Reise beginnen möchten",
        features: [
          "Personalisierter Ernährungsplan",
          "Grundlegender Trainingsplan",
          "Überprüfung alle 2 Wochen",
          "E-Mail-Support",
          "Zugang zur Community-Gruppe",
          "Demonstrationsvideos"
        ],
        cta: "Jetzt Starten"
      },
      {
        key: "premium",
        name: "Premium",
        price: "79€",
        description: "Am beliebtesten - Für optimale Ergebnisse",
        features: [
          "Vollständiger Ernährungs- und Trainingsplan",
          "Wöchentliche Überprüfung",
          "3 Video-Konsultationen pro Monat",
          "Anpassungen nach Bedarf",
          "24/7 WhatsApp Support",
          "Fortschrittsüberwachung",
          "Notfallplan",
          "Ernährungsberatung"
        ],
        cta: "Premium Wählen",
        popular: true
      },
      {
        key: "elite",
        name: "Elite",
        price: "129€",
        description: "Für diejenigen, die maximale und schnelle Ergebnisse wollen",
        features: [
          "Alles in Premium +",
          "Hochdetaillierter Plan",
          "Direkte Online-Treffen",
          "Tägliche Überwachung",
          "24/7 Notfallplan",
          "Unbegrenzte Konsultationen",
          "Wöchentliche Fortschrittsanalyse",
          "Ernährungsplan mit Rezepten",
          "VIP Support",
          "Zugang zu allen Ressourcen"
        ],
        cta: "Elite Werden"
      }
    ]
  }
};