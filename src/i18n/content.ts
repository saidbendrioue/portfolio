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
      'Portfolio de Said Bendrioue, développeur Fullstack Senior Java/Angular et Scrum Master à Nice. Systèmes critiques, vote électronique, bancaire.',
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
    headline: 'Des systèmes critiques, fiables et conformes.',
    lead: 'Java / Spring Boot / Angular — vote électronique, prestations sociales et parcours bancaires omnicanaux.',
    ctaPrimary: 'Me contacter',
    ctaSecondary: 'Télécharger le CV',
    photoAlt: 'Portrait de Said Bendrioue',
  },
  about: {
    title: 'À propos',
    body: [
      'Développeur Fullstack Senior avec 7 ans d’expérience, spécialisé dans la conception de systèmes critiques à haute disponibilité, forte sécurité et conformité réglementaire (vote électronique, données financières, secteur bancaire).',
      'Expert de l’écosystème Java / Spring Boot et des architectures Angular / TypeScript, avec une maîtrise éprouvée des migrations de bases à forte volumétrie et des pipelines CI/CD. Scrum Master reconnu pour fédérer des équipes autour d’exigences de production strictes (RGPD, CNIL).',
    ],
    location: 'Basé à Nice, France',
  },
  projects: {
    title: 'Projets phares',
    lead: 'Quatre missions où fiabilité, sécurité et livraison Agile ont fait la différence.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Développeur Fullstack Java/Angular · Scrum Master',
        period: '08/2023 – aujourd’hui',
        title: 'Vote électronique — élections professionnelles',
        summary:
          'Plateforme cloud de confiance numérique pour les scrutins de la fonction publique (165 M+ électeurs, 2 000+ organisations). Architecture des modules critiques du cycle électoral (émargement, urne chiffrée, dépouillement), conformité CNIL/RGPD, résilience DDoS, et pilotage Scrum (+15 % de vélocité).',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'TLS', 'GitLab CI/CD'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Développeur Fullstack · Scrum Master',
        period: 'Au sein de Docaposte / Voxaly',
        title: 'EAS — Espace Activités Sociales',
        summary:
          'Portail B2E sécurisé des prestations sociales La Poste (Chèque-Vacances, CESU, Chèque Culture). API REST sécurisées (JWT), SPA Angular (RxJS, NgRx), workflow Front/Back-Office, GED et conformité RGPD sur données sensibles (IBAN, RH).',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'RGPD', 'GED'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Développeur Backend Java',
        period: '01/2023 – 07/2023',
        title: 'Timbre électronique',
        summary:
          'Plateforme nationale de commande et de génération de timbres électroniques. Microservices Spring Boot, API REST et Kafka pour fiabilité et traçabilité ; tests Robot Framework / JUnit ; CI/CD et collaboration métier, QA et DevOps.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Développeur Fullstack Java/Angular',
        period: '05/2022 – 12/2022',
        title: 'Parcours omnicanal — changement d’adresse',
        summary:
          'Refonte nationale du parcours de mise à jour d’adresse (squad Clients, Offres, Liens). Propagation synchrone/asynchrone vers le SI bancaire, validation postale, audit réglementaire, couverture de tests > 90 % et qualité SonarQube.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Aussi',
      items: [
        'Bilans Service (Docaposte) — migration Oracle → PostgreSQL, modernisation du portail Vega NextGen, CI/CD Jenkins/GitLab.',
        'Bouygues Construction IT — modernisation e-Doc (GED) Java 6/GWT → Java 11/Angular pour le pilotage mondial des chantiers.',
      ],
    },
  },
  skills: {
    title: 'Compétences',
    lead: 'Un socle fullstack orienté production, sécurité et livraison continue.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Hibernate', 'API REST', 'Kafka', 'ActiveMQ', 'Elasticsearch'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'HTML', 'SCSS'],
      },
      {
        label: 'Architecture & tests',
        items: ['Microservices', 'CQRS', 'Event Sourcing', 'JUnit 5', 'Mockito', 'SonarQube'],
      },
      {
        label: 'DevOps & données',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'PostgreSQL', 'Oracle', 'SQL Server'],
      },
      {
        label: 'Sécurité & Agile',
        items: ['TLS', 'RGPD', 'CNIL', 'Scrum Master', 'Jira', 'Confluence'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Ouvert aux opportunités CDI et missions freelance. Écrivons-nous.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Télécharger le CV (PDF)',
    cvNote: 'Le CV PDF contient les coordonnées complètes.',
  },
  footer: {
    rights: 'Said Bendrioue — Portfolio',
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
      'Portfolio of Said Bendrioue, Senior Fullstack Java/Angular developer and Scrum Master based in Nice. Critical systems, e-voting, banking.',
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
    headline: 'Critical systems built for trust and uptime.',
    lead: 'Java / Spring Boot / Angular — e-voting, social benefits platforms, and omnichannel banking journeys.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'Download CV',
    photoAlt: 'Portrait of Said Bendrioue',
  },
  about: {
    title: 'About',
    body: [
      'Senior Fullstack developer with 7 years of experience designing high-availability, security-first systems under regulatory constraints (e-voting, financial data, banking).',
      'Deep expertise in Java / Spring Boot and Angular / TypeScript architectures, large-scale database migrations, and CI/CD pipelines. Trusted Scrum Master who aligns teams around strict production and compliance requirements (GDPR, CNIL).',
    ],
    location: 'Based in Nice, France',
  },
  projects: {
    title: 'Featured projects',
    lead: 'Four engagements where reliability, security, and Agile delivery mattered most.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Fullstack Java/Angular Developer · Scrum Master',
        period: '08/2023 – present',
        title: 'Electronic voting — professional elections',
        summary:
          'Trusted digital cloud platform for public-sector ballots (165M+ voters, 2,000+ client organizations). Critical electoral modules (check-in, encrypted ballot box, counting), CNIL/GDPR compliance, DDoS resilience, and Scrum leadership (+15% velocity).',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'TLS', 'GitLab CI/CD'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Fullstack Developer · Scrum Master',
        period: 'Within Docaposte / Voxaly',
        title: 'EAS — Social Benefits Portal',
        summary:
          'Secure B2E portal for La Poste social benefits (holiday vouchers, CESU, culture vouchers). Secured REST APIs (JWT), Angular SPA (RxJS, NgRx), front/back-office workflows, document management, and GDPR controls on sensitive data.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'GDPR', 'ECM'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Backend Java Developer',
        period: '01/2023 – 07/2023',
        title: 'Electronic stamp platform',
        summary:
          'National platform for ordering and generating electronic stamps. Spring Boot microservices, REST APIs and Kafka for reliability and traceability; Robot Framework / JUnit tests; CI/CD with product, QA, and DevOps partners.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Fullstack Java/Angular Developer',
        period: '05/2022 – 12/2022',
        title: 'Omnichannel address-change journey',
        summary:
          'Nationwide redesign of the customer address-update journey. Sync/async propagation to the core banking SI, postal validation, regulatory audit trail, >90% unit-test coverage, and SonarQube quality gates.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Also',
      items: [
        'Bilans Service (Docaposte) — Oracle → PostgreSQL migration, Vega NextGen portal modernization, Jenkins/GitLab CI/CD.',
        'Bouygues Construction IT — e-Doc (ECM) modernization from Java 6/GWT to Java 11/Angular for global worksite governance.',
      ],
    },
  },
  skills: {
    title: 'Skills',
    lead: 'A production-minded fullstack toolkit centered on security and continuous delivery.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Hibernate', 'REST APIs', 'Kafka', 'ActiveMQ', 'Elasticsearch'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'HTML', 'SCSS'],
      },
      {
        label: 'Architecture & testing',
        items: ['Microservices', 'CQRS', 'Event Sourcing', 'JUnit 5', 'Mockito', 'SonarQube'],
      },
      {
        label: 'DevOps & data',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'PostgreSQL', 'Oracle', 'SQL Server'],
      },
      {
        label: 'Security & Agile',
        items: ['TLS', 'GDPR', 'CNIL', 'Scrum Master', 'Jira', 'Confluence'],
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Open to permanent roles and freelance engagements. Let’s talk.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Download CV (PDF)',
    cvNote: 'The PDF CV includes full contact details.',
  },
  footer: {
    rights: 'Said Bendrioue — Portfolio',
  },
};

export const contentByLocale: Record<Locale, Content> = { fr, en };

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // includes trailing slash
  const cleaned = path.replace(/^\//, '');
  return `${base}${cleaned}`;
}

export function localizeHref(locale: Locale, hash: string): string {
  const path = locale === 'fr' ? '/' : '/en/';
  return withBase(`${path.replace(/^\//, '')}${hash}`);
}
