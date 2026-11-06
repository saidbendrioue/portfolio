export type Locale = 'fr' | 'en';

export type Content = {
  locale: Locale;
  otherLocale: Locale;
  otherLocaleHref: string;
  otherLocaleLabel: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    cv: string;
  };
  hero: {
    brand: string;
    role: string;
    headline: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  about: {
    title: string;
    body: string[];
    location: string;
  };
  projects: {
    title: string;
    lead: string;
    items: Array<{
      client: string;
      role: string;
      period: string;
      title: string;
      summary: string;
      stack: string[];
    }>;
    also: {
      title: string;
      items: string[];
    };
  };
  skills: {
    title: string;
    lead: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    linkedinLabel: string;
    cvLabel: string;
    cvNote: string;
  };
  footer: {
    rights: string;
  };
};

const fr: Content = {
  locale: 'fr',
  otherLocale: 'en',
  otherLocaleHref: '/en/',
  otherLocaleLabel: 'EN',
  meta: {
    title: 'Said Bendrioue — Développeur Fullstack Senior',
    description:
      'Said Bendrioue, développeur Fullstack Senior Java/Angular et Scrum Master à Nice. Systèmes critiques : vote électronique, La Poste, bancaire.',
  },
  nav: {
    about: 'À propos',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    cv: 'CV PDF',
  },
  hero: {
    brand: 'Said Bendrioue',
    role: 'Développeur Fullstack Senior · Scrum Master',
    headline: 'Systèmes critiques, tenus en production.',
    lead: 'Java / Spring Boot / Angular — vote électronique, prestations sociales La Poste, parcours bancaires omnicanaux.',
    ctaPrimary: 'Prendre contact',
    ctaSecondary: 'Télécharger le CV',
    photoAlt: 'Portrait de Said Bendrioue',
  },
  about: {
    title: 'À propos',
    body: [
      'Fullstack senior (7 ans) sur des systèmes où la panne n’est pas une option : haute disponibilité, sécurité et conformité (vote électronique, données financières, bancaire).',
      'Socle Java / Spring Boot et Angular / TypeScript, migrations de bases à forte volumétrie, CI/CD. Scrum Master pour des équipes sous contraintes RGPD / CNIL. Ouvert au CDI (Nice / hybride) et aux missions freelance.',
    ],
    location: 'Nice, France',
  },
  projects: {
    title: 'Projets phares',
    lead: 'Quatre missions où fiabilité et conformité ont pesé autant que la livraison.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Fullstack Java/Angular · Scrum Master',
        period: '08/2023 – aujourd’hui',
        title: 'Vote électronique — élections professionnelles',
        summary:
          'Plateforme de confiance numérique pour les scrutins de la fonction publique (échelle : 165 M+ électeurs, 2 000+ organisations). Modules critiques du cycle électoral (émargement, urne chiffrée, dépouillement), conformité CNIL/RGPD, résilience sous charge et DDoS, animation Scrum de l’équipe.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'TLS', 'GitLab CI/CD'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Fullstack · Scrum Master',
        period: '2023–2024 · même période Docaposte',
        title: 'EAS — Espace Activités Sociales',
        summary:
          'Portail B2E des prestations sociales La Poste (Chèque-Vacances, CESU, Chèque Culture). API REST sécurisées (JWT), SPA Angular (RxJS, NgRx), workflow Front/Back-Office, GED et contrôles RGPD sur données sensibles (IBAN, RH).',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'RGPD', 'GED'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Backend Java',
        period: '01/2023 – 07/2023',
        title: 'Timbre électronique',
        summary:
          'Plateforme nationale de commande et de génération de timbres électroniques. Microservices Spring Boot, API REST et Kafka pour fiabilité et traçabilité ; tests Robot Framework / JUnit ; CI/CD avec métier, QA et DevOps.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Fullstack Java/Angular',
        period: '05/2022 – 12/2022',
        title: 'Parcours omnicanal — changement d’adresse',
        summary:
          'Refonte nationale du parcours de mise à jour d’adresse. Propagation synchrone/asynchrone vers le SI bancaire, validation postale, piste d’audit réglementaire, couverture de tests > 90 % et gates SonarQube.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Aussi',
      items: [
        'Bilans Service (Docaposte) — migration Oracle → PostgreSQL, portail Vega NextGen, CI/CD Jenkins/GitLab.',
        'Bouygues Construction IT — modernisation e-Doc (GED) Java 6/GWT → Java 11/Angular.',
      ],
    },
  },
  skills: {
    title: 'Compétences',
    lead: 'Ce qui sert vraiment en production — pas un catalogue.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Hibernate', 'API REST', 'Kafka', 'PostgreSQL', 'Oracle'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
      },
      {
        label: 'Livraison',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'JUnit 5', 'SonarQube'],
      },
      {
        label: 'Contexte',
        items: ['Microservices', 'RGPD / CNIL', 'TLS', 'Scrum Master'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Ouvert au CDI (Nice / hybride) et aux missions freelance. Un email suffit.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Télécharger le CV (PDF)',
    cvNote: 'Le PDF inclut les coordonnées complètes.',
  },
  footer: {
    rights: 'Said Bendrioue',
  },
};

const en: Content = {
  locale: 'en',
  otherLocale: 'fr',
  otherLocaleHref: '/',
  otherLocaleLabel: 'FR',
  meta: {
    title: 'Said Bendrioue — Senior Fullstack Developer',
    description:
      'Said Bendrioue, Senior Fullstack Java/Angular developer and Scrum Master in Nice. Critical systems: e-voting, La Poste, banking.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    cv: 'CV PDF',
  },
  hero: {
    brand: 'Said Bendrioue',
    role: 'Senior Fullstack Developer · Scrum Master',
    headline: 'Critical systems, kept in production.',
    lead: 'Java / Spring Boot / Angular — e-voting, La Poste social benefits, omnichannel banking journeys.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'Download CV',
    photoAlt: 'Portrait of Said Bendrioue',
  },
  about: {
    title: 'About',
    body: [
      'Senior fullstack engineer (7 years) on systems where downtime is not an option: high availability, security, and regulatory compliance (e-voting, financial data, banking).',
      'Java / Spring Boot and Angular / TypeScript, large-scale database migrations, CI/CD. Scrum Master for teams under GDPR / CNIL constraints. Open to permanent roles (Nice / hybrid) and freelance engagements.',
    ],
    location: 'Nice, France',
  },
  projects: {
    title: 'Featured projects',
    lead: 'Four engagements where reliability and compliance weighed as much as delivery.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Fullstack Java/Angular · Scrum Master',
        period: '08/2023 – present',
        title: 'Electronic voting — professional elections',
        summary:
          'Trusted digital platform for public-sector ballots (platform scale: 165M+ voters, 2,000+ organizations). Critical electoral modules (check-in, encrypted ballot box, counting), CNIL/GDPR compliance, load and DDoS resilience, Scrum leadership for the team.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'TLS', 'GitLab CI/CD'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Fullstack · Scrum Master',
        period: '2023–2024 · same Docaposte tenure',
        title: 'EAS — Social Benefits Portal',
        summary:
          'B2E portal for La Poste social benefits (holiday vouchers, CESU, culture vouchers). Secured REST APIs (JWT), Angular SPA (RxJS, NgRx), front/back-office workflows, document management, and GDPR controls on sensitive data.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'GDPR', 'ECM'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Backend Java',
        period: '01/2023 – 07/2023',
        title: 'Electronic stamp platform',
        summary:
          'National platform for ordering and generating electronic stamps. Spring Boot microservices, REST APIs and Kafka for reliability and traceability; Robot Framework / JUnit tests; CI/CD with product, QA, and DevOps.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Fullstack Java/Angular',
        period: '05/2022 – 12/2022',
        title: 'Omnichannel address-change journey',
        summary:
          'Nationwide redesign of the customer address-update journey. Sync/async propagation to core banking, postal validation, regulatory audit trail, >90% unit-test coverage, SonarQube gates.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Also',
      items: [
        'Bilans Service (Docaposte) — Oracle → PostgreSQL migration, Vega NextGen portal, Jenkins/GitLab CI/CD.',
        'Bouygues Construction IT — e-Doc (ECM) modernization Java 6/GWT → Java 11/Angular.',
      ],
    },
  },
  skills: {
    title: 'Skills',
    lead: 'What actually ships in production — not a laundry list.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Hibernate', 'REST APIs', 'Kafka', 'PostgreSQL', 'Oracle'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
      },
      {
        label: 'Delivery',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'JUnit 5', 'SonarQube'],
      },
      {
        label: 'Context',
        items: ['Microservices', 'GDPR / CNIL', 'TLS', 'Scrum Master'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Open to permanent roles (Nice / hybrid) and freelance work. An email is enough.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Download CV (PDF)',
    cvNote: 'The PDF includes full contact details.',
  },
  footer: {
    rights: 'Said Bendrioue',
  },
};

export const contentByLocale: Record<Locale, Content> = { fr, en };

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const cleaned = path.replace(/^\//, '');
  return `${base}${cleaned}`;
}

export function localizeHref(locale: Locale, hash: string): string {
  const path = locale === 'fr' ? '/' : '/en/';
  return withBase(`${path.replace(/^\//, '')}${hash}`);
}
