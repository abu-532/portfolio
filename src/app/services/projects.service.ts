import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  number: string;
  icon: string;
  title: string;
  description: string;
  contributions: string[];
  techStack: string[];
  image: string;
  highlight: boolean;
  github?: string;
  live?: string;
  achievement?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      number: '01.',
      icon: 'fa-solid fa-network-wired',
      title: 'Enterprise Networking & IT Services Platform',
      description:
        'Large-scale enterprise web application for networking services, customer onboarding, service feasibility, and operational workflows across multiple business modules.',
      contributions: [
        'Developed complex Angular modules and reusable UI components',
        'Built dynamic multi-step forms with advanced validations',
        'Integrated REST APIs and third-party services',
        'Improved application performance and maintainability',
        'Resolved production issues and enhanced existing features',
        'Collaborated with backend developers, QA engineers, and designers',
      ],
      techStack: ['Angular 15', 'Angular Material', 'Bootstrap', 'TypeScript', 'REST APIs', 'GitHub'],
      image: 'assets/images/project-enterprise.png',
      highlight: false,
    },
    {
      id: 2,
      number: '02.',
      icon: 'fa-solid fa-laptop-code',
      title: 'My Portfolio Website',
      description:
        'A modern developer portfolio showcasing experience, technical skills, and featured projects with responsive design and smooth user interactions.',
      contributions: [
        'Built a responsive portfolio using Angular',
        'Designed reusable components and clean architecture',
        'Implemented smooth animations and interactive UI',
        'Optimized application performance',
        'Deployed the portfolio on GitHub Pages',],
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', "GitHub", 'GitHub Pages'],
      image: 'assets/images/project-personal-portfolio.png',
      highlight: false,
    },

    {
      id: 3,
      number: '03.',
      icon: 'fa-solid fa-building',
      title: 'Company Official Website',
      description:
        'Developed the company’s official website to showcase business services, company information, and enhance online presence with a responsive user experience across all devices.',
      contributions: [
        'Built reusable Angular components',
        'Developed responsive layouts',
        'Implemented modern UI designs',
        'Ensured cross-browser compatibility',
        'Assisted with deployment and maintenance',
      ],
      techStack: ['Angular', 'Bootstrap', 'Angular Material', 'Git', 'GitHub Pages'],
      image: 'assets/images/project-corporate.png',
      highlight: false,
    },
    {
      id: 4,
      number: '04.',
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Equipment Rental Management System',
      description:
        'Backend application for managing equipment rentals, authentication, inventory, and business operations with secure JWT-based access control.',
      contributions: [
        'Developed secure REST APIs',
        'Implemented JWT authentication and authorization',
        'Built CRUD modules and business workflows',
        'Integrated MongoDB using Mongoose',
        'Optimized backend performance and security',
        'collaborated with team members to implement CI/CD pipelines using Jenkins for automated deployment',
      ],
      techStack: ['Node.js', 'NestJS', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'Jenkins', 'GitHub'],
      image: 'assets/images/project-rental.png',
      highlight: false,
    },
    {
      id: 5,
      number: '05.',
      icon: 'fa-solid fa-graduation-cap',
      title: 'Educational Examination Portal',
      description:
        'Web-based educational portal providing examination information, announcements, and dynamic content management for students and staff.',
      contributions: [
        'Developed custom pages using Elementor',
        'Implemented interactive functionality with jQuery',
        'Optimized responsive layouts',
        'Managed content updates and publishing',
      ],
      techStack: ['WordPress', 'Elementor', 'jQuery', 'Contact Form 7'],
      image: 'assets/images/project-exam.png',
      highlight: false,
    },
    {
      id: 6,
      number: '06.',
      icon: 'fa-solid fa-heart-pulse',
      title: 'Cancer Awareness Platform',
      description:
        'A responsive web platform designed to provide educational resources and awareness about cancer through an accessible and compassionate user experience.',
      contributions: [
        'Developed responsive web pages',
        'Built reusable UI components',
        'Improved accessibility and responsiveness',
        'Worked closely with designers to enhance user experience',
      ],
      techStack: ['Angular 17', 'Tailwind CSS', 'GitHub'],
      image: 'assets/images/project-cancer.png',
      highlight: false,
    },
    {
      id: 7,
      number: '07.',
      icon: 'fa-solid fa-school',
      title: 'Educational & Cultural Institute Website',
      description:
        'Institutional website supporting admissions, events, announcements, and content management for an educational and cultural organisation.',
      contributions: [
        'Customized WordPress themes and layouts',
        'Developed dynamic pages',
        'Managed website content',
        'Enhanced usability and responsiveness',
      ],
      techStack: ['WordPress', 'PHP', 'Custom Theme', 'Elementor', 'Contact Form 7'],
      image: 'assets/images/project-corporate.png',
      highlight: false,
    },
    {
      id: 8,
      number: '08.',
      icon: 'fa-solid fa-pen-nib',
      title: 'Client Blogging & Content Management Platform',
      description:
        'A content-driven blogging platform developed for a client, enabling article publishing, media management, and website customization with an intuitive content management experience.',
      contributions: [
        'Developed and customized WordPress layouts using Elementor',
        'Managed content publishing workflows and media organization',
        'Implemented client-requested enhancements and UI improvements',
        'Maintained website performance and usability across devices',
      ],
      techStack: ['WordPress', 'Elementor'],
      image: 'assets/images/project-portfolio.png',
      highlight: false,
      achievement: 'Recognized by the client for my contributions, with my name featured on the website\'s About Us page as an acknowledgment of my work.',
    },
  ];

  getFeaturedProjects(): Project[] {
    return this.projects.slice(0, 4);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
