import type { Locale } from './translations'

export type LegalSection = {
  title: string
  paragraphs: string[]
  items?: string[]
  afterItems?: string
}

export type LegalDoc = {
  badge: string
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
  crossLink: { label: string; href: string }
}

export type LegalDocs = {
  privacy: LegalDoc
  terms: LegalDoc
}

export const legalTranslations: Record<Locale, LegalDocs> = {
  en: {
    privacy: {
      badge: 'Legal',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: June 28, 2026',
      intro:
        'At Mlue Tenders, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, and what rights you have — whether you use our Android application or our website.',
      sections: [
        {
          title: '1. Who We Are',
          paragraphs: [
            'Mlue Tenders is a Moroccan digital platform that aggregates public tender announcements from official government portals and delivers them to users via a mobile application (currently Android only) and a website at www.mluetenders.com.',
            'You can reach us at any time at contact@mluetenders.com.',
          ],
        },
        {
          title: '2. Information We Collect',
          paragraphs: ['We collect the following categories of information:'],
          items: [
            'Account information: your name, email address, company name, and business sector provided when you register.',
            'Usage data: tenders you view, save, or mark as favorites; search queries; notification preferences; and feature interactions within the app.',
            'Device information: device model, operating system version, and app version, collected automatically via Firebase Analytics and Crashlytics.',
            'Website analytics: page views, session duration, and navigation patterns on www.mluetenders.com, collected via Google Analytics.',
            'Push notification tokens: Firebase Cloud Messaging (FCM) tokens used to deliver real-time tender alerts to Premium subscribers.',
          ],
        },
        {
          title: '3. How We Use Your Information',
          paragraphs: ['We use your information to:'],
          items: [
            'Create and manage your account.',
            'Personalize tender recommendations based on your professional profile and in-app activity.',
            'Send push notifications about matching tenders (Premium plan subscribers only).',
            'Analyze and improve app performance and stability using Firebase Crashlytics and Analytics.',
            'Measure and improve website traffic and user experience using Google Analytics.',
            'Respond to your support and service requests.',
            'Enforce our Terms of Service and comply with applicable legal obligations.',
          ],
        },
        {
          title: '4. Legal Basis for Processing',
          paragraphs: ['We process your personal data on the following legal bases:'],
          items: [
            'Contract performance: processing necessary to provide the service you signed up for.',
            'Legitimate interests: improving our platform, preventing abuse, and ensuring security.',
            'Consent: for marketing communications and non-essential analytics. You may withdraw your consent at any time by contacting us.',
          ],
        },
        {
          title: '5. Third-Party Services',
          paragraphs: [
            'We use the following third-party services that may process your personal data on our behalf:',
          ],
          items: [
            "Firebase (Google LLC) — Authentication, Cloud Messaging (push notifications), Crashlytics (crash reporting), and Analytics. Processed under Google's Privacy Policy.",
            'Google Analytics — website traffic analysis using anonymized and aggregated data.',
            "Google Play Store — distribution of our Android application, subject to Google's terms and privacy policy.",
          ],
          afterItems: 'We do not sell, trade, or rent your personal data to any third party.',
        },
        {
          title: '6. Push Notifications',
          paragraphs: [
            "Premium subscribers receive real-time push notifications when a new tender matching their profile is detected. You can enable or disable notifications at any time through your device's notification settings or from within the Mlue Tenders app.",
          ],
        },
        {
          title: '7. Data Security',
          paragraphs: [
            'We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and secure cloud infrastructure provided by Firebase. However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.',
          ],
        },
        {
          title: '8. Data Retention',
          paragraphs: [
            'We retain your account data for as long as your account remains active or as needed to provide our services. If you delete your account, we will permanently remove your personal data within 30 days, except where retention is required by law or for legitimate business purposes such as maintaining financial records related to Premium subscriptions.',
          ],
        },
        {
          title: '9. Your Rights',
          paragraphs: [
            'Under applicable law, you have the following rights regarding your personal data:',
          ],
          items: [
            'Right of access: request a copy of the personal data we hold about you.',
            'Right to rectification: correct any inaccurate or incomplete information.',
            'Right to erasure: request the deletion of your personal data.',
            'Right to data portability: receive your data in a structured, commonly used, machine-readable format.',
            'Right to object: object to the processing of your data based on legitimate interests.',
            'Right to withdraw consent: withdraw any consent given, without affecting the lawfulness of prior processing.',
          ],
          afterItems:
            'To exercise any of these rights, contact us at contact@mluetenders.com. We will respond within 30 days.',
        },
        {
          title: '10. Cookies and Analytics',
          paragraphs: ['Our website uses cookies and similar technologies to:'],
          items: [
            'Remember your language and theme preferences across visits.',
            'Measure and analyze website traffic via Google Analytics.',
          ],
          afterItems:
            'You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.',
        },
        {
          title: "11. Children's Privacy",
          paragraphs: [
            'Mlue Tenders is intended for business professionals and is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that a user under 18 has provided us with personal data, we will delete it promptly.',
          ],
        },
        {
          title: '12. Changes to This Policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of material changes via in-app notification or email. The "Last updated" date at the top of this page indicates when the policy was last revised. Continued use of our services after the effective date constitutes your acceptance of the updated policy.',
          ],
        },
        {
          title: '13. Contact Us',
          paragraphs: [
            'For any questions, requests, or complaints regarding this Privacy Policy, please contact us:',
            'Email: contact@mluetenders.com',
            'We aim to respond within 30 days of receiving your request.',
          ],
        },
      ],
      crossLink: { label: 'Also read our Terms of Service', href: '/terms-of-service' },
    },
    terms: {
      badge: 'Legal',
      title: 'Terms of Service',
      lastUpdated: 'Last updated: June 28, 2026',
      intro:
        'Please read these Terms of Service carefully before using Mlue Tenders. By accessing or using our Android application or website, you agree to be bound by these terms. If you do not agree, please do not use our services.',
      sections: [
        {
          title: '1. Who We Are',
          paragraphs: [
            'Mlue Tenders is a Moroccan digital platform that aggregates public tender announcements from official government portals and makes them available to registered users through a mobile application (currently Android only) and a website at www.mluetenders.com.',
          ],
        },
        {
          title: '2. Eligibility',
          paragraphs: [
            'You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use Mlue Tenders. By creating an account, you represent and warrant that you meet these requirements.',
          ],
        },
        {
          title: '3. User Accounts',
          paragraphs: [
            'To access most features of Mlue Tenders, you must create an account. You are responsible for:',
          ],
          items: [
            'Providing accurate, current, and complete information during registration and keeping it up to date.',
            'Maintaining the confidentiality of your login credentials.',
            'All activities that occur under your account.',
          ],
          afterItems:
            'If you suspect unauthorized access to your account, notify us immediately at contact@mluetenders.com.',
        },
        {
          title: '4. Free and Premium Plans',
          paragraphs: ['Mlue Tenders offers two subscription tiers:'],
          items: [
            'Free Plan: access to a limited number of tenders per day, save up to 5 tenders, basic search filters, and no push notifications.',
            'Premium Plan: unlimited tender access, unlimited saved tenders, advanced filters, and real-time push notifications when matching tenders are detected.',
          ],
          afterItems:
            'Features and limits are subject to change. We will provide reasonable notice of any material changes.',
        },
        {
          title: '5. Subscription and Payment',
          paragraphs: [
            'The Premium plan is priced at 699 MAD per year (Moroccan Dirhams). Payment is made exclusively by bank transfer to the official Mlue Tenders bank account displayed within the application.',
            'To activate your Premium subscription, follow these steps:',
          ],
          items: [
            'Transfer the subscription amount to the official bank account shown in the app.',
            'Upload or send a copy of your payment receipt through the application.',
            'Wait for the Mlue Tenders team to manually verify your payment.',
            'Receive confirmation and Premium access once your payment has been verified.',
          ],
          afterItems:
            'Premium features are activated only after your payment has been successfully verified. Activation may take some time while our team reviews your receipt. Subscriptions do not renew automatically — if you wish to continue using Premium after your subscription expires, you must submit a new payment. We appreciate your patience.',
        },
        {
          title: '6. Refund Policy',
          paragraphs: [
            'All payments for Premium subscriptions are made by manual bank transfer and are reviewed individually by the Mlue Tenders team.',
            'Refund requests are generally not granted once Premium access has been activated and the service has been delivered. Exceptions may be considered in the following circumstances:',
          ],
          items: [
            'You were charged an incorrect amount due to an error on our part.',
            'A technical issue on our end prevented you from accessing the Premium service after your payment was verified.',
            'You submitted a duplicate payment or made an accidental overpayment.',
          ],
          afterItems:
            'To submit a refund request, contact us at contact@mluetenders.com with your payment receipt and a description of the issue. Each request will be reviewed on a case-by-case basis. Where a refund is approved, it will be issued by bank transfer to the account used for the original payment. We do not make guarantees regarding refund outcomes beyond what is required by applicable law.',
        },
        {
          title: '7. Acceptable Use',
          paragraphs: ['You agree not to:'],
          items: [
            'Use the service for any unlawful purpose or in violation of applicable Moroccan law.',
            'Attempt to gain unauthorized access to any part of the service, its systems, or databases.',
            'Scrape, copy, redistribute, or commercialize tender data obtained through the platform without our written authorization.',
            'Use automated tools, bots, or scripts to access the service at a rate exceeding normal human usage.',
            'Impersonate any person or entity, or misrepresent your identity or affiliation.',
            "Interfere with or disrupt the integrity or performance of the service or other users' experience.",
          ],
        },
        {
          title: '8. Intellectual Property',
          paragraphs: [
            "All software, design, text, graphics, and features of Mlue Tenders are the exclusive property of Mlue Tenders and are protected by applicable intellectual property laws. Tender documents aggregated from public government sources remain the property of the respective issuing authorities.",
            "Nothing in these Terms grants you any license to reproduce, distribute, or create derivative works from Mlue Tenders' proprietary content.",
          ],
        },
        {
          title: '9. Accuracy of Information',
          paragraphs: [
            'Mlue Tenders aggregates tender announcements from official government portals for informational convenience. We make reasonable efforts to ensure accuracy and timeliness, but we do not guarantee that the information is complete, accurate, or up to date.',
            'You should always verify tender details directly with the relevant issuing authority before submitting any bid or taking any action based on information from our platform.',
          ],
        },
        {
          title: '10. Disclaimer of Warranties',
          paragraphs: [
            'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MLUE TENDERS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
          ],
        },
        {
          title: '11. Limitation of Liability',
          paragraphs: [
            'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MLUE TENDERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.',
            'Our total liability to you for any claim arising from these Terms shall not exceed the amount you paid to us in the twelve months preceding the claim.',
          ],
        },
        {
          title: '12. Indemnification',
          paragraphs: [
            'You agree to defend, indemnify, and hold harmless Mlue Tenders and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from: your use of the service; your violation of these Terms; or your violation of any third-party rights.',
          ],
        },
        {
          title: '13. Third-Party Services',
          paragraphs: [
            'The service integrates with third-party services including Firebase (Google LLC) for authentication and push notifications, and the Google Play Store for distributing our Android application. Your use of these services is governed by their respective terms and privacy policies. Mlue Tenders is not responsible for the practices or content of third-party services.',
          ],
        },
        {
          title: '14. Termination',
          paragraphs: [
            'We reserve the right to suspend or permanently terminate your account if you violate these Terms of Service or engage in conduct harmful to the service, other users, or third parties.',
            'You may delete your account at any time through the app settings. Upon termination, your right to use the service ceases immediately. Premium subscriptions terminated due to a Terms violation are not eligible for reimbursement of the subscription fee.',
          ],
        },
        {
          title: '15. Governing Law and Dispute Resolution',
          paragraphs: [
            'These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Morocco.',
            'We encourage you to contact us at contact@mluetenders.com to resolve any dispute amicably before resorting to formal proceedings. Any dispute that cannot be resolved amicably shall be subject to the exclusive jurisdiction of the competent courts of Morocco.',
          ],
        },
        {
          title: '16. Changes to These Terms',
          paragraphs: [
            'We may update these Terms of Service from time to time. We will notify you of material changes via in-app notification or email at least 15 days before the changes take effect. Continued use of the service after the effective date constitutes your acceptance of the updated Terms. If you do not agree to the revised Terms, you must stop using the service.',
          ],
        },
        {
          title: '17. Contact',
          paragraphs: [
            'For any questions about these Terms of Service, please contact us:',
            'Email: contact@mluetenders.com',
            'We aim to respond within 30 days.',
          ],
        },
      ],
      crossLink: { label: 'Also read our Privacy Policy', href: '/privacy-policy' },
    },
  },

  fr: {
    privacy: {
      badge: 'Légal',
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour : 28 juin 2026',
      intro:
        "Chez Mlue Tenders, nous respectons votre vie privée et nous nous engageons à protéger les données personnelles que vous nous confiez. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels droits vous disposez — que vous utilisiez notre application Android ou notre site web.",
      sections: [
        {
          title: '1. Qui sommes-nous ?',
          paragraphs: [
            "Mlue Tenders est une plateforme numérique marocaine qui agrège les annonces d'appels d'offres publics provenant de portails gouvernementaux officiels et les met à disposition des utilisateurs via une application mobile (Android uniquement pour l'instant) et un site web accessible à l'adresse www.mluetenders.com.",
            "Vous pouvez nous contacter à tout moment à l'adresse contact@mluetenders.com.",
          ],
        },
        {
          title: '2. Informations que nous collectons',
          paragraphs: ["Nous collectons les catégories d'informations suivantes :"],
          items: [
            "Informations de compte : nom, adresse e-mail, nom de l'entreprise et secteur d'activité fournis lors de l'inscription.",
            "Données d'utilisation : appels d'offres consultés, enregistrés ou marqués comme favoris ; requêtes de recherche ; préférences de notification ; et interactions avec les fonctionnalités de l'application.",
            "Informations sur l'appareil : modèle, version du système d'exploitation et version de l'application, collectés automatiquement via Firebase Analytics et Crashlytics.",
            "Analyses du site web : pages vues, durée des sessions et parcours de navigation sur www.mluetenders.com, collectés via Google Analytics.",
            'Jetons de notification push : jetons Firebase Cloud Messaging (FCM) utilisés pour envoyer des alertes en temps réel aux abonnés Premium.',
          ],
        },
        {
          title: '3. Utilisation de vos informations',
          paragraphs: ['Nous utilisons vos informations pour :'],
          items: [
            'Créer et gérer votre compte.',
            "Personnaliser les recommandations d'appels d'offres selon votre profil professionnel et votre activité dans l'application.",
            "Envoyer des notifications push concernant les appels d'offres correspondant à votre profil (abonnés Premium uniquement).",
            "Analyser et améliorer les performances et la stabilité de l'application via Firebase Crashlytics et Analytics.",
            "Mesurer et améliorer le trafic et l'expérience utilisateur sur notre site web via Google Analytics.",
            "Répondre à vos demandes d'assistance et de service.",
            "Faire respecter nos Conditions d'utilisation et nous conformer aux obligations légales applicables.",
          ],
        },
        {
          title: '4. Base juridique du traitement',
          paragraphs: ['Nous traitons vos données personnelles sur les bases juridiques suivantes :'],
          items: [
            "Exécution du contrat : traitement nécessaire pour fournir le service auquel vous vous êtes inscrit.",
            "Intérêts légitimes : amélioration de notre plateforme, prévention des abus et garantie de la sécurité.",
            'Consentement : pour les communications marketing et les analyses non essentielles. Vous pouvez retirer votre consentement à tout moment en nous contactant.',
          ],
        },
        {
          title: '5. Services tiers',
          paragraphs: [
            'Nous faisons appel aux services tiers suivants, qui peuvent traiter vos données personnelles pour notre compte :',
          ],
          items: [
            "Firebase (Google LLC) — Authentification, Cloud Messaging (notifications push), Crashlytics (rapports de plantage) et Analytics. Traitement régi par la Politique de confidentialité de Google.",
            'Google Analytics — analyse du trafic du site web à partir de données anonymisées et agrégées.',
            "Google Play Store — distribution de notre application Android, soumise aux conditions et à la politique de confidentialité de Google.",
          ],
          afterItems:
            "Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.",
        },
        {
          title: '6. Notifications push',
          paragraphs: [
            "Les abonnés Premium reçoivent des notifications push en temps réel lorsqu'un nouvel appel d'offres correspondant à leur profil est détecté. Vous pouvez activer ou désactiver les notifications à tout moment dans les paramètres de notification de votre appareil ou directement dans l'application Mlue Tenders.",
          ],
        },
        {
          title: '7. Sécurité des données',
          paragraphs: [
            "Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos données, notamment le chiffrement en transit (TLS) et une infrastructure cloud sécurisée fournie par Firebase. Cependant, aucune méthode de transmission sur Internet n'est sécurisée à 100 %. Bien que nous nous efforcions de protéger vos informations, nous ne pouvons garantir une sécurité absolue.",
          ],
        },
        {
          title: '8. Conservation des données',
          paragraphs: [
            "Nous conservons vos données de compte aussi longtemps que votre compte est actif ou que cela est nécessaire pour vous fournir nos services. Si vous supprimez votre compte, nous effacerons définitivement vos données personnelles dans un délai de 30 jours, sauf si la conservation est requise par la loi ou pour des raisons légitimes telles que la tenue de registres financiers liés aux abonnements Premium.",
          ],
        },
        {
          title: '9. Vos droits',
          paragraphs: [
            'En vertu de la loi applicable, vous disposez des droits suivants concernant vos données personnelles :',
          ],
          items: [
            "Droit d'accès : obtenir une copie des données personnelles que nous détenons vous concernant.",
            'Droit de rectification : corriger toute information inexacte ou incomplète.',
            "Droit à l'effacement : demander la suppression de vos données personnelles.",
            'Droit à la portabilité : recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.',
            "Droit d'opposition : vous opposer au traitement de vos données fondé sur des intérêts légitimes.",
            'Droit de retrait du consentement : retirer tout consentement donné, sans affecter la licéité du traitement antérieur.',
          ],
          afterItems:
            "Pour exercer l'un de ces droits, contactez-nous à contact@mluetenders.com. Nous répondrons dans un délai de 30 jours.",
        },
        {
          title: '10. Cookies et analyses',
          paragraphs: ['Notre site web utilise des cookies et des technologies similaires pour :'],
          items: [
            'Mémoriser vos préférences de langue et de thème entre les visites.',
            'Mesurer et analyser le trafic du site via Google Analytics.',
          ],
          afterItems:
            "Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur. La désactivation de certains cookies peut affecter les fonctionnalités de notre site.",
        },
        {
          title: '11. Protection des mineurs',
          paragraphs: [
            "Mlue Tenders est destiné aux professionnels et n'est pas dirigé vers les personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si nous apprenons qu'un utilisateur de moins de 18 ans nous a fourni des données personnelles, nous les supprimerons sans délai.",
          ],
        },
        {
          title: '12. Modifications de cette politique',
          paragraphs: [
            'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre pour refléter les évolutions de nos pratiques ou de la législation applicable. Nous vous informerons des modifications importantes via une notification in-app ou par e-mail. La date de « Dernière mise à jour » en haut de cette page indique la date de la dernière révision. L\'utilisation continue de nos services après la date d\'entrée en vigueur vaut acceptation de la politique mise à jour.',
          ],
        },
        {
          title: '13. Nous contacter',
          paragraphs: [
            'Pour toute question, demande ou réclamation concernant cette Politique de confidentialité, veuillez nous contacter :',
            'E-mail : contact@mluetenders.com',
            'Nous nous efforçons de répondre dans un délai de 30 jours.',
          ],
        },
      ],
      crossLink: {
        label: "Consultez aussi nos Conditions d'utilisation",
        href: '/terms-of-service',
      },
    },
    terms: {
      badge: 'Légal',
      title: "Conditions d'utilisation",
      lastUpdated: 'Dernière mise à jour : 28 juin 2026',
      intro:
        "Veuillez lire attentivement ces Conditions d'utilisation avant d'utiliser Mlue Tenders. En accédant à notre application Android ou à notre site web, vous acceptez d'être lié par ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser nos services.",
      sections: [
        {
          title: '1. Qui sommes-nous ?',
          paragraphs: [
            "Mlue Tenders est une plateforme numérique marocaine qui agrège les annonces d'appels d'offres publics provenant de portails gouvernementaux officiels et les met à disposition des utilisateurs via une application mobile (Android uniquement pour l'instant) et un site web à l'adresse www.mluetenders.com.",
          ],
        },
        {
          title: "2. Conditions d'éligibilité",
          paragraphs: [
            "Vous devez avoir au moins 18 ans et avoir la capacité juridique de conclure un accord contraignant pour utiliser Mlue Tenders. En créant un compte, vous déclarez et garantissez que vous remplissez ces conditions.",
          ],
        },
        {
          title: '3. Comptes utilisateurs',
          paragraphs: [
            "Pour accéder à la plupart des fonctionnalités de Mlue Tenders, vous devez créer un compte. Vous êtes responsable de :",
          ],
          items: [
            "Fournir des informations exactes, actuelles et complètes lors de l'inscription et les maintenir à jour.",
            'Préserver la confidentialité de vos identifiants de connexion.',
            'Toutes les activités réalisées sous votre compte.',
          ],
          afterItems:
            "En cas d'accès non autorisé suspecté à votre compte, contactez-nous immédiatement à contact@mluetenders.com.",
        },
        {
          title: '4. Offres gratuite et premium',
          paragraphs: ["Mlue Tenders propose deux niveaux d'abonnement :"],
          items: [
            "Offre gratuite : accès à un nombre limité d'appels d'offres par jour, enregistrement de 5 appels d'offres maximum, filtres de recherche de base, sans notifications push.",
            "Offre Premium : accès illimité aux appels d'offres, enregistrements illimités, filtres avancés et notifications push en temps réel lors de la détection d'un appel d'offres correspondant à votre profil.",
          ],
          afterItems:
            "Les fonctionnalités et les limites peuvent être modifiées. Nous vous informerons de tout changement important dans un délai raisonnable.",
        },
        {
          title: '5. Abonnement et paiement',
          paragraphs: [
            "L'offre Premium est au prix de 699 MAD par an (dirhams marocains). Le paiement s'effectue exclusivement par virement bancaire vers le compte bancaire officiel de Mlue Tenders affiché dans l'application.",
            "Pour activer votre abonnement Premium, suivez ces étapes :",
          ],
          items: [
            "Effectuez un virement du montant de l'abonnement vers le compte bancaire officiel indiqué dans l'application.",
            "Téléchargez ou envoyez une copie de votre reçu de paiement via l'application.",
            "Attendez que l'équipe Mlue Tenders vérifie votre paiement manuellement.",
            "Recevez une confirmation et accédez aux fonctionnalités Premium une fois votre paiement vérifié.",
          ],
          afterItems:
            "Les fonctionnalités Premium sont activées uniquement après vérification réussie de votre paiement. L'activation peut prendre un certain temps pendant que notre équipe examine votre reçu. Les abonnements ne se renouvellent pas automatiquement — si vous souhaitez continuer après l'expiration de votre abonnement, vous devrez soumettre un nouveau paiement. Nous vous remercions de votre patience.",
        },
        {
          title: '6. Politique de remboursement',
          paragraphs: [
            "Tous les paiements pour les abonnements Premium sont effectués par virement bancaire manuel et sont examinés individuellement par l'équipe Mlue Tenders.",
            "Les demandes de remboursement ne sont généralement pas accordées une fois l'accès Premium activé et le service fourni. Des exceptions peuvent être envisagées dans les cas suivants :",
          ],
          items: [
            "Vous avez été facturé d'un montant incorrect en raison d'une erreur de notre part.",
            "Un problème technique de notre côté vous a empêché d'accéder au service Premium après vérification de votre paiement.",
            "Vous avez effectué un paiement en double ou un trop-perçu accidentel.",
          ],
          afterItems:
            "Pour soumettre une demande de remboursement, contactez-nous à contact@mluetenders.com en joignant votre reçu de paiement et une description du problème. Chaque demande sera examinée au cas par cas. Les remboursements approuvés seront effectués par virement bancaire vers le compte utilisé pour le paiement initial. Nous ne faisons aucune promesse quant au résultat des demandes de remboursement au-delà de ce qu'exige la loi applicable.",
        },
        {
          title: '7. Utilisation acceptable',
          paragraphs: ["Vous vous engagez à ne pas :"],
          items: [
            "Utiliser le service à des fins illégales ou en violation de la législation marocaine applicable.",
            "Tenter d'accéder sans autorisation à toute partie du service, de ses systèmes ou de ses bases de données.",
            "Extraire, copier, redistribuer ou commercialiser des données d'appels d'offres obtenues via la plateforme sans notre autorisation écrite.",
            "Utiliser des outils automatisés, des robots ou des scripts pour accéder au service à un rythme dépassant une utilisation humaine normale.",
            "Usurper l'identité d'une personne ou d'une entité, ou présenter faussement votre identité ou affiliation.",
            "Perturber ou nuire à l'intégrité ou aux performances du service ou à l'expérience des autres utilisateurs.",
          ],
        },
        {
          title: '8. Propriété intellectuelle',
          paragraphs: [
            "Tous les logiciels, designs, textes, graphiques et fonctionnalités de Mlue Tenders sont la propriété exclusive de Mlue Tenders et sont protégés par les lois applicables en matière de propriété intellectuelle. Les documents d'appels d'offres agrégés depuis des sources gouvernementales publiques restent la propriété des autorités émettrices concernées.",
            "Ces Conditions ne vous accordent aucune licence pour reproduire, distribuer ou créer des œuvres dérivées à partir du contenu propriétaire de Mlue Tenders.",
          ],
        },
        {
          title: '9. Exactitude des informations',
          paragraphs: [
            "Mlue Tenders agrège les annonces d'appels d'offres provenant de portails gouvernementaux officiels à titre informatif. Nous déployons des efforts raisonnables pour garantir l'exactitude et l'actualité des informations, mais nous ne garantissons pas qu'elles sont complètes, exactes ou à jour.",
            "Vous devez toujours vérifier les détails d'un appel d'offres directement auprès de l'autorité émettrice concernée avant de soumettre une offre ou de prendre toute décision basée sur les informations de notre plateforme.",
          ],
        },
        {
          title: '10. Exclusion de garanties',
          paragraphs: [
            "LE SERVICE EST FOURNI « EN L'ÉTAT » ET « TEL QUE DISPONIBLE », SANS GARANTIE D'AUCUNE SORTE. DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, MLUE TENDERS DÉCLINE TOUTES GARANTIES, EXPRESSES OU IMPLICITES, Y COMPRIS LES GARANTIES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION.",
          ],
        },
        {
          title: '11. Limitation de responsabilité',
          paragraphs: [
            "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, MLUE TENDERS NE SAURAIT ÊTRE TENU RESPONSABLE DE TOUT DOMMAGE INDIRECT, ACCESSOIRE, SPÉCIAL, CONSÉCUTIF OU PUNITIF, Y COMPRIS LA PERTE DE PROFITS, DE DONNÉES OU D'OPPORTUNITÉS COMMERCIALES, DÉCOULANT DE VOTRE UTILISATION OU DE VOTRE INCAPACITÉ À UTILISER LE SERVICE.",
            'Notre responsabilité totale envers vous pour toute réclamation découlant de ces Conditions ne dépassera pas le montant que vous nous avez versé au cours des douze mois précédant la réclamation.',
          ],
        },
        {
          title: '12. Indemnisation',
          paragraphs: [
            "Vous vous engagez à défendre, indemniser et tenir indemne Mlue Tenders ainsi que ses dirigeants, directeurs, employés et agents contre toute réclamation, responsabilité, dommage, perte et dépense (y compris les honoraires d'avocat raisonnables) résultant de : votre utilisation du service ; votre violation de ces Conditions ; ou votre violation des droits de tiers.",
          ],
        },
        {
          title: '13. Services tiers',
          paragraphs: [
            "Le service s'intègre à des services tiers, notamment Firebase (Google LLC) pour l'authentification et les notifications push, ainsi que le Google Play Store pour la distribution de notre application Android. Votre utilisation de ces services est régie par leurs propres conditions générales et politiques de confidentialité. Mlue Tenders n'est pas responsable des pratiques ou du contenu des services tiers.",
          ],
        },
        {
          title: '14. Résiliation',
          paragraphs: [
            "Nous nous réservons le droit de suspendre ou de résilier définitivement votre compte si vous violez ces Conditions d'utilisation ou adoptez un comportement préjudiciable au service, aux autres utilisateurs ou à des tiers.",
            "Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. À la résiliation, votre droit d'utiliser le service prend fin immédiatement. Les abonnements Premium résiliés suite à une violation des Conditions ne donnent pas droit au remboursement des frais d'abonnement.",
          ],
        },
        {
          title: '15. Droit applicable et règlement des litiges',
          paragraphs: [
            "Ces Conditions d'utilisation sont régies et interprétées conformément aux lois du Royaume du Maroc.",
            "Nous vous encourageons à nous contacter à contact@mluetenders.com afin de résoudre tout litige à l'amiable avant de recourir à des procédures formelles. Tout litige ne pouvant être résolu à l'amiable relèvera de la compétence exclusive des tribunaux compétents du Maroc.",
          ],
        },
        {
          title: '16. Modifications des conditions',
          paragraphs: [
            "Nous pouvons mettre à jour ces Conditions d'utilisation de temps à autre. Nous vous informerons des modifications importantes via une notification in-app ou par e-mail au moins 15 jours avant leur entrée en vigueur. L'utilisation continue du service après cette date vaut acceptation des Conditions mises à jour. Si vous n'acceptez pas les Conditions révisées, vous devez cesser d'utiliser le service.",
          ],
        },
        {
          title: '17. Contact',
          paragraphs: [
            "Pour toute question relative à ces Conditions d'utilisation, veuillez nous contacter :",
            'E-mail : contact@mluetenders.com',
            'Nous nous efforçons de répondre dans un délai de 30 jours.',
          ],
        },
      ],
      crossLink: {
        label: 'Consultez aussi notre Politique de confidentialité',
        href: '/privacy-policy',
      },
    },
  },

  ar: {
    privacy: {
      badge: 'قانوني',
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: 28 يونيو 2026',
      intro:
        'في Mlue Tenders، نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه المعلومات التي نجمعها، وكيفية استخدامها، والحقوق المتاحة لك — سواء كنت تستخدم تطبيقنا على أندرويد أو موقعنا الإلكتروني.',
      sections: [
        {
          title: '1. من نحن',
          paragraphs: [
            'Mlue Tenders منصة رقمية مغربية تجمع إعلانات المناقصات العامة من البوابات الحكومية الرسمية وتتيحها للمستخدمين عبر تطبيق جوّال (أندرويد حصرًا في الوقت الراهن) وموقع إلكتروني على العنوان www.mluetenders.com.',
            'يمكنك التواصل معنا في أي وقت على البريد الإلكتروني contact@mluetenders.com.',
          ],
        },
        {
          title: '2. المعلومات التي نجمعها',
          paragraphs: ['نجمع الفئات التالية من المعلومات:'],
          items: [
            'بيانات الحساب: الاسم والبريد الإلكتروني واسم الشركة وقطاع النشاط التي تقدمها عند التسجيل.',
            'بيانات الاستخدام: المناقصات التي تعرضها أو تحفظها أو تضيفها إلى المفضلة، واستفسارات البحث، وإعدادات الإشعارات، وتفاعلاتك مع ميزات التطبيق.',
            'بيانات الجهاز: طراز الجهاز ونسخة نظام التشغيل ونسخة التطبيق، التي تُجمع تلقائيًا عبر Firebase Analytics وCrashlytics.',
            'تحليلات الموقع: الصفحات المزارة ومدة الجلسات ومسارات التصفح على www.mluetenders.com، التي تُجمع عبر Google Analytics.',
            'رموز الإشعارات الفورية: رموز Firebase Cloud Messaging (FCM) المستخدمة لإرسال تنبيهات المناقصات الفورية لمشتركي بريميوم.',
          ],
        },
        {
          title: '3. كيفية استخدام معلوماتك',
          paragraphs: ['نستخدم معلوماتك من أجل:'],
          items: [
            'إنشاء حسابك وإدارته.',
            'تخصيص توصيات المناقصات بناءً على ملفك المهني ونشاطك داخل التطبيق.',
            'إرسال إشعارات فورية بالمناقصات المطابقة لملفك (لمشتركي بريميوم فقط).',
            'تحليل أداء التطبيق واستقراره وتحسينهما عبر Firebase Crashlytics وAnalytics.',
            'قياس تجربة المستخدمين على موقعنا الإلكتروني وتحسينها عبر Google Analytics.',
            'الرد على طلبات الدعم والاستفسارات.',
            'تطبيق شروط الاستخدام والامتثال للالتزامات القانونية المعمول بها.',
          ],
        },
        {
          title: '4. الأساس القانوني للمعالجة',
          paragraphs: ['نعالج بياناتك الشخصية استنادًا إلى الأسس القانونية التالية:'],
          items: [
            'تنفيذ العقد: المعالجة اللازمة لتقديم الخدمة التي اشتركت فيها.',
            'المصالح المشروعة: تحسين منصتنا، ومنع إساءة الاستخدام، وضمان الأمن.',
            'الموافقة: لإرسال الاتصالات التسويقية والتحليلات غير الضرورية. يمكنك سحب موافقتك في أي وقت بالتواصل معنا.',
          ],
        },
        {
          title: '5. خدمات الطرف الثالث',
          paragraphs: [
            'نستعين بخدمات الأطراف الثالثة التالية التي قد تعالج بياناتك الشخصية نيابةً عنّا:',
          ],
          items: [
            'Firebase (Google LLC) — المصادقة، وCloud Messaging (الإشعارات الفورية)، وCrashlytics (تقارير الأعطال)، وAnalytics. تتم المعالجة وفق سياسة خصوصية Google.',
            'Google Analytics — تحليل حركة زيارات الموقع باستخدام بيانات مجهولة الهوية ومجمّعة.',
            'Google Play Store — توزيع تطبيق أندرويد الخاص بنا، خاضعًا لشروط وسياسة خصوصية Google.',
          ],
          afterItems: 'لا نبيع بياناتك الشخصية ولا نتاجر بها ولا نؤجرها لأي طرف ثالث.',
        },
        {
          title: '6. الإشعارات الفورية',
          paragraphs: [
            'يتلقى مشتركو بريميوم إشعارات فورية عند رصد مناقصة جديدة مطابقة لملفهم. يمكنك تفعيل الإشعارات أو إيقافها في أي وقت من إعدادات الإشعارات على جهازك أو مباشرةً من تطبيق Mlue Tenders.',
          ],
        },
        {
          title: '7. أمان البيانات',
          paragraphs: [
            'نطبّق معايير أمنية متوافقة مع أفضل ممارسات الصناعة لحماية بياناتك، تشمل التشفير أثناء النقل (TLS) والبنية التحتية السحابية الآمنة التي توفرها Firebase. غير أنه لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪. ورغم حرصنا على حماية معلوماتك، لا يمكننا ضمان أمانها المطلق.',
          ],
        },
        {
          title: '8. الاحتفاظ بالبيانات',
          paragraphs: [
            'نحتفظ ببيانات حسابك طالما كان الحساب نشطًا أو طالما كان ذلك ضروريًا لتقديم خدماتنا. إذا حذفت حسابك، نحذف بياناتك الشخصية نهائيًا خلال 30 يومًا، إلا حين يستلزم القانون الاحتفاظ بها أو لأغراض مشروعة كالسجلات المالية المتعلقة باشتراكات بريميوم.',
          ],
        },
        {
          title: '9. حقوقك',
          paragraphs: [
            'بموجب القانون المعمول به، تتمتع بالحقوق التالية فيما يخص بياناتك الشخصية:',
          ],
          items: [
            'حق الوصول: طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك.',
            'حق التصحيح: تصحيح أي معلومات غير دقيقة أو منقوصة.',
            'حق الحذف: طلب مسح بياناتك الشخصية.',
            'حق نقل البيانات: استلام بياناتك بصيغة منظمة وقابلة للقراءة آليًا.',
            'حق الاعتراض: الاعتراض على معالجة بياناتك استنادًا إلى المصالح المشروعة.',
            'حق سحب الموافقة: سحب أي موافقة في أي وقت دون المساس بمشروعية المعالجة السابقة.',
          ],
          afterItems:
            'لممارسة أي من هذه الحقوق، تواصل معنا على contact@mluetenders.com. سنرد خلال 30 يومًا.',
        },
        {
          title: '10. ملفات تعريف الارتباط والتحليلات',
          paragraphs: ['يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مماثلة من أجل:'],
          items: [
            'تذكّر تفضيلات اللغة والمظهر بين الزيارات.',
            'قياس حركة الزيارات وتحليلها عبر Google Analytics.',
          ],
          afterItems:
            'يمكنك إدارة تفضيلاتك المتعلقة بملفات تعريف الارتباط من إعدادات المتصفح. قد يؤثر تعطيل بعضها على وظائف الموقع.',
        },
        {
          title: '11. خصوصية الأطفال',
          paragraphs: [
            'Mlue Tenders مخصصة للمهنيين ولا توجَّه للأشخاص دون سن 18 عامًا. لا نجمع بياناتهم الشخصية عمدًا. وإن علمنا بأن قاصرًا زوّدنا ببيانات شخصية، حذفناها فورًا.',
          ],
        },
        {
          title: '12. التعديلات على هذه السياسة',
          paragraphs: [
            'قد نحدّث سياسة الخصوصية هذه بصفة دورية لمواكبة التغييرات في ممارساتنا أو في القانون المعمول به. نُعلمك بالتغييرات الجوهرية عبر إشعار داخل التطبيق أو بالبريد الإلكتروني. يشير تاريخ "آخر تحديث" في أعلى هذه الصفحة إلى آخر مراجعة. استمرارك في استخدام خدماتنا بعد تاريخ سريان التعديلات يُعدّ قبولًا للسياسة المحدّثة.',
          ],
        },
        {
          title: '13. التواصل معنا',
          paragraphs: [
            'لأي أسئلة أو طلبات أو شكاوى تتعلق بسياسة الخصوصية هذه، يُرجى التواصل معنا:',
            'البريد الإلكتروني: contact@mluetenders.com',
            'نهدف للرد خلال 30 يومًا من استلام طلبك.',
          ],
        },
      ],
      crossLink: { label: 'اقرأ أيضًا شروط الاستخدام', href: '/terms-of-service' },
    },
    terms: {
      badge: 'قانوني',
      title: 'شروط الاستخدام',
      lastUpdated: 'آخر تحديث: 28 يونيو 2026',
      intro:
        'يُرجى قراءة شروط الاستخدام هذه بعناية قبل استخدام Mlue Tenders. باستخدامك لتطبيقنا على أندرويد أو موقعنا الإلكتروني، فإنك توافق على الالتزام بهذه الشروط. إن لم توافق عليها، فلا تستخدم خدماتنا.',
      sections: [
        {
          title: '1. من نحن',
          paragraphs: [
            'Mlue Tenders منصة رقمية مغربية تجمع إعلانات المناقصات العامة من البوابات الحكومية الرسمية وتتيحها للمستخدمين المسجلين عبر تطبيق جوّال (أندرويد حصرًا في الوقت الراهن) وموقع إلكتروني على العنوان www.mluetenders.com.',
          ],
        },
        {
          title: '2. شروط الأهلية',
          paragraphs: [
            'يجب أن يكون عمرك 18 عامًا على الأقل وأن تتمتع بالأهلية القانونية لإبرام اتفاقيات ملزمة لاستخدام Mlue Tenders. بإنشائك حسابًا، تُقرّ وتضمن استيفاءك لهذه الشروط.',
          ],
        },
        {
          title: '3. حسابات المستخدمين',
          paragraphs: ['للوصول إلى معظم ميزات Mlue Tenders، تحتاج إلى إنشاء حساب. أنت مسؤول عن:'],
          items: [
            'تقديم معلومات دقيقة وحالية وكاملة عند التسجيل والحرص على تحديثها.',
            'الحفاظ على سرية بيانات تسجيل الدخول الخاصة بك.',
            'جميع الأنشطة التي تجري من خلال حسابك.',
          ],
          afterItems:
            'في حال اشتبهت بوجود وصول غير مصرح به لحسابك، أخبرنا فورًا على contact@mluetenders.com.',
        },
        {
          title: '4. الاشتراك المجاني وبريميوم',
          paragraphs: ['تقدم Mlue Tenders مستويين للاشتراك:'],
          items: [
            'الاشتراك المجاني: الوصول إلى عدد محدود من المناقصات يوميًا، وحفظ ما يصل إلى 5 مناقصات، وفلاتر بحث أساسية، دون إشعارات فورية.',
            'اشتراك بريميوم: وصول غير محدود للمناقصات، وحفظ غير محدود، وفلاتر متقدمة، وإشعارات فورية عند رصد مناقصة مطابقة لملفك.',
          ],
          afterItems:
            'الميزات والحدود قابلة للتغيير مع إشعار مسبق معقول بأي تعديلات جوهرية.',
        },
        {
          title: '5. الاشتراك والدفع',
          paragraphs: [
            'سعر اشتراك بريميوم 699 درهمًا مغربيًا في السنة. يتم الدفع حصرًا عبر التحويل البنكي إلى الحساب البنكي الرسمي لـ Mlue Tenders الموضح داخل التطبيق.',
            'لتفعيل اشتراك بريميوم، اتبع الخطوات التالية:',
          ],
          items: [
            'حوّل مبلغ الاشتراك إلى الحساب البنكي الرسمي الموضح في التطبيق.',
            'ارفع أو أرسل نسخة من إيصال الدفع عبر التطبيق.',
            'انتظر تحقق فريق Mlue Tenders من دفعتك يدويًا.',
            'استلم التأكيد وتفعيل بريميوم بعد التحقق الناجح من دفعتك.',
          ],
          afterItems:
            'تُفعَّل ميزات بريميوم فقط بعد التحقق الناجح من دفعتك. قد يستغرق التفعيل بعض الوقت ريثما يراجع فريقنا إيصالك. لا يتجدد الاشتراك تلقائيًا — إذا أردت الاستمرار في استخدام بريميوم بعد انتهائه، يجب عليك تقديم دفعة جديدة. نشكرك على صبرك.',
        },
        {
          title: '6. سياسة الاسترداد',
          paragraphs: [
            'تتم جميع مدفوعات اشتراكات بريميوم عبر التحويل البنكي اليدوي، ويراجعها فريق Mlue Tenders بصفة فردية.',
            'لا تُمنح طلبات الاسترداد عمومًا بعد تفعيل وصول بريميوم وتقديم الخدمة. يمكن النظر في استثناءات في الحالات التالية:',
          ],
          items: [
            'تم تحصيل مبلغ خاطئ منك بسبب خطأ من جانبنا.',
            'منعتك مشكلة تقنية من جانبنا من الوصول إلى خدمة بريميوم بعد التحقق من دفعتك.',
            'قمت بدفع مزدوج أو دفعت مبلغًا زائدًا عن طريق الخطأ.',
          ],
          afterItems:
            'لتقديم طلب استرداد، تواصل معنا على contact@mluetenders.com مرفقًا إيصال الدفع ووصفًا للمشكلة. يُدرس كل طلب بصفة فردية. تُحوَّل المبالغ المستردة — عند الموافقة عليها — بتحويل بنكي إلى الحساب المستخدم في الدفع الأصلي. لا نقدم أي ضمانات بشأن نتيجة طلبات الاسترداد تتجاوز ما يستوجبه القانون المعمول به.',
        },
        {
          title: '7. الاستخدام المقبول',
          paragraphs: ['توافق على الامتناع عن:'],
          items: [
            'استخدام الخدمة لأي غرض غير قانوني أو بما يخالف القانون المغربي المعمول به.',
            'محاولة الوصول غير المصرح به إلى أي جزء من الخدمة أو أنظمتها أو قواعد بياناتها.',
            'استخراج بيانات المناقصات أو نسخها أو إعادة توزيعها أو تسييلها دون تفويض كتابي منّا.',
            'استخدام أدوات أو روبوتات أو نصوص برمجية آلية للوصول إلى الخدمة بمعدل يتجاوز الاستخدام البشري الطبيعي.',
            'انتحال شخصية أي فرد أو جهة، أو تقديم معلومات مضللة عن هويتك أو انتمائك.',
            'تعطيل الخدمة أو الإخلال بأداء المنصة أو تجربة المستخدمين الآخرين.',
          ],
        },
        {
          title: '8. الملكية الفكرية',
          paragraphs: [
            'جميع برمجيات Mlue Tenders وتصاميمها ونصوصها وصورها وميزاتها هي الملكية الحصرية لـ Mlue Tenders وتخضع لحماية قوانين الملكية الفكرية المعمول بها. وثائق المناقصات المجمّعة من المصادر الحكومية العامة تظل ملكًا للجهات الحكومية المُصدِرة المعنية.',
            'لا تمنحك هذه الشروط أي ترخيص لاستنساخ محتوى Mlue Tenders الخاص أو توزيعه أو اشتقاق أعمال منه.',
          ],
        },
        {
          title: '9. دقة المعلومات',
          paragraphs: [
            'تجمع Mlue Tenders إعلانات المناقصات من البوابات الحكومية الرسمية لأغراض إعلامية. نبذل جهودًا معقولة لضمان الدقة والاستعداد، لكننا لا نضمن اكتمال المعلومات أو دقتها أو أنها محدّثة.',
            'يجب عليك دائمًا التحقق من تفاصيل المناقصة مباشرةً من الجهة المُصدِرة قبل تقديم أي عرض أو اتخاذ أي قرار بناءً على معلومات منصتنا.',
          ],
        },
        {
          title: '10. إخلاء مسؤولية الضمانات',
          paragraphs: [
            'تُقدَّم الخدمة "كما هي" و"كما هي متاحة" دون أي ضمان من أي نوع. في أقصى الحدود التي يسمح بها القانون المعمول به، تُخلي Mlue Tenders مسؤوليتها من جميع الضمانات الصريحة أو الضمنية، بما فيها ضمانات القابلية للتسويق والملاءمة لغرض معين وعدم الانتهاك.',
          ],
        },
        {
          title: '11. تحديد المسؤولية',
          paragraphs: [
            'في أقصى الحدود التي يسمح بها القانون المعمول به، لن تكون Mlue Tenders مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما فيها خسارة الأرباح أو البيانات أو الفرص التجارية، الناجمة عن استخدامك للخدمة أو عجزك عن استخدامها.',
            'لن تتجاوز مسؤوليتنا الإجمالية تجاهك عن أي مطالبة ناشئة عن هذه الشروط المبلغَ الذي دفعته لنا خلال اثني عشر شهرًا قبل المطالبة.',
          ],
        },
        {
          title: '12. التعويض',
          paragraphs: [
            'توافق على الدفاع عن Mlue Tenders ومسؤوليها ومديريها وموظفيها ووكلائها وتعويضهم وإعفاءهم من أي مطالبات أو مسؤوليات أو أضرار أو خسائر أو نفقات (بما فيها أتعاب المحامين المعقولة) الناشئة عن: استخدامك للخدمة، أو انتهاكك لهذه الشروط، أو انتهاكك لحقوق أي طرف ثالث.',
          ],
        },
        {
          title: '13. خدمات الطرف الثالث',
          paragraphs: [
            'تتكامل الخدمة مع خدمات طرف ثالث تشمل Firebase (Google LLC) للمصادقة والإشعارات الفورية، وGoogle Play Store لتوزيع تطبيق أندرويد الخاص بنا. استخدامك لهذه الخدمات يخضع لشروطها وسياسات خصوصيتها الخاصة. Mlue Tenders غير مسؤولة عن ممارسات خدمات الطرف الثالث أو محتواها.',
          ],
        },
        {
          title: '14. إنهاء الحساب',
          paragraphs: [
            'نحتفظ بحق تعليق حسابك أو إنهائه نهائيًا في حال مخالفتك لهذه الشروط أو انخراطك في سلوك ضار بالخدمة أو المستخدمين الآخرين أو الأطراف الثالثة.',
            'يمكنك حذف حسابك في أي وقت من إعدادات التطبيق. عند إنهاء الحساب، يتوقف حقك في استخدام الخدمة فورًا. اشتراكات بريميوم المُنهاة بسبب مخالفة الشروط لا تخوّل صاحبها المطالبة باسترداد رسوم الاشتراك.',
          ],
        },
        {
          title: '15. القانون الحاكم وتسوية النزاعات',
          paragraphs: [
            'تخضع شروط الاستخدام هذه وتُفسَّر وفقًا لقوانين المملكة المغربية.',
            'نشجعك على التواصل معنا أولًا على contact@mluetenders.com لحل أي نزاع وديًا قبل اللجوء إلى الإجراءات الرسمية. أي نزاع لا يمكن تسويته وديًا يخضع للاختصاص الحصري للمحاكم المغربية المختصة.',
          ],
        },
        {
          title: '16. تعديلات الشروط',
          paragraphs: [
            'قد نحدّث هذه الشروط بصفة دورية. سنُعلمك بالتغييرات الجوهرية عبر إشعار داخل التطبيق أو بالبريد الإلكتروني قبل 15 يومًا على الأقل من سريانها. استمرارك في استخدام الخدمة بعد ذلك التاريخ يُعدّ قبولًا للشروط المحدّثة. إن لم توافق على الشروط المعدَّلة، يجب عليك التوقف عن استخدام الخدمة.',
          ],
        },
        {
          title: '17. التواصل معنا',
          paragraphs: [
            'لأي أسئلة تتعلق بشروط الاستخدام هذه، يُرجى التواصل معنا:',
            'البريد الإلكتروني: contact@mluetenders.com',
            'نهدف للرد خلال 30 يومًا.',
          ],
        },
      ],
      crossLink: { label: 'اقرأ أيضًا سياسة الخصوصية', href: '/privacy-policy' },
    },
  },
}
