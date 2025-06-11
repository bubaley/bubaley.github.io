import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Types for translations
export type Locale = 'en' | 'ru';

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [locale: string]: Translation;
}

// Default locale
const defaultLocale: Locale = 'ru';

// Create the locale store
function createLocaleStore() {
  const { subscribe, set } = writable<Locale>(defaultLocale);

  return {
    subscribe,
    set: (locale: Locale) => {
      if (browser) {
        localStorage.setItem('locale', locale);
      }
      set(locale);
    },
    init: () => {
      if (browser) {
        const stored = localStorage.getItem('locale') as Locale;
        if (stored && (stored === 'en' || stored === 'ru')) {
          set(stored);
        }
      }
    }
  };
}

export const locale = createLocaleStore();

// Import all translations
const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm Bubaley",
      title: 'Python Developer',
      description: 'Developer and technical leader with 6+ years of experience in IT. Built SaaS platforms from scratch, specialized in Python (Django/DRF) and Vue.js, designing architecture, managing teams.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },
    techStack: {
      title: 'Tech Stack',
      subtitle: 'Technologies and tools I work with to bring ideas to life'
    },
    openSource: {
      title: 'Open Source',
      subtitle: 'My contributions to the open developer community',
      viewAllProjects: 'View All Projects on GitHub'
    },
    about: {
      title: 'About Me',
      subtitle: 'Developer and technical leader who went from implementing 1C solutions to leading a development team and building SaaS platforms from scratch.',
      fullstackDev: 'Fullstack Developer',
      fullstackDesc: '6+ years of Python and Vue.js development. From backend to frontend, from architecture to deployment.',
      techLeader: 'Technical Leader',
      techLeaderDesc: 'Head of development department. Managing team, developing processes, planning architecture.',
      systemArchitect: 'System Architect',
      systemArchitectDesc: 'Designing and building SaaS platforms from scratch. DevOps, microservices, scaling.',
      systemDescription: 'I approach tasks systematically: from DevOps infrastructure to the final product. I can not only write code, but also build processes, develop people and achieve business goals.',
      learnMore: 'Learn More About Me',
      professionalExperience: 'Professional Experience',
      achievementsImpact: 'Achievements & Impact',
      beyondCode: 'Beyond Code',
      mission: 'Mission',
      missionDesc: 'To democratize access to cutting-edge developer tools and create inclusive tech communities.',
      philosophy: 'Philosophy',
      philosophyDesc: 'Great technology should be intuitive, well-documented, and supported by passionate communities.',
      growth: 'Growth',
      growthDesc: 'Continuously learning new technologies and sharing knowledge through mentoring and writing.'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'A collection of projects showcasing my skills in fullstack development, SaaS platform creation, and developer tools.',
      categories: {
        all: 'All Projects',
        web: 'SaaS & Web Apps',
        library: 'Libraries',
        desktop: 'CLI Tools'
      },
      learnMore: 'Learn More',
      viewLive: 'View Live Demo',
      viewGithub: 'View on GitHub',
      backToProjects: 'Back to Projects',
      featuredProject: 'Featured Project',
      technologiesUsed: 'Technologies Used',
      keyFeatures: 'Key Features',
      technicalChallenges: 'Technical Challenges',
      otherProjects: 'Other Projects',
      viewAllProjects: 'View All Projects'
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Always open to discussing new opportunities, interesting projects, or connecting with fellow developers and tech enthusiasts.',
      sendMessage: 'Send a Message',
      connectWithMe: 'Connect With Me',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
      quickInfo: 'Quick Info',
      basedIn: 'Based in Remote, Worldwide',
      availableFor: 'Available for new opportunities',
      respondsWithin: 'Usually responds within 24 hours',
      githubDesc: 'My open source projects and code',
      linkedinDesc: 'Professional connections',
      telegramDesc: 'Quick communication via Telegram',
      emailDesc: 'Send direct email'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О себе',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      greeting: 'Привет, я Целищев Кирилл',
      title: 'Personality',
      description: 'Разработчик и технический лидер с более чем 6-летним опытом в IT. Прошел путь от внедрения решений на базе 1С до руководства отделом разработки и построения SaaS-платформ с нуля. Специализируюсь на Python (Django/DRF) и Vue.js, проектирую архитектуру, управляю командой. Берусь за задачи системно: от DevOps-инфраструктуры до финального продукта. Умею не только писать код, но и строить процессы, развивать людей и закрывать бизнес-цели.',
      viewWork: 'Посмотреть работы',
      getInTouch: 'Связаться'
    },
    techStack: {
      title: 'Технологии',
      subtitle: 'Технологии и инструменты, с которыми я работаю для воплощения идей в жизнь'
    },
    openSource: {
      title: 'Open Source',
      subtitle: 'Мои вклады в открытое сообщество разработчиков',
      viewAllProjects: 'Посмотреть все проекты на GitHub'
    },
    about: {
      title: 'О себе',
      subtitle: 'Разработчик и технический лидер, который прошел путь от внедрения 1С до руководства отделом разработки и построения SaaS-платформ с нуля.',
      fullstackDev: 'Fullstack Developer',
      fullstackDesc: 'Более 6 лет разработки на Python и Vue.js. От бэкенда до фронтенда, от архитектуры до деплоя.',
      techLeader: 'Technical Leader',
      techLeaderDesc: 'Руководитель отдела разработки. Управляю командой, развиваю процессы, планирую архитектуру.',
      systemArchitect: 'System Architect',
      systemArchitectDesc: 'Проектирую и строю SaaS-платформы с нуля. DevOps, микросервисы, масштабирование.',
      systemDescription: 'Берусь за задачи системно: от DevOps-инфраструктуры до финального продукта. Умею не только писать код, но и строить процессы, развивать людей и закрывать бизнес-цели.',
      learnMore: 'Подробнее обо мне',
      professionalExperience: 'Профессиональный опыт',
      achievementsImpact: 'Достижения и влияние',
      beyondCode: 'Больше чем код',
      mission: 'Миссия',
      missionDesc: 'Демократизировать доступ к передовым инструментам разработки и создавать инклюзивные технологические сообщества.',
      philosophy: 'Философия',
      philosophyDesc: 'Великие технологии должны быть интуитивными, хорошо документированными и поддерживаемыми увлеченными сообществами.',
      growth: 'Развитие',
      growthDesc: 'Постоянно изучаю новые технологии и делюсь знаниями через наставничество и написание статей.'
    },
    projects: {
      title: 'Мои Проекты',
      subtitle: 'Коллекция проектов, демонстрирующих мои навыки в fullstack-разработке, создании SaaS-платформ и инструментов разработчика.',
      categories: {
        all: 'Все проекты',
        web: 'SaaS и веб-приложения',
        library: 'Библиотеки',
        desktop: 'CLI инструменты'
      },
      learnMore: 'Подробнее',
      viewLive: 'Посмотреть демо',
      viewGithub: 'Посмотреть на GitHub',
      backToProjects: 'Назад к проектам',
      featuredProject: 'Рекомендуемый проект',
      technologiesUsed: 'Используемые технологии',
      keyFeatures: 'Ключевые возможности',
      technicalChallenges: 'Технические вызовы',
      otherProjects: 'Другие проекты',
      viewAllProjects: 'Посмотреть все проекты'
    },
    contact: {
      title: 'Связаться со мной',
      subtitle: 'Всегда открыт для обсуждения новых возможностей, интересных проектов или общения с коллегами-разработчиками и энтузиастами технологий.',
      sendMessage: 'Отправить сообщение',
      connectWithMe: 'Связаться со мной',
      yourName: 'Ваше имя',
      emailAddress: 'Email адрес',
      subject: 'Тема',
      message: 'Сообщение',
      sendButton: 'Отправить сообщение',
      sending: 'Отправляю...',
      successMessage: 'Спасибо! Ваше сообщение было успешно отправлено. Я свяжусь с вами в ближайшее время.',
      errorMessage: 'Извините, произошла ошибка при отправке сообщения. Попробуйте еще раз или свяжитесь со мной напрямую.',
      quickInfo: 'Быстрая информация',
      basedIn: 'Работаю удаленно по всему миру',
      availableFor: 'Доступен для новых возможностей',
      respondsWithin: 'Обычно отвечаю в течение 24 часов',
      githubDesc: 'Мои open source проекты и код',
      linkedinDesc: 'Профессиональные связи',
      telegramDesc: 'Быстрая связь в Telegram',
      emailDesc: 'Отправить email напрямую'
    },
    common: {
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успех'
    }
  }
};

// Translation function
export function t(locale: Locale, path: string): string {
  const keys = path.split('.');
  let current: Translation | string = translations[locale];
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      console.warn(`Translation missing for "${path}" in locale "${locale}"`);
      return path;
    }
  }
  
  return typeof current === 'string' ? current : path;
} 