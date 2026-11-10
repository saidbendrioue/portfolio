import type { TechIconKey } from '../data/tech-icons';

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
    stack: {
      title: string;
      lead: string;
      filterAll: string;
      attributes: Array<{ id: string; label: string }>;
      items: Array<{
        id: string;
        left: TechIconKey;
        right: TechIconKey;
        outcome: string;
        detail: string;
        attributes: string[];
      }>;
    };
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
      'Said Bendrioue, fullstack Senior Java/Angular et Scrum Master. Systèmes critiques : vote électronique, La Poste, bancaire. CDI Nice / hybride.',
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
    lead: 'Java / Spring Boot / Angular : vote électronique, prestations sociales La Poste, parcours bancaires omnicanaux. CDI Nice / hybride.',
    ctaPrimary: 'Prendre contact',
    ctaSecondary: 'Télécharger le CV',
    photoAlt: 'Portrait de Said Bendrioue',
  },
  about: {
    title: 'À propos',
    body: [
      'Fullstack Senior Java/Angular et Scrum Master (8 ans) sur des systèmes où fiabilité, sécurité et conformité sont non négociables : vote électronique, données financières, bancaire.',
      'Chez Docaposte puis La Poste et Crédit Agricole : APIs Spring Boot, SPA Angular, CI/CD, animation Scrum. Ouvert aux postes CDI à Nice / hybride.',
    ],
    location: 'Nice / hybride',
  },
  projects: {
    title: 'Projets phares',
    lead: 'Quatre missions STAR : situation critique, actions fullstack, résultats défendables.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Fullstack Java/Angular · Scrum Master',
        period: 'déc. 2025 – août 2026',
        title: 'Vote électronique — élections professionnelles',
        summary:
          'Sur la plateforme e-Vote (échelle : 165 M+ électeurs, 2 000+ organisations), conception du cycle de vie des candidatures, contrôles des pièces électorales, exports CSV/PDF/ZIP, habilitations et notifications. Animation Scrum : vélocité d’équipe +15 %.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'Jira'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Fullstack · Scrum Master',
        period: 'août 2024 – mai 2025 · Docaposte',
        title: 'EAS — Espace Activités Sociales',
        summary:
          'Portail B2E des prestations sociales La Poste : API REST Spring Boot/JWT (dépôt → instruction → validation), SPA Angular (RxJS, NgRx), GED et contrôles RGPD sur IBAN / RH. Scrum Master en sprints de 2 semaines sur hébergement souverain.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'RGPD', 'GED'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Backend Java',
        period: 'jan. 2023 – août 2023',
        title: 'Timbre électronique',
        summary:
          'Microservices Spring Boot pour la commande, la génération et la vérification temps réel des timbres électroniques ; Kafka pour la traçabilité ; anti-fraude et règles tarifaires ; tests JUnit / Robot Framework et CI/CD avec métier, QA et DevOps.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Fullstack Java/Angular',
        period: 'mai 2022 – déc. 2022',
        title: 'Parcours omnicanal — changement d’adresse',
        summary:
          'Refonte nationale du parcours de mise à jour d’adresse : propagation sync/async vers le SI bancaire, validation postale, piste d’audit réglementaire. Qualité renforcée via JUnit/Mockito et gates SonarQube.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Aussi',
      items: [
        'Bilans Service (Docaposte, mai–nov. 2025): migration Oracle → PostgreSQL, Docker, CI/CD, accompagnement recette / MEP.',
        'Maison France Services (Docaposte, 2023–2024): APIs Spring Boot et formulaires Angular pour ~8 000 conseillers ; facilitation Scrum.',
        'Bouygues Construction IT (2019–2022): modernisation e-Doc Java\u00a06/GWT → Java\u00a011/Angular.',
      ],
    },
  },
  skills: {
    title: 'Compétences',
    lead: 'Socle de production, aligné sur le CV.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'API REST', 'Microservices', 'JWT', 'Hibernate', 'Kafka'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'React', 'TanStack Query'],
      },
      {
        label: 'Livraison',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'JUnit', 'SonarQube'],
      },
      {
        label: 'Contexte',
        items: ['PostgreSQL', 'Oracle', 'Redis', 'RGPD / CNIL', 'Scrum Master'],
      },
    ],
    stack: {
      title: 'Combinaisons production',
      lead: 'Quinze binômes éprouvés : chaque paire livre un résultat opérationnel concret.',
      filterAll: 'Toutes',
      attributes: [
        { id: 'scalable', label: 'Scalable' },
        { id: 'secure', label: 'Sécurisé' },
        { id: 'maintainable', label: 'Maintenable' },
        { id: 'observable', label: 'Observable' },
        { id: 'cloud-native', label: 'Cloud-native' },
      ],
      items: [
        {
          id: 'java-jfr',
          left: 'java',
          right: 'jfr',
          outcome: 'Profiler JVM',
          detail: 'Profiler, analyser et diagnostiquer les problèmes runtime avec Java Flight Recorder.',
          attributes: ['observable', 'maintainable'],
        },
        {
          id: 'spring-actuator',
          left: 'springboot',
          right: 'actuator',
          outcome: 'Santé & monitoring',
          detail: 'Health checks, métriques et insights opérationnels exposés par Spring Boot Actuator.',
          attributes: ['observable', 'cloud-native'],
        },
        {
          id: 'spring-oauth',
          left: 'springsecurity',
          right: 'oauth2',
          outcome: 'AuthN / AuthZ',
          detail: 'Contrôle d’accès enterprise standardisé via OAuth2 et OpenID Connect.',
          attributes: ['secure'],
        },
        {
          id: 'postgres-liquibase',
          left: 'postgresql',
          right: 'liquibase',
          outcome: 'Migrations de schéma',
          detail: 'Évolutions de schéma versionnées, reproductibles et auditables.',
          attributes: ['maintainable'],
        },
        {
          id: 'hibernate-postgres',
          left: 'hibernate',
          right: 'postgresql',
          outcome: 'ORM robuste',
          detail: 'Mapping objet-relationnel sur une base transactionnelle éprouvée.',
          attributes: ['maintainable', 'scalable'],
        },
        {
          id: 'postgres-kafka',
          left: 'postgresql',
          right: 'kafka',
          outcome: 'Outbox transactionnel',
          detail: 'Publication d’événements fiable et cohérente via le pattern Transactional Outbox.',
          attributes: ['scalable', 'maintainable'],
        },
        {
          id: 'kafka-idempotency',
          left: 'kafka',
          right: 'idempotency',
          outcome: 'Conso sans doublons',
          detail: 'Traitement idempotent des messages pour un comportement exactly-once-like.',
          attributes: ['scalable', 'secure'],
        },
        {
          id: 'redis-cache',
          left: 'redis',
          right: 'springcache',
          outcome: 'API faible latence',
          detail: 'Réponses plus rapides et charge base réduite grâce au cache Spring + Redis.',
          attributes: ['scalable'],
        },
        {
          id: 'resilience-micrometer',
          left: 'resilience4j',
          right: 'micrometer',
          outcome: 'Résilience & métriques',
          detail: 'Circuit breaker, retry et rate limiter instrumentés pour l’exploitation.',
          attributes: ['scalable', 'observable'],
        },
        {
          id: 'otel-grafana',
          left: 'opentelemetry',
          right: 'grafana',
          outcome: 'Observabilité E2E',
          detail: 'Collecte, visualisation et analyse des traces, métriques et logs.',
          attributes: ['observable', 'cloud-native'],
        },
        {
          id: 'junit-testcontainers',
          left: 'junit5',
          right: 'testcontainers',
          outcome: 'Tests d’intégration',
          detail: 'Tests réalistes avec de vraies dépendances dans des conteneurs isolés.',
          attributes: ['maintainable'],
        },
        {
          id: 'react-tanstack',
          left: 'react',
          right: 'tanstackquery',
          outcome: 'Data frontend',
          detail: 'Données serveur fiables, mises en cache et à jour dans React.',
          attributes: ['maintainable', 'scalable'],
        },
        {
          id: 'ts-openapi',
          left: 'typescript',
          right: 'openapi',
          outcome: 'API typée',
          detail: 'Contrats OpenAPI first et clients générés pour limiter les régressions.',
          attributes: ['maintainable', 'secure'],
        },
        {
          id: 'docker-gha',
          left: 'docker',
          right: 'githubactions',
          outcome: 'CI/CD automatisé',
          detail: 'Build, test et déploiement d’applications conteneurisées en pipeline.',
          attributes: ['cloud-native', 'maintainable'],
        },
        {
          id: 'k8s-spring',
          left: 'kubernetes',
          right: 'springboot',
          outcome: 'Déploiement cloud-native',
          detail: 'Applications Java scalables, résilientes et opérables sur Kubernetes.',
          attributes: ['cloud-native', 'scalable'],
        },
      ],
    },
  },
  contact: {
    title: 'Contact',
    lead: 'Ouvert aux postes CDI fullstack Java/Angular à Nice / hybride. Un email suffit.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Télécharger le CV (PDF)',
    cvNote: 'Le PDF correspond au CV LaTeX à jour (version visuelle).',
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
      'Said Bendrioue, Senior Fullstack Java/Angular and Scrum Master. Critical systems: e-voting, La Poste, banking. Permanent roles Nice / hybrid.',
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
    lead: 'Java / Spring Boot / Angular: e-voting, La Poste social benefits, omnichannel banking journeys. Open to permanent roles in Nice / hybrid.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'Download CV',
    photoAlt: 'Portrait of Said Bendrioue',
  },
  about: {
    title: 'About',
    body: [
      'Senior Fullstack Java/Angular engineer and Scrum Master (8 years) on systems where reliability, security, and compliance are non-negotiable: e-voting, financial data, banking.',
      'At Docaposte, then La Poste and Crédit Agricole: Spring Boot APIs, Angular SPAs, CI/CD, Scrum leadership. Targeting permanent roles in Nice / hybrid.',
    ],
    location: 'Nice / hybrid',
  },
  projects: {
    title: 'Featured projects',
    lead: 'Four STAR engagements: critical context, fullstack action, defendable outcomes.',
    items: [
      {
        client: 'Docaposte / Voxaly',
        role: 'Fullstack Java/Angular · Scrum Master',
        period: 'Dec 2025 – Aug 2026',
        title: 'Electronic voting — professional elections',
        summary:
          'On the e-Vote platform (scale: 165M+ voters, 2,000+ organizations): candidacy lifecycle, electoral document controls, CSV/PDF/ZIP exports, access rules and notifications. Scrum leadership: team velocity +15%.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'Jira'],
      },
      {
        client: 'Docaposte — EAS / La Poste',
        role: 'Fullstack · Scrum Master',
        period: 'Aug 2024 – May 2025 · Docaposte',
        title: 'EAS — Social Benefits Portal',
        summary:
          'B2E portal for La Poste social benefits: Spring Boot/JWT REST APIs (submit → review → approve), Angular SPA (RxJS, NgRx), document management and GDPR controls on IBAN / HR data. Scrum Master on 2-week sprints, sovereign hosting.',
        stack: ['Java 17', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'GDPR', 'ECM'],
      },
      {
        client: 'La Poste Groupe',
        role: 'Backend Java',
        period: 'Jan 2023 – Aug 2023',
        title: 'Electronic stamp platform',
        summary:
          'Spring Boot microservices for ordering, generating, and real-time verifying electronic stamps; Kafka for traceability; anti-fraud and tariff rules; JUnit / Robot Framework tests and CI/CD with product, QA, and DevOps.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Jenkins'],
      },
      {
        client: 'Crédit Agricole Technologies et Services',
        role: 'Fullstack Java/Angular',
        period: 'May 2022 – Dec 2022',
        title: 'Omnichannel address-change journey',
        summary:
          'Nationwide redesign of the address-update journey: sync/async propagation to core banking, postal validation, regulatory audit trail. Quality strengthened with JUnit/Mockito and SonarQube gates.',
        stack: ['Java', 'Spring Boot', 'Angular', 'Oracle', 'Jenkins', 'SonarQube', 'JUnit'],
      },
    ],
    also: {
      title: 'Also',
      items: [
        'Bilans Service (Docaposte, May–Nov 2025): Oracle → PostgreSQL migration, Docker, CI/CD, UAT / go-live support.',
        'Maison France Services (Docaposte, 2023–2024): Spring Boot APIs and Angular forms for ~8,000 advisors; Scrum facilitation.',
        'Bouygues Construction IT (2019–2022): e-Doc modernization Java\u00a06/GWT → Java\u00a011/Angular.',
      ],
    },
  },
  skills: {
    title: 'Skills',
    lead: 'Production toolkit, aligned with the CV.',
    groups: [
      {
        label: 'Backend',
        items: ['Java 17', 'Spring Boot', 'REST APIs', 'Microservices', 'JWT', 'Hibernate', 'Kafka'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'React', 'TanStack Query'],
      },
      {
        label: 'Delivery',
        items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'JUnit', 'SonarQube'],
      },
      {
        label: 'Context',
        items: ['PostgreSQL', 'Oracle', 'Redis', 'GDPR / CNIL', 'Scrum Master'],
      },
    ],
    stack: {
      title: 'Production combinations',
      lead: 'Fifteen proven pairings — each duo delivers a concrete operational outcome.',
      filterAll: 'All',
      attributes: [
        { id: 'scalable', label: 'Scalable' },
        { id: 'secure', label: 'Secure' },
        { id: 'maintainable', label: 'Maintainable' },
        { id: 'observable', label: 'Observable' },
        { id: 'cloud-native', label: 'Cloud-native' },
      ],
      items: [
        {
          id: 'java-jfr',
          left: 'java',
          right: 'jfr',
          outcome: 'JVM profiler',
          detail: 'Profile, analyze, and diagnose runtime issues with Java Flight Recorder.',
          attributes: ['observable', 'maintainable'],
        },
        {
          id: 'spring-actuator',
          left: 'springboot',
          right: 'actuator',
          outcome: 'Health & monitoring',
          detail: 'Health checks, metrics, and operational insights via Spring Boot Actuator.',
          attributes: ['observable', 'cloud-native'],
        },
        {
          id: 'spring-oauth',
          left: 'springsecurity',
          right: 'oauth2',
          outcome: 'AuthN / AuthZ',
          detail: 'Standards-based, enterprise-grade access control with OAuth2 and OpenID Connect.',
          attributes: ['secure'],
        },
        {
          id: 'postgres-liquibase',
          left: 'postgresql',
          right: 'liquibase',
          outcome: 'Schema migrations',
          detail: 'Version-controlled, reliable database schema changes.',
          attributes: ['maintainable'],
        },
        {
          id: 'hibernate-postgres',
          left: 'hibernate',
          right: 'postgresql',
          outcome: 'Robust ORM',
          detail: 'Object-relational mapping on a battle-tested transactional database.',
          attributes: ['maintainable', 'scalable'],
        },
        {
          id: 'postgres-kafka',
          left: 'postgresql',
          right: 'kafka',
          outcome: 'Transactional outbox',
          detail: 'Consistent, fault-tolerant event publishing via the Transactional Outbox pattern.',
          attributes: ['scalable', 'maintainable'],
        },
        {
          id: 'kafka-idempotency',
          left: 'kafka',
          right: 'idempotency',
          outcome: 'Duplicate-safe consumer',
          detail: 'Idempotent message handling for exactly-once-like processing.',
          attributes: ['scalable', 'secure'],
        },
        {
          id: 'redis-cache',
          left: 'redis',
          right: 'springcache',
          outcome: 'Low-latency API',
          detail: 'Faster responses and reduced database load with Spring Cache + Redis.',
          attributes: ['scalable'],
        },
        {
          id: 'resilience-micrometer',
          left: 'resilience4j',
          right: 'micrometer',
          outcome: 'Resilience & metrics',
          detail: 'Circuit breaker, retry, and rate limiter with operational metrics.',
          attributes: ['scalable', 'observable'],
        },
        {
          id: 'otel-grafana',
          left: 'opentelemetry',
          right: 'grafana',
          outcome: 'End-to-end observability',
          detail: 'Collect, visualize, and analyze traces, metrics, and logs.',
          attributes: ['observable', 'cloud-native'],
        },
        {
          id: 'junit-testcontainers',
          left: 'junit5',
          right: 'testcontainers',
          outcome: 'Integration testing',
          detail: 'Realistic tests with real dependencies in isolated containers.',
          attributes: ['maintainable'],
        },
        {
          id: 'react-tanstack',
          left: 'react',
          right: 'tanstackquery',
          outcome: 'Frontend data layer',
          detail: 'Reliable, cached, and up-to-date server state in React.',
          attributes: ['maintainable', 'scalable'],
        },
        {
          id: 'ts-openapi',
          left: 'typescript',
          right: 'openapi',
          outcome: 'Type-safe APIs',
          detail: 'Contract-first OpenAPI specs and generated clients.',
          attributes: ['maintainable', 'secure'],
        },
        {
          id: 'docker-gha',
          left: 'docker',
          right: 'githubactions',
          outcome: 'Automated CI/CD',
          detail: 'Build, test, and deploy containerized applications in pipeline.',
          attributes: ['cloud-native', 'maintainable'],
        },
        {
          id: 'k8s-spring',
          left: 'kubernetes',
          right: 'springboot',
          outcome: 'Cloud-native ops',
          detail: 'Scalable, resilient, operable Java applications on Kubernetes.',
          attributes: ['cloud-native', 'scalable'],
        },
      ],
    },
  },
  contact: {
    title: 'Contact',
    lead: 'Open to permanent fullstack Java/Angular roles in Nice / hybrid. An email is enough.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    cvLabel: 'Download CV (PDF)',
    cvNote: 'The PDF is the latest LaTeX visual resume.',
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
