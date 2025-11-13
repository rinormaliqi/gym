export type ContentType = {
  [key: string]: {
    [key: string]: any;
  };
};

export const content: ContentType = {
  al: {
    // Header/Navigation
    header: {
      home: "Kreu",
      about: "Rreth Meje",
      services: "Shërbimet",
      programs: "Programet",
      pricing: "Çmimet",
      bmi: "Llogaritësi BMI",
      blog: "Blogu",
      contact: "Kontakt",
      login: "Hyrje",
      signup: "Regjistrohu"
    },

    // Hero Section
    hero: {
      share: "Shpërndaj",
      tagline: "GJEJ ENERGJINË TËNDE",
      titleLine1: "BLERDON SOPAJ",
      titleLine2: "TRAJNER PERSONAL PROFESIONAL",
      subtitle: "Transformo jetën tënde me plane të personalizuara ushqimore dhe stërvitjesh. Rezultate të garantuara me qasje shkencore dhe monitorim 24/7.",
      cta: "Fillo Tani",
      secondary: "Shiko Programet",
      stats: {
        clients: "Klientë të Kënaqur",
        experience: "Vite Përvoje",
        success: "Normë Suksesi"
      }
    },

    // Who Am I Section
    about: {
      title: "KUSH JAM UNË?",
      subtitle: "Trajner Personal me Përvojë dhe Pasion",
      description: "Unë jam Blerdon Sopaj, trajner personal i certifikuar me më shumë se 8 vjet përvojë në industrinë e fitnessit. Specializoj në transformimin e trupit, humbjen e peshës dhe rritjen e masës muskulore përmes planeve të personalizuara.",
      mission: "Misioni im është të ndihmoj njerëzit të arrijnë versionin më të mirë të vetes përmes stërvitjeve efektive dhe ushqimit të shëndetshëm.",
      values: {
        passion: "Pasion",
        dedication: "Përkushtim",
        results: "Rezultate",
        support: "Mbështetje"
      },
      certifications: [
        "Certifikatë Personal Training - ISSA",
        "Nutricionist i Certifikuar",
        "Specialist në Stërvitje me Peshë",
        "Trajner i Atletikës"
      ],
      cta: "Bëj Takimin e Parë Falas"
    },

    // Features/Training Programs
    features: {
      title: "PROGRAMET E MIA TË STËRVITJEVE",
      subtitle: "Qasje e Personalizuar për Rezultate Maksimale",
      programs: {
        weightLoss: {
          title: "Humbje Peshe",
          description: "Program i përqendruar në djegien e yndyrnës dhe ndërtimin e shëndetit të përgjithshëm",
          benefits: ["Djegie efektive e yndyrnës", "Rritje e energjisë", "Përmirësim i shëndetit", "Metabolizim më i shpejtë"]
        },
        muscleBuilding: {
          title: "Ndërtim Muskujsh",
          description: "Program intensiv për rritjen e masës muskulore dhe forcës",
          benefits: ["Rritje masë muskulore", "Forcë e shtuar", "Formë fizike më e mirë", "Staminë e përmirësuar"]
        },
        bodyToning: {
          title: "Modelim Trupi",
          description: "Përqendrohem në modelimin e trupit dhe përmirësimin e definicionit muskulor",
          benefits: ["Trup i modeluar", "Definicion muskulor", "Qëndrueshmëri", "Flexibilitet"]
        },
        onlineCoaching: {
          title: "Trajnim Online",
          description: "Program i plotë online me monitorim të vazhdueshëm",
          benefits: ["Flexibilitet kohor", "Monitorim 24/7", "Plan i personalizuar", "Mbështetje e plotë"]
        }
      }
    },

    // Why Choose Me Section
    whyChoose: {
      title: "PSE TË MË ZGJIDHNI MUA?",
      reasons: {
        personalized: {
          title: "Qasje e Personalizuar",
          description: "Çdo program është krijuar posaçërisht për ju, duke marrë parasysh qëllimet, aftësitë dhe kufizimet tuaja."
        },
        science: {
          title: "Bazë Shkencore",
          description: "Metodat e mia bazohen në kërkimin më të fundit shkencor në fushën e fitnessit dhe nutricionit."
        },
        support: {
          title: "Mbështetje 24/7",
          description: "Jam i disponueshëm 24 orë, 7 ditë në javë për pyetje, udhëzime dhe motivim."
        },
        results: {
          title: "Rezultate të Garantuara",
          description: "Nëse ndiqni programin si duhet, ju garantoj rezultatet e dëshiruara brenda afatit të caktuar."
        },
        nutrition: {
          title: "Ushqim i Personalizuar",
          description: "Ofroj plane ushqimore të detajuara që përshtaten me stilin tuaj të jetesës dhe preferencat."
        },
        technology: {
          title: "Teknologji Moderne",
          description: "Përdor aplikacione moderne për monitorim dhe ndjekje të progresit tuaj."
        }
      },
      stats: {
        years: "8+ Vite Përvoje",
        clients: "500+ Klientë",
        success: "98% Normë Suksesi",
        programs: "1000+ Programe"
      }
    },

    // BMI Calculator
    bmi: {
      title: "LLOGARITËSI I INDEREKSIT TË MASËS TË TRUPIT (BMI)",
      subtitle: "Zbuloni gjendjen tuaj aktuale dhe merrni rekomandime personalizuese",
      weight: "Pesha",
      height: "Gjatësia",
      age: "Mosha",
      gender: "Gjinia",
      male: "Mashkull",
      female: "Femër",
      calculate: "Llogarit BMI",
      reset: "Rivendos",
      metric: "Sistemi Metrik (kg/cm)",
      imperial: "Sistemi Imperial (lbs/ft)",
      results: {
        underweight: "Nën peshë",
        normal: "Peshë normale",
        overweight: "Mbipeshë",
        obese1: "Obezitet i shkallës 1",
        obese2: "Obezitet i shkallës 2",
        obese3: "Obezitet i shkallës 3"
      },
      description: {
        underweight: "Rekomandohet rritje e peshës përmes ushqimit të shëndetshëm dhe stërvitjeve të përshtatshme.",
        normal: "Peshë e shëndetshme. Vazhdoni me rutinën tuaj aktuale.",
        overweight: "Rekomandohet humbje e moderuar e peshës përmes ushqimit dhe stërvitjeve.",
        obese1: "Rekomandohet humbje e peshës nën mbikëqyrje profesionale.",
        obese2: "Nevojë për humbje të peshës me ndihmë profesionale.",
        obese3: "Këshillohet konsultim i menjëhershëm mjekësor dhe ndjekje e programit profesional."
      },
      advice: "Këshilla Profesionale:",
      getPlan: "Merrni Planin e Personalizuar"
    },

    // Pricing Plans
    pricing: {
      title: "PLANET E EKSLUZIVE",
      subtitle: "Zgjidhni planin që i përshtatet më së miri qëllimeve tuaja",
      monthly: "Mujore",
      yearly: "Vjetore",
      save: "Kurseni",
      popular: "Më i Kërkuari",
      plans: {
        basic: {
          name: "Bazë",
          price: "49€",
          period: "/muaj",
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
        premium: {
          name: "Premium",
          price: "79€",
          period: "/muaj",
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
          cta: "Zgjidh Premium"
        },
        elite: {
          name: "Elite",
          price: "129€",
          period: "/muaj",
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
      },
      guarantee: "Garancion 30-ditorë kthimi i parave",
      questions: "Keni pyetje?",
      contact: "Na kontaktoni"
    },

    // Checkout Section
   checkout: {
    title: "Përfundo Porosinë Tuaj",
    subtitle: "Pagesë e sigurt e përpunuar përmes Paysera dhe kartave të kreditit kryesore",
    payment: "Pagesa",
    confirmation: "Konfirmimi",
    contactInfo: "Informacioni i Kontaktit",
    email: "Adresa e Emailit",
    paymentMethod: "Metoda e Pagesës",
    creditCard: "Kartë Krediti",
    cardNumber: "Numri i Kartelës",
    expiryDate: "Data e Skadencës",
    cvv: "CVV",
    nameOnCard: "Emri në Kartelë",
    saveCard: "Ruaj kartelën për pagesa të ardhshme",
    payseraDescription: "Paguaj me siguri me Paysera. Do të ridrejtoheni në faqen e tyre të sigurt të pagesës.",
    payWithPaysera: "Paguaj me Paysera",
    securePayment: "Pagesë e Sigurt",
    encrypted: "Informacioni juaj i pagesës është i koduar dhe i sigurt",
    agreeTerms: "Unë pajtohem me",
    terms: "Kushtet e Shërbimit",
    and: "dhe",
    privacy: "Politikën e Privatësisë",
    proceedPayment: "Vazhdo me Pagesën",
    currencyNote: "Të gjitha transaksionet janë të sigurta dhe të koduara. Çmimet në EUR.",
    orderSummary: "Përmbledhja e Porosisë",
    included: "Çfarë përfshihet",
    subtotal: "Nëntotali",
    tax: "Taksa",
    discount: "Zbritje",
    total: "Totali",
    supportTitle: "Keni nevojë për ndihmë?",
    selectedPlan:"Pakoja e Zhgjedhur",
    changePlan:"Ndrro Pakon",
    supportDescription: "Kontaktoni ekipin tonë të mbështetjes në support@blerdonsopaj.com"
  },
    // Latest Blog Section
    blog: {
      title: "BLOGU I FUNDIT",
      subtitle: "Këshilla dhe Informacione të Freskëta për Fitness dhe Shëndet",
      readMore: "Lexo Më Shumë",
      readTime: "min lexim",
      posts: {
        post1: {
          title: "5 Gabimet Më të Mëdha në Stërvitje për Fillestarët",
          excerpt: "Shmangni këto gabime të zakonshme për të optimizuar rezultatet tuaja dhe për të shmangur dëmtimet.",
          category: "Stërvitje",
          date: "15 Janar 2024"
        },
        post2: {
          title: "Ushqimi i Duhur para dhe pas Stërvitjes",
          excerpt: "Çfarë të hani për të maksimizuar performancën dhe rikuperimin tuaj.",
          category: "Nutricion",
          date: "10 Janar 2024"
        },
        post3: {
          title: "Si të Rrisni Metabolizmin Natyralisht",
          excerpt: "Metoda të provuara shkencore për të rritur shpejtësinë metabolike të trupit tuaj.",
          category: "Shëndet",
          date: "5 Janar 2024"
        },
        post4: {
          title: "Rëndësia e Gjumit në Fitnes",
          excerpt: "Pse gjumi është po aq i rëndësishëm sa stërvitja për rezultatet tuaja.",
          category: "Shëndet",
          date: "28 Dhjetor 2023"
        }
      },
      categories: {
        all: "Të Gjitha",
        training: "Stërvitje",
        nutrition: "Ushqim",
        health: "Shëndet",
        motivation: "Motivim"
      }
    },

    // Footer
    footer: {
      description: "Trajner personal profesional i specializuar në transformimin e trupit përmes planeve të personalizuara ushqimore dhe stërvitjesh.",
      quickLinks: "Linqe",
      services: "Shërbimet",
      contact: "Kontakt",
      address: "Rruga e Dëshmorëve, Tirana, Albania",
      phone: "+355 69 123 4567",
      email: "info@blerdonsopaj.com",
      newsletter: {
        title: "Abonohu në Newsletter",
        subtitle: "Merr këshilla të freskëta çdo javë",
        placeholder: "Email-i juaj",
        subscribe: "Abonohu",
        success: "Ju jeni abonuar me sukses!",
        error: "Gabim në abonim."
      },
      social: "Na Ndiqni",
      rights: "Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e Privatësisë",
      terms: "Kushtet e Shërbimit",
      cookies: "Politika e Cookies"
    },

    // Common/General
    common: {
      loading: "Duke u ngarkuar...",
      success: "Sukses!",
      error: "Gabim!",
      tryAgain: "Provo Përsëri",
      required: "Kjo fushë është e detyrueshme",
      invalidEmail: "Email i pavlefshëm",
      send: "Dërgo",
      learnMore: "Mëso Më Shumë",
      viewAll: "Shiko Të Gjitha",
      close: "Mbyll",
      next: "Tjetra",
      previous: "E Mëparshmja",
      download: "Shkarko",
      print: "Printo"
    }
  },

  en: {

    header: {
      home: "Home",
      about: "About Me",
      services: "Services",
      programs: "Programs",
      pricing: "Pricing",
      bmi: "BMI Calculator",
      blog: "Blog",
      contact: "Contact",
      login: "Login",
      signup: "Sign Up"
    },

    // Hero Section
    hero: {
      share: "Share",
      tagline: "FIND YOUR ENERGY",
      titleLine1: "BLERDON SOPAJ",
      titleLine2: "PROFESSIONAL PERSONAL TRAINER",
      subtitle: "Transform your life with customized meal and exercise plans. Guaranteed results with scientific approach and 24/7 monitoring.",
      cta: "Start Now",
      secondary: "View Programs",
      stats: {
        clients: "Satisfied Clients",
        experience: "Years Experience",
        success: "Success Rate"
      }
    },

    // Who Am I Section
    about: {
      title: "WHO AM I?",
      subtitle: "Experienced and Passionate Personal Trainer",
      description: "I am Blerdon Sopaj, a certified personal trainer with over 8 years of experience in the fitness industry. I specialize in body transformation, weight loss, and muscle building through personalized plans.",
      mission: "My mission is to help people achieve the best version of themselves through effective workouts and healthy nutrition.",
      values: {
        passion: "Passion",
        dedication: "Dedication",
        results: "Results",
        support: "Support"
      },
      certifications: [
        "Personal Training Certification - ISSA",
        "Certified Nutritionist",
        "Weight Training Specialist",
        "Athletic Trainer"
      ],
      cta: "Book First Free Meeting"
    },

    // Features/Training Programs
    features: {
      title: "MY TRAINING PROGRAMS",
      subtitle: "Personalized Approach for Maximum Results",
      programs: {
        weightLoss: {
          title: "Weight Loss",
          description: "Program focused on fat burning and overall health improvement",
          benefits: ["Effective fat burning", "Increased energy", "Health improvement", "Faster metabolism"]
        },
        muscleBuilding: {
          title: "Muscle Building",
          description: "Intensive program for muscle mass and strength growth",
          benefits: ["Muscle mass growth", "Increased strength", "Better physique", "Improved stamina"]
        },
        bodyToning: {
          title: "Body Toning",
          description: "Focus on body shaping and muscle definition improvement",
          benefits: ["Shaped body", "Muscle definition", "Endurance", "Flexibility"]
        },
        onlineCoaching: {
          title: "Online Coaching",
          description: "Complete online program with continuous monitoring",
          benefits: ["Time flexibility", "24/7 monitoring", "Personalized plan", "Full support"]
        }
      }
    },

    // Why Choose Me Section
    whyChoose: {
      title: "WHY CHOOSE ME?",
      reasons: {
        personalized: {
          title: "Personalized Approach",
          description: "Every program is created specifically for you, considering your goals, abilities, and limitations."
        },
        science: {
          title: "Scientific Base",
          description: "My methods are based on the latest scientific research in fitness and nutrition."
        },
        support: {
          title: "24/7 Support",
          description: "I am available 24 hours, 7 days a week for questions, guidance, and motivation."
        },
        results: {
          title: "Guaranteed Results",
          description: "If you follow the program correctly, I guarantee the desired results within the set timeframe."
        },
        nutrition: {
          title: "Personalized Nutrition",
          description: "I provide detailed meal plans that fit your lifestyle and preferences."
        },
        technology: {
          title: "Modern Technology",
          description: "I use modern applications for monitoring and tracking your progress."
        }
      },
      stats: {
        years: "8+ Years Experience",
        clients: "500+ Clients",
        success: "98% Success Rate",
        programs: "1000+ Programs"
      }
    },

    // BMI Calculator
    bmi: {
      title: "BODY MASS INDEX (BMI) CALCULATOR",
      subtitle: "Discover your current status and get personalized recommendations",
      weight: "Weight",
      height: "Height",
      age: "Age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      calculate: "Calculate BMI",
      reset: "Reset",
      metric: "Metric System (kg/cm)",
      imperial: "Imperial System (lbs/ft)",
      results: {
        underweight: "Underweight",
        normal: "Normal weight",
        overweight: "Overweight",
        obese1: "Obesity Class 1",
        obese2: "Obesity Class 2",
        obese3: "Obesity Class 3"
      },
      description: {
        underweight: "Weight gain recommended through healthy nutrition and appropriate exercises.",
        normal: "Healthy weight. Continue with your current routine.",
        overweight: "Moderate weight loss recommended through diet and exercise.",
        obese1: "Weight loss recommended under professional supervision.",
        obese2: "Need for weight loss with professional help.",
        obese3: "Immediate medical consultation advised and follow professional program."
      },
      advice: "Professional Advice:",
      getPlan: "Get Personalized Plan"
    },

    // Pricing Plans
    pricing: {
      title: "EXCLUSIVE PRICING PLANS",
      subtitle: "Choose the plan that best fits your goals",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save",
      popular: "Most Popular",
      plans: {
        basic: {
          name: "Basic",
          price: "49€",
          period: "/month",
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
        premium: {
          name: "Premium",
          price: "79€",
          period: "/month",
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
          cta: "Choose Premium"
        },
        elite: {
          name: "Elite",
          price: "129€",
          period: "/month",
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
      },
      guarantee: "30-day money-back guarantee",
      questions: "Have questions?",
      contact: "Contact us"
    },

    // Checkout Section
 checkout: {
  title: "Complete Your Purchase",
  subtitle: "Secure payment processed through Paysera and major credit cards",
  payment: "Payment",
  confirmation: "Confirmation",
  contactInfo: "Contact Information",
  email: "Email Address",
  paymentMethod: "Payment Method",
  creditCard: "Credit Card",
  cardNumber: "Card Number",
  expiryDate: "Expiry Date",
  cvv: "CVV",
  nameOnCard: "Name on Card",
  saveCard: "Save card for future payments",
  payseraDescription: "Pay securely with Paysera. You will be redirected to their secure payment page.",
  payWithPaysera: "Pay with Paysera",
  securePayment: "Secure Payment",
  encrypted: "Your payment information is encrypted and secure",
  agreeTerms: "I agree to the",
  terms: "Terms of Service",
  and: "and",
  privacy: "Privacy Policy",
  proceedPayment: "Proceed to Payment",
  currencyNote: "All transactions are secure and encrypted. Prices in EUR.",
  orderSummary: "Order Summary",
  included: "What's included",
  subtotal: "Subtotal",
  tax: "Tax",
  discount: "Discount",
  total: "Total",
  supportTitle: "Need help?",
      selectedPlan:"Selected Plan",
    changePlan:"Change Plan",
  supportDescription: "Contact our support team at support@blerdonsopaj.com"
},

    // Latest Blog Section
    blog: {
      title: "LATEST BLOG",
      subtitle: "Fresh Tips and Information about Fitness and Health",
      readMore: "Read More",
      readTime: "min read",
      posts: {
        post1: {
          title: "5 Biggest Workout Mistakes for Beginners",
          excerpt: "Avoid these common mistakes to optimize your results and prevent injuries.",
          category: "Training",
          date: "January 15, 2024"
        },
        post2: {
          title: "Proper Nutrition Before and After Workout",
          excerpt: "What to eat to maximize your performance and recovery.",
          category: "Nutrition",
          date: "January 10, 2024"
        },
        post3: {
          title: "How to Increase Metabolism Naturally",
          excerpt: "Scientifically proven methods to increase your body's metabolic rate.",
          category: "Health",
          date: "January 5, 2024"
        },
        post4: {
          title: "The Importance of Sleep in Fitness",
          excerpt: "Why sleep is as important as training for your results.",
          category: "Health",
          date: "December 28, 2023"
        }
      },
      categories: {
        all: "All",
        training: "Training",
        nutrition: "Nutrition",
        health: "Health",
        motivation: "Motivation"
      }
    },

    // Footer
    footer: {
      description: "Professional personal trainer specialized in body transformation through personalized meal and workout plans.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      address: "Deshmoret Street, Tirana, Albania",
      phone: "+355 69 123 4567",
      email: "info@blerdonsopaj.com",
      newsletter: {
        title: "Subscribe to Newsletter",
        subtitle: "Get fresh tips every week",
        placeholder: "Your email",
        subscribe: "Subscribe",
        success: "You have successfully subscribed!",
        error: "Subscription error."
      },
      social: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies Policy"
    },

    // Common/General
    common: {
      loading: "Loading...",
      success: "Success!",
      error: "Error!",
      tryAgain: "Try Again",
      required: "This field is required",
      invalidEmail: "Invalid email",
      send: "Send",
      learnMore: "Learn More",
      viewAll: "View All",
      close: "Close",
      next: "Next",
      previous: "Previous",
      download: "Download",
      print: "Print"
    }
  },

  de: {
    // Header/Navigation
    header: {
      home: "Startseite",
      about: "Über Mich",
      services: "Dienstleistungen",
      programs: "Programme",
      pricing: "Preise",
      bmi: "BMI Rechner",
      blog: "Blog",
      contact: "Kontakt",
      login: "Anmelden",
      signup: "Registrieren"
    },

    // Hero Section
    hero: {
      share: "Teilen",
      tagline: "FINDEN SIE IHRE ENERGIE",
      titleLine1: "BLERDON SOPAJ",
      titleLine2: "PROFESSIONELLER PERSONAL TRAINER",
      subtitle: "Verändern Sie Ihr Leben mit maßgeschneiderten Ernährungs- und Trainingsplänen. Garantierte Ergebnisse mit wissenschaftlichem Ansatz und 24/7 Überwachung.",
      cta: "Jetzt Starten",
      secondary: "Programme Ansehen",
      stats: {
        clients: "Zufriedene Kunden",
        experience: "Jahre Erfahrung",
        success: "Erfolgsrate"
      }
    },

    // Who Am I Section
    about: {
      title: "WER BIN ICH?",
      subtitle: "Erfahrener und Leidenschaftlicher Personal Trainer",
      description: "Ich bin Blerdon Sopaj, ein zertifizierter Personal Trainer mit über 8 Jahren Erfahrung in der Fitnessbranche. Ich spezialisiere mich auf Körpertransformation, Gewichtsverlust und Muskelaufbau durch personalisierte Pläne.",
      mission: "Meine Mission ist es, Menschen zu helfen, die beste Version ihrer selbst durch effektive Workouts und gesunde Ernährung zu erreichen.",
      values: {
        passion: "Leidenschaft",
        dedication: "Hingabe",
        results: "Ergebnisse",
        support: "Unterstützung"
      },
      certifications: [
        "Personal Training Zertifizierung - ISSA",
        "Zertifizierter Ernährungsberater",
        "Gewichtstraining Spezialist",
        "Athletik Trainer"
      ],
      cta: "Erstes Kostenloses Meeting Buchen"
    },

    // Features/Training Programs
    features: {
      title: "MEINE TRAININGSPROGRAMME",
      subtitle: "Personalisierter Ansatz für maximale Ergebnisse",
      programs: {
        weightLoss: {
          title: "Gewichtsverlust",
          description: "Programm konzentriert auf Fettverbrennung und allgemeine Gesundheitsverbesserung",
          benefits: ["Effektive Fettverbrennung", "Erhöhte Energie", "Gesundheitsverbesserung", "Schnellerer Stoffwechsel"]
        },
        muscleBuilding: {
          title: "Muskelaufbau",
          description: "Intensives Programm für Muskelmasse und Kraftwachstum",
          benefits: ["Muskelmasse Wachstum", "Erhöhte Kraft", "Bessere Physis", "Verbesserte Ausdauer"]
        },
        bodyToning: {
          title: "Körperformung",
          description: "Fokus auf Körperformung und Muskeldefinition Verbesserung",
          benefits: ["Geformter Körper", "Muskeldefinition", "Ausdauer", "Flexibilität"]
        },
        onlineCoaching: {
          title: "Online Coaching",
          description: "Vollständiges Online-Programm mit kontinuierlicher Überwachung",
          benefits: ["Zeitliche Flexibilität", "24/7 Überwachung", "Personalisierter Plan", "Volle Unterstützung"]
        }
      }
    },

    // Why Choose Me Section
    whyChoose: {
      title: "WARUM MICH WÄHLEN?",
      reasons: {
        personalized: {
          title: "Personalisierter Ansatz",
          description: "Jedes Programm wird speziell für Sie erstellt, unter Berücksichtigung Ihrer Ziele, Fähigkeiten und Einschränkungen."
        },
        science: {
          title: "Wissenschaftliche Basis",
          description: "Meine Methoden basieren auf der neuesten wissenschaftlichen Forschung in Fitness und Ernährung."
        },
        support: {
          title: "24/7 Unterstützung",
          description: "Ich bin 24 Stunden, 7 Tage die Woche für Fragen, Anleitung und Motivation verfügbar."
        },
        results: {
          title: "Garantierte Ergebnisse",
          description: "Wenn Sie das Programm korrekt befolgen, garantiere ich die gewünschten Ergebnisse innerhalb des festgelegten Zeitrahmens."
        },
        nutrition: {
          title: "Personalisierte Ernährung",
          description: "Ich erstelle detaillierte Ernährungspläne, die zu Ihrem Lebensstil und Ihren Vorlieben passen."
        },
        technology: {
          title: "Moderne Technologie",
          description: "Ich verwende moderne Anwendungen zur Überwachung und Verfolgung Ihres Fortschritts."
        }
      },
      stats: {
        years: "8+ Jahre Erfahrung",
        clients: "500+ Kunden",
        success: "98% Erfolgsrate",
        programs: "1000+ Programme"
      }
    },

    // BMI Calculator
    bmi: {
      title: "BODY MASS INDEX (BMI) RECHNER",
      subtitle: "Entdecken Sie Ihren aktuellen Status und erhalten Sie personalisierte Empfehlungen",
      weight: "Gewicht",
      height: "Größe",
      age: "Alter",
      gender: "Geschlecht",
      male: "Männlich",
      female: "Weiblich",
      calculate: "BMI Berechnen",
      reset: "Zurücksetzen",
      metric: "Metrisches System (kg/cm)",
      imperial: "Imperiales System (lbs/ft)",
      results: {
        underweight: "Untergewicht",
        normal: "Normalgewicht",
        overweight: "Übergewicht",
        obese1: "Adipositas Grad 1",
        obese2: "Adipositas Grad 2",
        obese3: "Adipositas Grad 3"
      },
      description: {
        underweight: "Gewichtszunahme empfohlen durch gesunde Ernährung und geeignete Übungen.",
        normal: "Gesundes Gewicht. Fahren Sie mit Ihrer aktuellen Routine fort.",
        overweight: "Mäßige Gewichtsabnahme empfohlen durch Diät und Bewegung.",
        obese1: "Gewichtsverlust empfohlen unter professioneller Aufsicht.",
        obese2: "Gewichtsverlust mit professioneller Hilfe erforderlich.",
        obese3: "Sofortige ärztliche Konsultation empfohlen und professionelles Programm befolgen."
      },
      advice: "Professioneller Rat:",
      getPlan: "Personalisierte Plan Erhalten"
    },

    // Pricing Plans
    pricing: {
      title: "EXKLUSIVE PREISPLÄNE",
      subtitle: "Wählen Sie den Plan, der am besten zu Ihren Zielen passt",
      monthly: "Monatlich",
      yearly: "Jährlich",
      save: "Sparen",
      popular: "Beliebteste",
      plans: {
        basic: {
          name: "Basis",
          price: "49€",
          period: "/Monat",
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
        premium: {
          name: "Premium",
          price: "79€",
          period: "/Monat",
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
          cta: "Premium Wählen"
        },
        elite: {
          name: "Elite",
          price: "129€",
          period: "/Monat",
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
      },
      guarantee: "30-Tage Geld-zurück-Garantie",
      questions: "Haben Sie Fragen?",
      contact: "Kontaktieren Sie uns"
    },

    // Checkout Section
    checkout: {
      title: "KASSE",
      personalInfo: "Persönliche Informationen",
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      billing: "Rechnungsinformationen",
      address: "Adresse",
      city: "Stadt",
      postalCode: "Postleitzahl",
      country: "Land",
      payment: "Zahlungsmethode",
      cardNumber: "Kartennummer",
      expiryDate: "Ablaufdatum",
      cvv: "CVV",
      nameOnCard: "Name auf der Karte",
      plan: "Ausgewählter Plan",
      price: "Preis",
      duration: "Dauer",
      total: "Gesamt",
      discount: "Rabatt",
      finalTotal: "Endsumme",
      agreeTerms: "Ich stimme den Allgemeinen Geschäftsbedingungen zu",
      proceed: "Zur Zahlung Fortfahren",
      secure: "Sichere und verschlüsselte Zahlung",
      success: "Bestellung erfolgreich abgeschlossen!",
      error: "Fehler bei der Bestellbearbeitung."
    },

    // Latest Blog Section
    blog: {
      title: "NEUESTER BLOG",
      subtitle: "Frische Tipps und Informationen über Fitness und Gesundheit",
      readMore: "Mehr Lesen",
      readTime: "Min Lesen",
      posts: {
        post1: {
          title: "5 Größte Trainingsfehler für Anfänger",
          excerpt: "Vermeiden Sie diese häufigen Fehler, um Ihre Ergebnisse zu optimieren und Verletzungen zu vermeiden.",
          category: "Training",
          date: "15. Januar 2024"
        },
        post2: {
          title: "Richtige Ernährung vor und nach dem Training",
          excerpt: "Was Sie essen sollten, um Ihre Leistung und Erholung zu maximieren.",
          category: "Ernährung",
          date: "10. Januar 2024"
        },
        post3: {
          title: "Wie man den Stoffwechsel natürlich steigert",
          excerpt: "Wissenschaftlich bewiesene Methoden zur Steigerung Ihrer Stoffwechselrate.",
          category: "Gesundheit",
          date: "5. Januar 2024"
        },
        post4: {
          title: "Die Bedeutung von Schlaf im Fitness",
          excerpt: "Warum Schlaf genauso wichtig ist wie Training für Ihre Ergebnisse.",
          category: "Gesundheit",
          date: "28. Dezember 2023"
        }
      },
      categories: {
        all: "Alle",
        training: "Training",
        nutrition: "Ernährung",
        health: "Gesundheit",
        motivation: "Motivation"
      }
    },

    // Footer
    footer: {
      description: "Professioneller Personal Trainer, spezialisiert auf Körpertransformation durch personalisierte Ernährungs- und Trainingspläne.",
      quickLinks: "Schnelllinks",
      services: "Dienstleistungen",
      contact: "Kontakt",
      address: "Deshmoret Straße, Tirana, Albanien",
      phone: "+355 69 123 4567",
      email: "info@blerdonsopaj.com",
      newsletter: {
        title: "Newsletter Abonnieren",
        subtitle: "Erhalten Sie jede Woche frische Tipps",
        placeholder: "Ihre E-Mail",
        subscribe: "Abonnieren",
        success: "Sie haben sich erfolgreich angemeldet!",
        error: "Abonnementsfehler."
      },
      social: "Folgen Sie Uns",
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie"
    },

    // Common/General
    common: {
      loading: "Laden...",
      success: "Erfolg!",
      error: "Fehler!",
      tryAgain: "Erneut Versuchen",
      required: "Dieses Feld ist erforderlich",
      invalidEmail: "Ungültige E-Mail",
      send: "Senden",
      learnMore: "Mehr Erfahren",
      viewAll: "Alle Anzeigen",
      close: "Schließen",
      next: "Weiter",
      previous: "Zurück",
      download: "Herunterladen",
      print: "Drucken"
    }
  }
};