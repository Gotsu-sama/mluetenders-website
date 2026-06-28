export type Locale = 'en' | 'fr' | 'ar'

export type Translations = {
  nav: {
    features: string
    howItWorks: string
    pricing: string
    faq: string
    contact: string
    getStarted: string
  }
  hero: {
    tag: string
    headline1: string
    headlineHighlight: string
    headline2: string
    description: string
    downloadApp: string
    exploreFeatures: string
    badge1: string
    badge2: string
    badge3: string
    mockupGoodMorning: string
    mockupTitle: string
    mockupSearch: string
    mockupNew: string
    mockupMatched: string
    mockupSaved: string
    mockupRecent: string
  }
  trusted: {
    heading: string
    stat1Value: string
    stat1Label: string
    stat1Desc: string
    stat2Value: string
    stat2Label: string
    stat2Desc: string
    stat3Value: string
    stat3Label: string
    stat3Desc: string
    stat4Value: string
    stat4Label: string
    stat4Desc: string
  }
  features: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    f1Title: string
    f1Desc: string
    f2Title: string
    f2Desc: string
    f3Title: string
    f3Desc: string
    f4Title: string
    f4Desc: string
    f5Title: string
    f5Desc: string
    f6Title: string
    f6Desc: string
    f7Title: string
    f7Desc: string
    f8Title: string
    f8Desc: string
  }
  tenderDetail: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    cardHeaderTitle: string
    cardTenderLabel: string
    cardTenderTitle: string
    cardTenderMeta: string
    overviewLabel: string
    overviewText: string
    col1Label: string
    col1Value: string
    col2Label: string
    col2Value: string
    col3Label: string
    col3Value: string
    reqLabel: string
    req1: string
    req2: string
    req3: string
    req4: string
    deadlineLabel: string
    deadlineDays: string
    saveTender: string
    cap1: string
    cap2: string
    cap3: string
    cap4: string
    cap5: string
  }
  howItWorks: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
    cta: string
  }
  screenshots: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    screenOf: string
    viewDetails: string
    s1Title: string
    s1Desc: string
    s1i1: string
    s1i2: string
    s1i3: string
    s2Title: string
    s2Desc: string
    s2i1: string
    s2i2: string
    s2i3: string
    s3Title: string
    s3Desc: string
    s3i1: string
    s3i2: string
    s3i3: string
    s4Title: string
    s4Desc: string
    s4i1: string
    s4i2: string
    s4i3: string
    s5Title: string
    s5Desc: string
    s5i1: string
    s5i2: string
    s5i3: string
  }
  pricing: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    popular: string
    freeName: string
    freeDesc: string
    freeCta: string
    premiumName: string
    premiumDesc: string
    premiumCta: string
    feat1: string
    feat2: string
    feat3: string
    feat4: string
    feat5: string
    feat6: string
    feat7: string
    feat8: string
    feat9: string
    feat10: string
    premFeat1: string
    premFeat2: string
    premFeat3: string
    premFeat4: string
    premFeat5: string
    premFeat6: string
    premFeat7: string
    premFeat8: string
    premFeat9: string
    premFeat10: string
    tableFeature: string
    tableFree: string
    tablePremium: string
    row1: string
    row2: string
    row3: string
    row4: string
    row5: string
    row6: string
    row7: string
    row8: string
    row9: string
    saved5: string
    savedUnlimited: string
    filterBasic: string
    filterAdvanced: string
    notifWeekly: string
    notifInstant: string
    supportCommunity: string
    supportPriority: string
  }
  faq: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    contactLink: string
    q1: string
    a1: string
    q2: string
    a2: string
    q3: string
    a3: string
    q4: string
    a4: string
    q5: string
    a5: string
    q6: string
    a6: string
    q7: string
    a7: string
    q8: string
    a8: string
    q9: string
    a9: string
    q10: string
    a10: string
  }
  contact: {
    tag: string
    heading1: string
    headingHighlight: string
    description: string
    emailLabel: string
    emailEmail: string
    chatLabel: string
    chatSub: string
    nameLabel: string
    namePlaceholder: string
    emailInputLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    send: string
    successTitle: string
    successDesc: string
  }
  download: {
    heading1: string
    headingHighlight: string
    description: string
    googlePlaySub: string
    googlePlayLabel: string
    disclaimer: string
  }
  footer: {
    description: string
    product: string
    company: string
    legal: string
    features: string
    howItWorks: string
    pricing: string
    downloadApp: string
    about: string
    contact: string
    faqLink: string
    support: string
    privacy: string
    terms: string
    rights: string
    madeWith: string
    forMorocco: string
  }
  pages: {
    featuresTag: string
    featuresHeading1: string
    featuresHeadingHighlight: string
    featuresDesc: string
    pricingTag: string
    pricingHeading1: string
    pricingHeadingHighlight: string
    pricingDesc: string
    faqTag: string
    faqHeading1: string
    faqHeadingHighlight: string
    faqDesc: string
  }
}

export const en: Translations = {
  nav: {
    features: 'Features',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    faq: 'FAQ',
    contact: 'Contact',
    getStarted: 'Get Started',
  },
  hero: {
    tag: 'Available on Android',
    headline1: 'Discover Moroccan',
    headlineHighlight: 'Public Tenders',
    headline2: 'Before Everyone Else',
    description:
      'Daily tender discovery, instant notifications, and complete tender details — so your company never misses a public tender opportunity again.',
    downloadApp: 'Download App',
    exploreFeatures: 'Explore Features',
    badge1: 'New tender matched!',
    badge2: 'Updated daily',
    badge3: 'Deadline: 5 days',
    mockupGoodMorning: 'Good morning',
    mockupTitle: 'My Tenders',
    mockupSearch: 'Search tenders...',
    mockupNew: 'New',
    mockupMatched: 'Matched',
    mockupSaved: 'Saved',
    mockupRecent: 'Recent Tenders',
  },
  trusted: {
    heading: 'Built for businesses across Morocco',
    stat1Value: 'Daily',
    stat1Label: 'Automatic Updates',
    stat1Desc: 'New tenders added every morning',
    stat2Value: 'Instant',
    stat2Label: 'Notifications',
    stat2Desc: 'Get alerts before the deadline closes',
    stat3Value: '3',
    stat3Label: 'Languages',
    stat3Desc: 'Arabic, French, and English supported',
    stat4Value: 'Free',
    stat4Label: 'To Download',
    stat4Desc: 'Start discovering tenders at no cost',
  },
  features: {
    tag: 'Everything you need',
    heading1: 'Built for serious',
    headingHighlight: 'tender hunters',
    description: 'Every feature is designed to give you an edge — from discovery to submission.',
    f1Title: 'Smart Search',
    f1Desc: 'Filter by sector, region, budget, and deadline. Find the exact tenders relevant to your business in seconds.',
    f2Title: 'Tender Overview',
    f2Desc: 'Get a structured breakdown of each tender: key requirements, submission conditions, and important dates — all in one place.',
    f3Title: 'Requirements Checklist',
    f3Desc: 'See required documents and qualification conditions at a glance before committing time to respond to a tender.',
    f4Title: 'Deadline Tracking',
    f4Desc: 'Never miss a submission date. Visual timeline tracking with reminders at 7 days, 48 hours, and same day.',
    f5Title: 'Favorites & Lists',
    f5Desc: 'Save interesting tenders to custom lists and share them with your team for collaborative review.',
    f6Title: 'Custom Feed',
    f6Desc: 'Set your preferences once and receive a daily digest of tenders matched to your business sector and region.',
    f7Title: 'Instant Notifications',
    f7Desc: 'Push notifications for new matching tenders, deadline alerts, and status changes — delivered in real time.',
    f8Title: 'Multi-language',
    f8Desc: 'Available in Arabic, French, and English. Browse tenders and receive notifications in your preferred language.',
  },
  tenderDetail: {
    tag: 'In-Depth Details',
    heading1: 'Everything you need to know,',
    headingHighlight: 'in one place',
    description:
      'Each tender includes complete details — requirements, deadlines, budget, and key documents — structured and easy to navigate.',
    cardHeaderTitle: 'Tender Details',
    cardTenderLabel: 'Tender',
    cardTenderTitle: "Supply and installation of IT equipment",
    cardTenderMeta: "Ministry of National Education, Rabat • Budget: 3.2M MAD",
    overviewLabel: 'Overview',
    overviewText:
      'This tender requires supplying and installing 850 computer workstations across 12 school facilities in Rabat. Delivery within 60 days. Technical specifications require i5 12th gen minimum.',
    col1Label: 'Deadline',
    col1Value: 'Urgent',
    col2Label: 'Budget',
    col2Value: 'Large',
    col3Label: 'Competition',
    col3Value: 'High',
    reqLabel: 'Key Requirements',
    req1: 'RC, Patente, CNSS certificates',
    req2: 'Technical reference: 3+ similar contracts',
    req3: 'Financial capacity: 5M MAD minimum',
    req4: 'ISO 9001 certification',
    deadlineLabel: 'Deadline:',
    deadlineDays: '12 days left',
    saveTender: 'Save Tender',
    cap1: 'Full tender content in Arabic & French',
    cap2: 'Key eligibility conditions listed clearly',
    cap3: 'Deadline countdown and important dates',
    cap4: 'Required documents checklist',
    cap5: 'Budget details and financial requirements',
  },
  howItWorks: {
    tag: 'Simple process',
    heading1: 'From signup to',
    headingHighlight: 'winning tenders',
    description: 'Get started in minutes. No learning curve.',
    step1Title: 'Create Your Account',
    step1Desc: 'Sign up in under 2 minutes. Enter your business details, sector, and regions of interest to personalize your experience.',
    step2Title: 'Select Your Interests',
    step2Desc: 'Choose business categories, geographic zones, and budget ranges. The app filters thousands of daily tenders based on your preferences.',
    step3Title: 'Receive Matching Tenders',
    step3Desc: 'Get a curated daily digest of tenders matched to your profile. Each one comes with complete details and key requirements.',
    step4Title: 'Apply Before the Deadline',
    step4Desc: 'Track deadlines with visual alerts. Download tender documents, review requirements, and submit your bid on time, every time.',
    cta: 'Start for free today',
  },
  screenshots: {
    tag: 'App screenshots',
    heading1: 'Beautiful design,',
    headingHighlight: 'powerful features',
    description: 'Explore the app experience crafted for ease and efficiency.',
    screenOf: 'Screen',
    viewDetails: 'View Details',
    s1Title: 'Personalized Dashboard',
    s1Desc: 'Your daily tender feed, curated based on your business profile and past interactions.',
    s1i1: '23 new tenders today',
    s1i2: 'Your matched tenders: 8',
    s1i3: 'Deadline alerts: 3',
    s2Title: 'Smart Search & Filters',
    s2Desc: 'Powerful filters by sector, region, budget range, and deadline. Find exactly what you need.',
    s2i1: 'Filter by 12 sectors',
    s2i2: 'Region & city filter',
    s2i3: 'Budget range slider',
    s3Title: 'Tender Details',
    s3Desc: 'Browse complete tender information — requirements, budget, deadlines, and key documents — all in one organized view.',
    s3i1: 'Full requirements list',
    s3i2: 'Budget details',
    s3i3: 'Key documents needed',
    s4Title: 'Deadline Tracker',
    s4Desc: 'Visual timeline of all your saved tenders with countdown timers and priority alerts.',
    s4i1: 'Visual timeline',
    s4i2: 'Priority sorting',
    s4i3: 'Push notifications',
    s5Title: 'Notifications Center',
    s5Desc: 'Real-time alerts for new tenders, deadline reminders, and status updates.',
    s5i1: 'Real-time push alerts',
    s5i2: 'Daily digest email',
    s5i3: 'Custom alert rules',
  },
  pricing: {
    tag: 'Simple pricing',
    heading1: 'Start free, upgrade',
    headingHighlight: "when you're ready",
    description: 'No hidden fees. Cancel anytime.',
    popular: 'Most Popular',
    freeName: 'Free',
    freeDesc: 'Perfect for exploring and getting started with tender discovery.',
    freeCta: 'Get Started Free',
    premiumName: 'Premium',
    premiumDesc: 'Full power for companies serious about winning more tenders.',
    premiumCta: 'Start Premium',
    feat1: 'Browse public tenders',
    feat2: 'Up to 5 saved tenders',
    feat3: 'Basic search filters',
    feat4: 'Email notifications (weekly)',
    feat5: 'Detailed tender summaries',
    feat6: 'Requirements analysis',
    feat7: 'Instant push notifications',
    feat8: 'Unlimited saved tenders',
    feat9: 'Advanced match scoring',
    feat10: 'Multi-language support',
    premFeat1: 'Browse public tenders',
    premFeat2: 'Unlimited saved tenders',
    premFeat3: 'Advanced search & filters',
    premFeat4: 'Instant push notifications',
    premFeat5: 'Detailed tender summaries',
    premFeat6: 'Requirements analysis',
    premFeat7: 'Competitiveness analysis',
    premFeat8: 'Personalized recommendations',
    premFeat9: 'Multi-language support',
    premFeat10: 'Priority customer support',
    tableFeature: 'Feature',
    tableFree: 'Free',
    tablePremium: 'Premium',
    row1: 'Tender browsing',
    row2: 'Saved tenders',
    row3: 'Search filters',
    row4: 'Notifications',
    row5: 'Tender summaries',
    row6: 'Requirements analysis',
    row7: 'Match scoring',
    row8: 'Multi-language',
    row9: 'Support',
    saved5: '5',
    savedUnlimited: 'Unlimited',
    filterBasic: 'Basic',
    filterAdvanced: 'Advanced',
    notifWeekly: 'Weekly email',
    notifInstant: 'Instant push',
    supportCommunity: 'Community',
    supportPriority: 'Priority',
  },
  faq: {
    tag: 'FAQ',
    heading1: 'Frequently asked',
    headingHighlight: 'questions',
    description: "Everything you need to know about Mlue Tenders. Can't find your answer?",
    contactLink: 'Contact Support →',
    q1: 'What is Mlue Tenders?',
    a1: 'Mlue Tenders is a mobile application that helps companies, SMEs, freelancers, and contractors discover Moroccan public tenders, receive personalized notifications, and track opportunities — so you never miss a business opportunity.',
    q2: 'How does tender discovery work?',
    a2: 'Our platform aggregates public tenders daily from official Moroccan government portals. Each tender is presented with complete details — requirements, budget, deadline, and required documents — structured and easy to navigate.',
    q3: 'What types of tenders are listed?',
    a3: 'We list all public tenders published by Moroccan government agencies — including central government, regional authorities, public enterprises, and municipalities. This covers construction, IT, supplies, consultancy, services, and more.',
    q4: 'How often are tenders updated?',
    a4: 'Our platform aggregates tenders daily from official government portals. New tenders are typically available within hours of publication. Premium users receive instant push notifications as soon as a matching tender is detected.',
    q5: 'Can I use the app in Arabic and French?',
    a5: 'Yes. The app is fully available in Arabic, French, and English. You can switch your preferred language at any time from the app settings.',
    q6: 'What is included in the Free plan?',
    a6: 'The Free plan lets you browse all public tenders, save up to 5 tenders, use basic search filters, and receive weekly email notifications. Detailed summaries and instant notifications are exclusive to the Premium plan.',
    q7: 'How much does Premium cost?',
    a7: 'Premium costs 699 MAD/year (billed annually). It unlocks unlimited saved tenders, detailed tender summaries, requirements analysis, instant push notifications, personalized recommendations, advanced filters, multi-language support, and priority customer support.',
    q8: 'Can I cancel my subscription at any time?',
    a8: 'Yes. You can cancel your Premium subscription at any time directly from the app settings. You will retain access to Premium features until the end of your current billing period.',
    q9: 'Is my business data secure?',
    a9: 'Absolutely. We follow strict data security standards. Your business profile information is encrypted and never shared with third parties. We comply with Moroccan data protection regulations.',
    q10: 'Which platforms is the app available on?',
    a10: 'Mlue Tenders is currently available on Android (Google Play). An iOS version is planned for a future release.',
  },
  contact: {
    tag: 'Get in touch',
    heading1: "We're here to",
    headingHighlight: 'help you grow',
    description:
      'Have a question about Mlue Tenders? Want to explore an enterprise plan or partnership? We\'d love to hear from you.',
    emailLabel: 'Email Support',
    emailEmail: 'support@mluetenders.com',
    chatLabel: 'In-App Support',
    chatSub: 'Reply within 24 hours',
    nameLabel: 'Full Name *',
    namePlaceholder: 'Ahmed Benali',
    emailInputLabel: 'Email Address *',
    emailPlaceholder: 'ahmed@example.com',
    companyLabel: 'Company Name',
    companyPlaceholder: 'Your company (optional)',
    messageLabel: 'Message *',
    messagePlaceholder: 'How can we help you?',
    send: 'Send Message',
    successTitle: 'Message Sent!',
    successDesc: "We'll get back to you within 24 hours.",
  },
  download: {
    heading1: 'Ready to win more',
    headingHighlight: 'tenders?',
    description:
      'Join Moroccan businesses already using Mlue Tenders to discover opportunities and submit winning bids.',
    googlePlaySub: 'Get it on',
    googlePlayLabel: 'Google Play',
    disclaimer: 'Free to download • No credit card required • Android',
  },
  footer: {
    description:
      'The platform for discovering Moroccan public tenders. Personalized notifications and real-time updates — so you never miss a business opportunity.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    features: 'Features',
    howItWorks: 'How It Works',
    pricing: 'Pricing',
    downloadApp: 'Download App',
    about: 'About',
    contact: 'Contact',
    faqLink: 'FAQ',
    support: 'Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'All rights reserved.',
    madeWith: 'Made with',
    forMorocco: 'for Moroccan businesses',
  },
  pages: {
    featuresTag: 'Features',
    featuresHeading1: 'Everything you need to',
    featuresHeadingHighlight: 'win tenders',
    featuresDesc:
      'From discovery to submission — Mlue Tenders gives you every tool your business needs to identify, analyze, and win public tenders in Morocco.',
    pricingTag: 'Pricing',
    pricingHeading1: 'Simple, honest',
    pricingHeadingHighlight: 'pricing',
    pricingDesc: 'Start for free. Upgrade when you need the full power. Cancel any time, no questions asked.',
    faqTag: 'FAQ',
    faqHeading1: 'Frequently asked',
    faqHeadingHighlight: 'questions',
    faqDesc: 'Find quick answers to everything you want to know about Mlue Tenders.',
  },
}

export const fr: Translations = {
  nav: {
    features: 'Fonctionnalités',
    howItWorks: 'Comment ça marche',
    pricing: 'Tarifs',
    faq: 'FAQ',
    contact: 'Contact',
    getStarted: 'Commencer',
  },
  hero: {
    tag: 'Disponible sur Android',
    headline1: 'Découvrez les',
    headlineHighlight: 'appels d\'offres publics',
    headline2: 'marocains avant tout le monde',
    description:
      'Découverte quotidienne des appels d\'offres, notifications instantanées et informations complètes — pour que votre entreprise ne manque plus aucune opportunité.',
    downloadApp: 'Télécharger l\'app',
    exploreFeatures: 'Explorer les fonctionnalités',
    badge1: 'Nouvel appel d\'offres !',
    badge2: 'Mis à jour chaque jour',
    badge3: 'Délai : 5 jours',
    mockupGoodMorning: 'Bonjour',
    mockupTitle: 'Mes appels d\'offres',
    mockupSearch: 'Rechercher...',
    mockupNew: 'Nouveaux',
    mockupMatched: 'Correspondants',
    mockupSaved: 'Sauvegardés',
    mockupRecent: 'Appels d\'offres récents',
  },
  trusted: {
    heading: 'Conçu pour les entreprises marocaines',
    stat1Value: 'Quotidien',
    stat1Label: 'Mises à jour automatiques',
    stat1Desc: 'Nouveaux appels d\'offres ajoutés chaque matin',
    stat2Value: 'Instantané',
    stat2Label: 'Notifications',
    stat2Desc: 'Recevez des alertes avant la clôture des délais',
    stat3Value: '3',
    stat3Label: 'Langues',
    stat3Desc: 'Arabe, français et anglais disponibles',
    stat4Value: 'Gratuit',
    stat4Label: 'À télécharger',
    stat4Desc: 'Commencez à explorer les offres sans frais',
  },
  features: {
    tag: 'Tout ce qu\'il vous faut',
    heading1: 'Conçu pour les',
    headingHighlight: 'chasseurs d\'appels d\'offres',
    description: 'Chaque fonctionnalité est pensée pour vous donner un avantage, de la découverte à la soumission.',
    f1Title: 'Recherche intelligente',
    f1Desc: 'Filtrez par secteur, région, budget et délai. Trouvez les appels d\'offres pertinents pour votre activité en quelques secondes.',
    f2Title: 'Vue d\'ensemble du dossier',
    f2Desc: 'Obtenez une synthèse structurée de chaque appel d\'offres : exigences clés, conditions de soumission et dates importantes — au même endroit.',
    f3Title: 'Liste des prérequis',
    f3Desc: 'Visualisez les documents requis et les conditions d\'éligibilité en un coup d\'œil avant de consacrer du temps à une réponse.',
    f4Title: 'Suivi des délais',
    f4Desc: 'Ne manquez plus aucune date de soumission. Suivi visuel avec rappels à 7 jours, 48 heures et le jour même.',
    f5Title: 'Favoris & Listes',
    f5Desc: 'Sauvegardez les appels d\'offres intéressants dans des listes personnalisées et partagez-les avec votre équipe.',
    f6Title: 'Fil personnalisé',
    f6Desc: 'Définissez vos préférences une fois et recevez une sélection quotidienne d\'appels d\'offres adaptés à votre secteur et région.',
    f7Title: 'Notifications instantanées',
    f7Desc: 'Notifications push pour les nouveaux appels d\'offres, alertes de délais et changements de statut — en temps réel.',
    f8Title: 'Multilingue',
    f8Desc: 'Disponible en arabe, français et anglais. Consultez les appels d\'offres et recevez des notifications dans la langue de votre choix.',
  },
  tenderDetail: {
    tag: 'Informations détaillées',
    heading1: 'Tout ce dont vous avez besoin,',
    headingHighlight: 'au même endroit',
    description:
      'Chaque appel d\'offres inclut des informations complètes — exigences, délais, budget et documents clés — structurées et faciles à consulter.',
    cardHeaderTitle: 'Détails de l\'appel d\'offres',
    cardTenderLabel: 'Appel d\'offres',
    cardTenderTitle: "Fourniture et installation d'équipements informatiques",
    cardTenderMeta: "Ministère de l'Éducation Nationale, Rabat • Budget : 3,2M MAD",
    overviewLabel: 'Vue d\'ensemble',
    overviewText:
      'Ce marché porte sur la fourniture et l\'installation de 850 postes informatiques dans 12 établissements scolaires à Rabat. Livraison sous 60 jours. Spécifications techniques : i5 12e génération minimum.',
    col1Label: 'Délai',
    col1Value: 'Urgent',
    col2Label: 'Budget',
    col2Value: 'Élevé',
    col3Label: 'Concurrence',
    col3Value: 'Forte',
    reqLabel: 'Exigences clés',
    req1: 'RC, Patente, attestations CNSS',
    req2: 'Références techniques : 3+ marchés similaires',
    req3: 'Capacité financière : 5M MAD minimum',
    req4: 'Certification ISO 9001',
    deadlineLabel: 'Délai :',
    deadlineDays: '12 jours restants',
    saveTender: 'Sauvegarder',
    cap1: 'Contenu complet en arabe et en français',
    cap2: 'Conditions d\'éligibilité clairement listées',
    cap3: 'Compte à rebours et dates importantes',
    cap4: 'Liste des documents requis',
    cap5: 'Détails du budget et exigences financières',
  },
  howItWorks: {
    tag: 'Processus simple',
    heading1: 'De l\'inscription à la',
    headingHighlight: 'remportée des marchés',
    description: 'Démarrez en quelques minutes. Aucune courbe d\'apprentissage.',
    step1Title: 'Créez votre compte',
    step1Desc: 'Inscrivez-vous en moins de 2 minutes. Renseignez votre secteur et vos régions d\'intérêt pour personnaliser votre expérience.',
    step2Title: 'Sélectionnez vos intérêts',
    step2Desc: 'Choisissez vos catégories d\'activité, zones géographiques et fourchettes budgétaires. L\'app filtre les milliers d\'offres quotidiennes selon vos préférences.',
    step3Title: 'Recevez les appels d\'offres correspondants',
    step3Desc: 'Obtenez une sélection quotidienne personnalisée. Chaque appel d\'offres est accompagné d\'informations complètes et des exigences clés.',
    step4Title: 'Soumettez avant le délai',
    step4Desc: 'Suivez les délais avec des alertes visuelles. Téléchargez les documents, examinez les exigences et soumettez votre offre à temps, à chaque fois.',
    cta: 'Commencer gratuitement',
  },
  screenshots: {
    tag: 'Captures d\'écran',
    heading1: 'Design élégant,',
    headingHighlight: 'fonctionnalités puissantes',
    description: 'Découvrez l\'expérience applicative conçue pour la simplicité et l\'efficacité.',
    screenOf: 'Écran',
    viewDetails: 'Voir les détails',
    s1Title: 'Tableau de bord personnalisé',
    s1Desc: 'Votre fil quotidien d\'appels d\'offres, sélectionné selon votre profil et vos interactions passées.',
    s1i1: '23 nouveaux appels d\'offres aujourd\'hui',
    s1i2: 'Appels correspondants : 8',
    s1i3: 'Alertes délai : 3',
    s2Title: 'Recherche & Filtres intelligents',
    s2Desc: 'Filtres puissants par secteur, région, budget et délai. Trouvez exactement ce dont vous avez besoin.',
    s2i1: 'Filtres par 12 secteurs',
    s2i2: 'Filtre région & ville',
    s2i3: 'Curseur de fourchette budgétaire',
    s3Title: 'Détails de l\'appel d\'offres',
    s3Desc: 'Consultez les informations complètes — exigences, budget, délais et documents — dans une vue organisée.',
    s3i1: 'Liste complète des exigences',
    s3i2: 'Détails du budget',
    s3i3: 'Documents clés requis',
    s4Title: 'Suivi des délais',
    s4Desc: 'Frise chronologique de vos appels d\'offres sauvegardés avec compte à rebours et alertes prioritaires.',
    s4i1: 'Frise chronologique visuelle',
    s4i2: 'Tri par priorité',
    s4i3: 'Notifications push',
    s5Title: 'Centre de notifications',
    s5Desc: 'Alertes en temps réel pour les nouveaux appels d\'offres, rappels de délais et mises à jour de statut.',
    s5i1: 'Alertes push en temps réel',
    s5i2: 'Digest quotidien par e-mail',
    s5i3: 'Règles d\'alertes personnalisées',
  },
  pricing: {
    tag: 'Tarifs simples',
    heading1: 'Commencez gratuitement,',
    headingHighlight: 'passez à l\'offre supérieure quand vous êtes prêt',
    description: 'Pas de frais cachés. Annulation à tout moment.',
    popular: 'Le plus populaire',
    freeName: 'Gratuit',
    freeDesc: 'Idéal pour explorer et commencer à découvrir les appels d\'offres.',
    freeCta: 'Commencer gratuitement',
    premiumName: 'Premium',
    premiumDesc: 'La solution complète pour les entreprises qui veulent remporter plus de marchés.',
    premiumCta: 'Passer au Premium',
    feat1: 'Consulter les appels d\'offres publics',
    feat2: "Jusqu'à 5 appels d'offres sauvegardés",
    feat3: 'Filtres de recherche de base',
    feat4: 'Notifications par e-mail (hebdomadaire)',
    feat5: 'Synthèses détaillées des appels d\'offres',
    feat6: 'Analyse des prérequis',
    feat7: 'Notifications push instantanées',
    feat8: 'Appels d\'offres sauvegardés illimités',
    feat9: 'Score de correspondance avancé',
    feat10: 'Support multilingue',
    premFeat1: 'Consulter les appels d\'offres publics',
    premFeat2: 'Appels d\'offres sauvegardés illimités',
    premFeat3: 'Recherche & filtres avancés',
    premFeat4: 'Notifications push instantanées',
    premFeat5: 'Synthèses détaillées des appels d\'offres',
    premFeat6: 'Analyse des prérequis',
    premFeat7: 'Analyse de compétitivité',
    premFeat8: 'Recommandations personnalisées',
    premFeat9: 'Support multilingue',
    premFeat10: 'Support client prioritaire',
    tableFeature: 'Fonctionnalité',
    tableFree: 'Gratuit',
    tablePremium: 'Premium',
    row1: 'Consultation des appels d\'offres',
    row2: 'Offres sauvegardées',
    row3: 'Filtres de recherche',
    row4: 'Notifications',
    row5: 'Synthèses des appels d\'offres',
    row6: 'Analyse des prérequis',
    row7: 'Score de correspondance',
    row8: 'Multilingue',
    row9: 'Support',
    saved5: '5',
    savedUnlimited: 'Illimité',
    filterBasic: 'De base',
    filterAdvanced: 'Avancés',
    notifWeekly: 'E-mail hebdomadaire',
    notifInstant: 'Push instantané',
    supportCommunity: 'Communauté',
    supportPriority: 'Prioritaire',
  },
  faq: {
    tag: 'FAQ',
    heading1: 'Questions',
    headingHighlight: 'fréquemment posées',
    description: 'Tout ce que vous devez savoir sur Mlue Tenders. Vous ne trouvez pas votre réponse ?',
    contactLink: 'Contacter le support →',
    q1: 'Qu\'est-ce que Mlue Tenders ?',
    a1: 'Mlue Tenders est une application mobile qui aide les entreprises, PME, freelances et prestataires à découvrir les appels d\'offres publics marocains, à recevoir des notifications personnalisées et à suivre les opportunités — pour ne jamais rater une chance commerciale.',
    q2: 'Comment fonctionne la découverte des appels d\'offres ?',
    a2: 'Notre plateforme agrège quotidiennement les appels d\'offres publics depuis les portails officiels marocains. Chaque appel d\'offres est présenté avec des informations complètes — exigences, budget, délai et documents requis — structurées et faciles à consulter.',
    q3: 'Quels types d\'appels d\'offres sont répertoriés ?',
    a3: 'Nous répertorions tous les appels d\'offres publics publiés par les administrations marocaines — y compris l\'État central, les collectivités territoriales, les entreprises publiques et les municipalités. Cela couvre la construction, l\'informatique, les fournitures, le conseil, les services, et plus encore.',
    q4: 'À quelle fréquence les appels d\'offres sont-ils mis à jour ?',
    a4: 'Notre plateforme agrège les appels d\'offres quotidiennement depuis les portails officiels. Les nouvelles offres sont généralement disponibles dans les heures suivant leur publication. Les utilisateurs Premium reçoivent des notifications push instantanées dès la détection d\'une offre correspondante.',
    q5: "L'application est-elle disponible en arabe et en français ?",
    a5: "Oui. L'application est entièrement disponible en arabe, en français et en anglais. Vous pouvez changer de langue à tout moment depuis les paramètres.",
    q6: "Qu'inclut l'offre gratuite ?",
    a6: "L'offre gratuite vous permet de consulter tous les appels d\'offres publics, d\'en sauvegarder jusqu\'à 5, d\'utiliser les filtres de base et de recevoir des notifications hebdomadaires par e-mail. Les synthèses détaillées et les notifications instantanées sont réservées au plan Premium.",
    q7: 'Quel est le prix du Premium ?',
    a7: "Le Premium coûte 699 MAD/an (facturation annuelle). Il donne accès aux appels d\'offres sauvegardés illimités, aux synthèses détaillées, à l\'analyse des prérequis, aux notifications push instantanées, aux recommandations personnalisées, aux filtres avancés, au support multilingue et au support client prioritaire.",
    q8: "Puis-je annuler mon abonnement à tout moment ?",
    a8: "Oui. Vous pouvez annuler votre abonnement Premium à tout moment depuis les paramètres de l\'application. Vous conserverez l\'accès aux fonctionnalités Premium jusqu\'à la fin de votre période de facturation en cours.",
    q9: "Mes données professionnelles sont-elles sécurisées ?",
    a9: "Absolument. Nous appliquons des normes strictes de sécurité des données. Les informations de votre profil professionnel sont chiffrées et ne sont jamais partagées avec des tiers. Nous respectons la réglementation marocaine sur la protection des données.",
    q10: "Sur quelles plateformes l'application est-elle disponible ?",
    a10: "Mlue Tenders est actuellement disponible sur Android (Google Play). Une version iOS est prévue pour une prochaine mise à jour.",
  },
  contact: {
    tag: 'Nous contacter',
    heading1: 'Nous sommes là pour',
    headingHighlight: 'vous aider à grandir',
    description:
      "Une question sur Mlue Tenders ? Vous souhaitez explorer un plan entreprise ou un partenariat ? Nous serions ravis de vous entendre.",
    emailLabel: 'Support par e-mail',
    emailEmail: 'support@mluetenders.com',
    chatLabel: 'Support in-app',
    chatSub: 'Réponse sous 24 heures',
    nameLabel: 'Nom complet *',
    namePlaceholder: 'Ahmed Benali',
    emailInputLabel: 'Adresse e-mail *',
    emailPlaceholder: 'ahmed@exemple.com',
    companyLabel: 'Nom de l\'entreprise',
    companyPlaceholder: 'Votre entreprise (facultatif)',
    messageLabel: 'Message *',
    messagePlaceholder: 'Comment pouvons-nous vous aider ?',
    send: 'Envoyer le message',
    successTitle: 'Message envoyé !',
    successDesc: 'Nous vous répondrons dans les 24 heures.',
  },
  download: {
    heading1: 'Prêt à remporter plus',
    headingHighlight: "d'appels d'offres ?",
    description:
      "Rejoignez les entreprises marocaines qui utilisent déjà Mlue Tenders pour découvrir des opportunités et soumettre des offres gagnantes.",
    googlePlaySub: 'Disponible sur',
    googlePlayLabel: 'Google Play',
    disclaimer: 'Téléchargement gratuit • Sans carte bancaire • Android',
  },
  footer: {
    description:
      "La plateforme de découverte des appels d'offres publics marocains. Notifications personnalisées et mises à jour en temps réel — pour ne jamais rater une opportunité.",
    product: 'Produit',
    company: 'Entreprise',
    legal: 'Légal',
    features: 'Fonctionnalités',
    howItWorks: 'Comment ça marche',
    pricing: 'Tarifs',
    downloadApp: 'Télécharger l\'app',
    about: 'À propos',
    contact: 'Contact',
    faqLink: 'FAQ',
    support: 'Support',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    rights: 'Tous droits réservés.',
    madeWith: 'Fait avec',
    forMorocco: 'pour les entreprises marocaines',
  },
  pages: {
    featuresTag: 'Fonctionnalités',
    featuresHeading1: 'Tout ce qu\'il vous faut pour',
    featuresHeadingHighlight: 'remporter des marchés',
    featuresDesc:
      "De la découverte à la soumission — Mlue Tenders vous donne tous les outils nécessaires pour identifier, analyser et remporter les appels d'offres publics au Maroc.",
    pricingTag: 'Tarifs',
    pricingHeading1: 'Des tarifs simples et',
    pricingHeadingHighlight: 'transparents',
    pricingDesc: "Commencez gratuitement. Passez au supérieur quand vous en avez besoin. Annulation à tout moment, sans questions.",
    faqTag: 'FAQ',
    faqHeading1: 'Questions',
    faqHeadingHighlight: 'fréquentes',
    faqDesc: "Trouvez rapidement des réponses à toutes vos questions sur Mlue Tenders.",
  },
}

export const ar: Translations = {
  nav: {
    features: 'الميزات',
    howItWorks: 'كيف يعمل',
    pricing: 'الأسعار',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    getStarted: 'ابدأ الآن',
  },
  hero: {
    tag: 'متاح على أندرويد',
    headline1: 'اكتشف',
    headlineHighlight: 'المناقصات العمومية',
    headline2: 'المغربية قبل الجميع',
    description:
      'اكتشاف يومي للمناقصات، إشعارات فورية، ومعلومات مفصّلة — حتى لا تفوّت شركتك أي فرصة تجارية.',
    downloadApp: 'تحميل التطبيق',
    exploreFeatures: 'استكشف الميزات',
    badge1: 'مناقصة جديدة مطابقة!',
    badge2: 'يُحدَّث يومياً',
    badge3: 'الموعد النهائي: 5 أيام',
    mockupGoodMorning: 'صباح الخير',
    mockupTitle: 'مناقصاتي',
    mockupSearch: 'البحث في المناقصات...',
    mockupNew: 'جديد',
    mockupMatched: 'مطابق',
    mockupSaved: 'محفوظ',
    mockupRecent: 'المناقصات الأخيرة',
  },
  trusted: {
    heading: 'مبني للشركات في جميع أنحاء المغرب',
    stat1Value: 'يومي',
    stat1Label: 'تحديثات تلقائية',
    stat1Desc: 'مناقصات جديدة تُضاف كل صباح',
    stat2Value: 'فوري',
    stat2Label: 'الإشعارات',
    stat2Desc: 'احصل على تنبيهات قبل إغلاق المواعيد',
    stat3Value: '3',
    stat3Label: 'لغات',
    stat3Desc: 'العربية والفرنسية والإنجليزية',
    stat4Value: 'مجاني',
    stat4Label: 'للتحميل',
    stat4Desc: 'ابدأ اكتشاف المناقصات بدون تكلفة',
  },
  features: {
    tag: 'كل ما تحتاجه',
    heading1: 'مصمّم لـ',
    headingHighlight: 'المحترفين الجادّين',
    description: 'كل ميزة مصمّمة لمنحك ميزة تنافسية — من الاكتشاف إلى تقديم العروض.',
    f1Title: 'البحث الذكي',
    f1Desc: 'فلترة حسب القطاع والمنطقة والميزانية والموعد النهائي. اعثر على المناقصات المناسبة لعملك في ثوانٍ.',
    f2Title: 'نظرة عامة على المناقصة',
    f2Desc: 'احصل على ملخص منظّم لكل مناقصة: المتطلبات الأساسية، شروط التقديم، والتواريخ المهمة — في مكان واحد.',
    f3Title: 'قائمة المستلزمات',
    f3Desc: 'اطّلع على الوثائق المطلوبة وشروط الأهلية بنظرة واحدة قبل تخصيص وقتك للرد على مناقصة.',
    f4Title: 'تتبّع المواعيد',
    f4Desc: 'لا تفوّت أي موعد تقديم. تتبّع بصري مع تذكيرات قبل 7 أيام و48 ساعة ويوم التقديم.',
    f5Title: 'المفضلة والقوائم',
    f5Desc: 'احفظ المناقصات المثيرة للاهتمام في قوائم مخصصة وشاركها مع فريقك للمراجعة المشتركة.',
    f6Title: 'خلاصة مخصصة',
    f6Desc: 'حدّد تفضيلاتك مرة واحدة واحصل على ملخص يومي للمناقصات المطابقة لقطاعك ومنطقتك.',
    f7Title: 'إشعارات فورية',
    f7Desc: 'إشعارات push للمناقصات الجديدة المطابقة، وتنبيهات المواعيد، والتغييرات في الحالة — في الوقت الفعلي.',
    f8Title: 'متعدد اللغات',
    f8Desc: 'متاح بالعربية والفرنسية والإنجليزية. تصفّح المناقصات واستقبل الإشعارات بلغتك المفضلة.',
  },
  tenderDetail: {
    tag: 'تفاصيل شاملة',
    heading1: 'كل ما تحتاج معرفته،',
    headingHighlight: 'في مكان واحد',
    description:
      'تتضمن كل مناقصة معلومات كاملة — المتطلبات والمواعيد والميزانية والوثائق الأساسية — منظّمة وسهلة التصفح.',
    cardHeaderTitle: 'تفاصيل المناقصة',
    cardTenderLabel: 'المناقصة',
    cardTenderTitle: "توريد وتركيب معدات المعلوميات",
    cardTenderMeta: "وزارة التربية الوطنية، الرباط • الميزانية: 3.2 مليون درهم",
    overviewLabel: 'نظرة عامة',
    overviewText:
      'تتعلق هذه المناقصة بتوريد وتركيب 850 محطة عمل حاسوبية في 12 مؤسسة تعليمية بالرباط. التسليم خلال 60 يوماً. المواصفات التقنية: معالج i5 الجيل الثاني عشر كحد أدنى.',
    col1Label: 'الموعد',
    col1Value: 'عاجل',
    col2Label: 'الميزانية',
    col2Value: 'كبيرة',
    col3Label: 'المنافسة',
    col3Value: 'مرتفعة',
    reqLabel: 'المتطلبات الأساسية',
    req1: 'السجل التجاري، الباتنتا، شهادة CNSS',
    req2: 'المراجع التقنية: 3 عقود مماثلة أو أكثر',
    req3: 'القدرة المالية: 5 ملايين درهم كحد أدنى',
    req4: 'شهادة ISO 9001',
    deadlineLabel: 'الموعد النهائي:',
    deadlineDays: '12 يوماً متبقياً',
    saveTender: 'حفظ المناقصة',
    cap1: 'محتوى المناقصة الكامل بالعربية والفرنسية',
    cap2: 'شروط الأهلية مدرجة بوضوح',
    cap3: 'عدّ تنازلي للموعد النهائي والتواريخ المهمة',
    cap4: 'قائمة الوثائق المطلوبة',
    cap5: 'تفاصيل الميزانية والمتطلبات المالية',
  },
  howItWorks: {
    tag: 'عملية بسيطة',
    heading1: 'من التسجيل إلى',
    headingHighlight: 'الفوز بالمناقصات',
    description: 'ابدأ في دقائق. لا منحنى تعلّم.',
    step1Title: 'أنشئ حسابك',
    step1Desc: 'سجّل في أقل من دقيقتين. أدخل تفاصيل نشاطك وقطاعك ومناطق اهتمامك لتخصيص تجربتك.',
    step2Title: 'اختر اهتماماتك',
    step2Desc: 'اختر فئات الأعمال والمناطق الجغرافية ونطاقات الميزانية. يفلتر التطبيق آلاف المناقصات اليومية وفق تفضيلاتك.',
    step3Title: 'استقبل المناقصات المطابقة',
    step3Desc: 'احصل على ملخص يومي منتقى من المناقصات المطابقة لملفك. لكل مناقصة معلومات كاملة ومتطلبات أساسية.',
    step4Title: 'تقدّم قبل الموعد النهائي',
    step4Desc: 'تابع المواعيد بتنبيهات بصرية. حمّل وثائق المناقصة، راجع المتطلبات، وقدّم عرضك في الوقت المناسب في كل مرة.',
    cta: 'ابدأ مجاناً اليوم',
  },
  screenshots: {
    tag: 'لقطات التطبيق',
    heading1: 'تصميم أنيق،',
    headingHighlight: 'ميزات قوية',
    description: 'استكشف تجربة التطبيق المصمّمة للسهولة والكفاءة.',
    screenOf: 'شاشة',
    viewDetails: 'عرض التفاصيل',
    s1Title: 'لوحة التحكم الشخصية',
    s1Desc: 'خلاصتك اليومية من المناقصات، منتقاة بناءً على ملفك المهني وتفاعلاتك السابقة.',
    s1i1: '23 مناقصة جديدة اليوم',
    s1i2: 'المناقصات المطابقة: 8',
    s1i3: 'تنبيهات المواعيد: 3',
    s2Title: 'البحث والفلاتر الذكية',
    s2Desc: 'فلاتر قوية حسب القطاع والمنطقة والميزانية والموعد. اعثر على ما تحتاجه بالضبط.',
    s2i1: 'فلترة حسب 12 قطاعاً',
    s2i2: 'فلتر المنطقة والمدينة',
    s2i3: 'شريط نطاق الميزانية',
    s3Title: 'تفاصيل المناقصة',
    s3Desc: 'تصفّح المعلومات الكاملة — المتطلبات والميزانية والمواعيد والوثائق — في عرض منظّم.',
    s3i1: 'قائمة المتطلبات الكاملة',
    s3i2: 'تفاصيل الميزانية',
    s3i3: 'الوثائق الأساسية المطلوبة',
    s4Title: 'متتبّع المواعيد',
    s4Desc: 'جدول زمني مرئي لجميع مناقصاتك المحفوظة مع عدّادات تنازلية وتنبيهات أولويات.',
    s4i1: 'جدول زمني مرئي',
    s4i2: 'ترتيب حسب الأولوية',
    s4i3: 'إشعارات push',
    s5Title: 'مركز الإشعارات',
    s5Desc: 'تنبيهات فورية للمناقصات الجديدة، تذكيرات المواعيد، وتحديثات الحالة.',
    s5i1: 'تنبيهات push فورية',
    s5i2: 'ملخص يومي بالبريد الإلكتروني',
    s5i3: 'قواعد تنبيه مخصصة',
  },
  pricing: {
    tag: 'أسعار بسيطة',
    heading1: 'ابدأ مجاناً،',
    headingHighlight: 'طوّر عندما تكون جاهزاً',
    description: 'بدون رسوم خفية. إلغاء في أي وقت.',
    popular: 'الأكثر شعبية',
    freeName: 'مجاني',
    freeDesc: 'مثالي للاستكشاف والبدء في اكتشاف المناقصات.',
    freeCta: 'ابدأ مجاناً',
    premiumName: 'بريميوم',
    premiumDesc: 'القوة الكاملة للشركات الجادّة في الفوز بالمزيد من المناقصات.',
    premiumCta: 'الاشتراك في بريميوم',
    feat1: 'تصفّح المناقصات العمومية',
    feat2: 'ما يصل إلى 5 مناقصات محفوظة',
    feat3: 'فلاتر بحث أساسية',
    feat4: 'إشعارات بريد إلكتروني (أسبوعياً)',
    feat5: 'ملخصات مفصّلة للمناقصات',
    feat6: 'تحليل المتطلبات',
    feat7: 'إشعارات push فورية',
    feat8: 'مناقصات محفوظة غير محدودة',
    feat9: 'تصنيف تطابق متقدم',
    feat10: 'دعم متعدد اللغات',
    premFeat1: 'تصفّح المناقصات العمومية',
    premFeat2: 'مناقصات محفوظة غير محدودة',
    premFeat3: 'بحث وفلاتر متقدمة',
    premFeat4: 'إشعارات push فورية',
    premFeat5: 'ملخصات مفصّلة للمناقصات',
    premFeat6: 'تحليل المتطلبات',
    premFeat7: 'تحليل القدرة التنافسية',
    premFeat8: 'توصيات مخصصة',
    premFeat9: 'دعم متعدد اللغات',
    premFeat10: 'دعم عملاء ذو أولوية',
    tableFeature: 'الميزة',
    tableFree: 'مجاني',
    tablePremium: 'بريميوم',
    row1: 'تصفّح المناقصات',
    row2: 'المناقصات المحفوظة',
    row3: 'فلاتر البحث',
    row4: 'الإشعارات',
    row5: 'ملخصات المناقصات',
    row6: 'تحليل المتطلبات',
    row7: 'تصنيف التطابق',
    row8: 'متعدد اللغات',
    row9: 'الدعم',
    saved5: '5',
    savedUnlimited: 'غير محدود',
    filterBasic: 'أساسي',
    filterAdvanced: 'متقدم',
    notifWeekly: 'بريد أسبوعي',
    notifInstant: 'push فوري',
    supportCommunity: 'المجتمع',
    supportPriority: 'ذو أولوية',
  },
  faq: {
    tag: 'الأسئلة الشائعة',
    heading1: 'الأسئلة',
    headingHighlight: 'الأكثر شيوعاً',
    description: 'كل ما تحتاج معرفته عن Mlue Tenders. لم تجد إجابتك؟',
    contactLink: 'تواصل مع الدعم ←',
    q1: 'ما هو تطبيق Mlue Tenders؟',
    a1: 'Mlue Tenders تطبيق جوال يساعد الشركات والمقاولات الصغيرة والمستقلين والمقاولين على اكتشاف المناقصات العمومية المغربية، واستقبال الإشعارات الشخصية، ومتابعة الفرص — حتى لا تفوّت أي فرصة تجارية.',
    q2: 'كيف يعمل اكتشاف المناقصات؟',
    a2: 'تجمع منصتنا المناقصات العمومية يومياً من البوابات الحكومية الرسمية المغربية. تُعرض كل مناقصة بمعلومات كاملة — المتطلبات والميزانية والموعد النهائي والوثائق المطلوبة — منظّمة وسهلة التصفح.',
    q3: 'ما أنواع المناقصات المُدرجة؟',
    a3: 'ندرج جميع المناقصات العمومية الصادرة عن الإدارات الحكومية المغربية — بما فيها الحكومة المركزية والسلطات الجهوية والمؤسسات العامة والبلديات. يشمل ذلك البناء والمعلوميات والتوريدات والاستشارات والخدمات وأكثر.',
    q4: 'كم مرة يتم تحديث المناقصات؟',
    a4: 'تجمع منصتنا المناقصات يومياً من البوابات الرسمية. تصبح الإعلانات الجديدة متاحة عادةً في غضون ساعات من نشرها. يتلقى مستخدمو بريميوم إشعارات push فورية بمجرد رصد مناقصة مطابقة.',
    q5: 'هل يمكنني استخدام التطبيق بالعربية والفرنسية؟',
    a5: 'نعم. التطبيق متاح بالكامل بالعربية والفرنسية والإنجليزية. يمكنك تغيير لغتك المفضلة في أي وقت من إعدادات التطبيق.',
    q6: 'ما الذي يتضمنه الاشتراك المجاني؟',
    a6: 'يتيح لك الاشتراك المجاني تصفّح جميع المناقصات العمومية، حفظ ما يصل إلى 5 مناقصات، استخدام الفلاتر الأساسية، واستقبال إشعارات بريد إلكتروني أسبوعية. الملخصات المفصّلة والإشعارات الفورية حصرية للاشتراك المدفوع.',
    q7: 'كم يكلف بريميوم؟',
    a7: 'يكلف بريميوم 699 درهم/سنة (يُفوتر سنوياً). يُلغي القيود على المناقصات المحفوظة، ويوفر ملخصات مفصّلة، وتحليلاً للمتطلبات، وإشعارات push فورية، وتوصيات مخصصة، وفلاتر متقدمة، ودعماً متعدد اللغات، ودعم عملاء ذا أولوية.',
    q8: 'هل يمكنني إلغاء اشتراكي في أي وقت؟',
    a8: 'نعم. يمكنك إلغاء اشتراك بريميوم في أي وقت مباشرةً من إعدادات التطبيق. ستحتفظ بالوصول إلى ميزات بريميوم حتى نهاية فترة الفوترة الحالية.',
    q9: 'هل بياناتي المهنية آمنة؟',
    a9: 'بالتأكيد. نتّبع معايير أمان صارمة للبيانات. معلومات ملفك المهني مشفّرة ولا تُشارَك مع أطراف ثالثة. نلتزم بالتشريعات المغربية لحماية البيانات.',
    q10: 'على أي منصات يتوفر التطبيق؟',
    a10: 'يتوفر Mlue Tenders حالياً على أندرويد (Google Play). إصدار iOS مخطط له في تحديث مستقبلي.',
  },
  contact: {
    tag: 'تواصل معنا',
    heading1: 'نحن هنا',
    headingHighlight: 'لمساعدتك على النمو',
    description:
      'هل لديك سؤال حول Mlue Tenders؟ تريد الاستفسار عن خطة مؤسسية أو شراكة؟ يسعدنا الاستماع إليك.',
    emailLabel: 'الدعم عبر البريد',
    emailEmail: 'support@mluetenders.com',
    chatLabel: 'الدعم داخل التطبيق',
    chatSub: 'رد خلال 24 ساعة',
    nameLabel: 'الاسم الكامل *',
    namePlaceholder: 'أحمد بنعلي',
    emailInputLabel: 'البريد الإلكتروني *',
    emailPlaceholder: 'ahmed@example.com',
    companyLabel: 'اسم الشركة',
    companyPlaceholder: 'شركتك (اختياري)',
    messageLabel: 'الرسالة *',
    messagePlaceholder: 'كيف يمكننا مساعدتك؟',
    send: 'إرسال الرسالة',
    successTitle: 'تم الإرسال!',
    successDesc: 'سنتواصل معك خلال 24 ساعة.',
  },
  download: {
    heading1: 'هل أنت مستعد لـ',
    headingHighlight: 'الفوز بمزيد من المناقصات؟',
    description:
      'انضم إلى الشركات المغربية التي تستخدم Mlue Tenders لاكتشاف الفرص وتقديم عروض رابحة.',
    googlePlaySub: 'احصل عليه من',
    googlePlayLabel: 'Google Play',
    disclaimer: 'تحميل مجاني • بدون بطاقة بنكية • أندرويد',
  },
  footer: {
    description:
      'منصة اكتشاف المناقصات العمومية المغربية. إشعارات مخصصة وتحديثات فورية — حتى لا تفوّت أي فرصة تجارية.',
    product: 'المنتج',
    company: 'الشركة',
    legal: 'القانوني',
    features: 'الميزات',
    howItWorks: 'كيف يعمل',
    pricing: 'الأسعار',
    downloadApp: 'تحميل التطبيق',
    about: 'من نحن',
    contact: 'اتصل بنا',
    faqLink: 'الأسئلة الشائعة',
    support: 'الدعم',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    rights: 'جميع الحقوق محفوظة.',
    madeWith: 'صُنع بـ',
    forMorocco: 'للشركات المغربية',
  },
  pages: {
    featuresTag: 'الميزات',
    featuresHeading1: 'كل ما تحتاجه',
    featuresHeadingHighlight: 'للفوز بالمناقصات',
    featuresDesc:
      'من الاكتشاف إلى التقديم — يمنحك Mlue Tenders كل الأدوات التي تحتاجها لتحديد وتحليل والفوز بالمناقصات العمومية في المغرب.',
    pricingTag: 'الأسعار',
    pricingHeading1: 'أسعار بسيطة',
    pricingHeadingHighlight: 'وشفافة',
    pricingDesc: 'ابدأ مجاناً. طوّر عندما تحتاج القوة الكاملة. إلغاء في أي وقت بدون أسئلة.',
    faqTag: 'الأسئلة الشائعة',
    faqHeading1: 'الأسئلة',
    faqHeadingHighlight: 'الأكثر شيوعاً',
    faqDesc: 'اعثر على إجابات سريعة لكل ما تريد معرفته عن Mlue Tenders.',
  },
}

export const translations: Record<Locale, Translations> = { en, fr, ar }
