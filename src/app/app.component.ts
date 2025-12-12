import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>

      <!-- Hero -->
      <section id="home" class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-24">
        <div class="md:col-span-7">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Crafting <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">Clean</span>
            &
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-yellow-200">Impactful</span>
            Interfaces
          </h1>
          <p class="mt-4 text-dark max-w-xl">
            I'm Rohit — a Senior Software Engineer from Mumbai specializing in front-end development with Angular and React.
            I love building fast, scalable, and user-friendly experiences that blend design and logic.
          </p>
          <div class="mt-6 flex gap-3">
            <a href="#services" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-black font-semibold btn-accent">Explore Skills →</a>
          </div>
        </div>
        <div class="md:col-span-5 flex justify-center md:justify-end">
          <div class="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl glass p-4">
            <img src="assets/rohit1.jpg" alt="Rohit portrait"
              class="absolute top-[-20px] right-[30px] w-56 md:w-64 rounded-xl shadow-2xl object-cover border-4 border-transparent rotate-6">
          </div>
        </div>
      </section>

      <!-- Expertise -->
      <section id="services" class="py-8">
        <h2 class="text-2xl font-bold">Expertise</h2>
        <p class="text-dark mt-2 max-w-2xl">I love translating ideas into functional, maintainable code. Here's what I work with most:</p>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div *ngFor="let skill of skills" class="p-5 rounded-xl glass">
            <h3 class="font-semibold">{{ skill.title }}</h3>
            <p class="text-dark text-sm mt-2">{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold">About Me</h2>
            <p class="text-dark mt-3">I'm a curious engineer passionate about crafting intuitive interfaces and scalable systems.
              When I'm not coding, I explore new frameworks, travel, and brainstorm product ideas like <b>Mano Smṛti</b> —
              a cognitive training app I'm building.</p>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div *ngFor="let trait of traits" class="p-4 rounded-lg glass">
                <h4 class="font-semibold">{{ trait.title }}</h4>
                <p class="text-dark text-sm mt-1">{{ trait.description }}</p>
              </div>
            </div>
          </div>

          <aside class="p-6 rounded-xl glass">
            <h3 class="font-semibold">Quick Info</h3>
            <div class="mt-4 text-sm text-dark space-y-3">
              <div class="flex items-center gap-2">
                <span>📍</span>
                <span>Mumbai, India (GMT+5:30)</span>
              </div>
              <div class="flex items-center gap-2">
                <span>💼</span>
                <span>Frontend Module Lead</span>
              </div>
              <div class="flex items-center gap-2">
                <span>⚙️</span>
                <span>Angular • React • TypeScript</span>
              </div>
              <div class="flex items-center gap-2">
                <span>🎯</span>
                <span>10+ Years Experience</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for Projects</span>
              </div>
              <div class="flex items-center gap-2">
                <span>🏆</span>
                <span>Frontend Architecture</span>
              </div>
              <div class="flex items-center gap-2">
                <span>📚</span>
                <span>Continuous Learner</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Timeline -->
      <section id="timeline" class="py-8">
        <h2 class="text-2xl font-bold mb-6">Work Timeline</h2>
        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-600"></div>
          <div class="space-y-8">
            <div *ngFor="let job of timeline" class="relative flex items-start gap-6">
              <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="flex-1 glass p-6 rounded-xl">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 class="font-semibold text-lg">{{ job.title }}</h3>
                  <span class="text-sm text-black px-3 py-1 rounded-full mt-2 md:mt-0" style="background-color: var(--accent)">{{ job.period }}</span>
                </div>
                <h4 class="font-medium text-indigo-400 mb-2">{{ job.company }}</h4>
                <p class="text-dark text-sm mb-3">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of job.technologies" class="flex items-center gap-1 text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
                    <img [src]="getTechIcon(tech)" [alt]="tech" class="w-4 h-4">
                    <span>{{ tech }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-8">
        <h2 class="text-2xl font-bold mb-4">Contact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">Let's Connect</h3>
            <p class="text-dark text-sm mt-2">Want to collaborate or just say hi? Drop a quick message below.</p>
            <div class="mt-6 text-sm text-dark">
              <p>Feel free to reach out through any of the platforms listed on the right, or send me an email directly.</p>
            </div>
          </div>

          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">Find Me</h3>
            <div class="mt-4 text-sm text-dark space-y-2">
              <div *ngFor="let contact of contacts">
                {{ contact.label }}: <a [href]="contact.url" target="_blank" class="text-blue-400 hover:underline">{{ contact.display }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-8 text-center text-dark text-sm">© 2025 Rohit.dev — Built with ❤️ in Mumbai</footer>
    </div>
  `
})
export class AppComponent {
  skills = [
    {
      title: 'Angular & React',
      description: 'Scalable architecture, modular code, and reusable components.'
    },
    {
      title: 'TypeScript & Clean Code',
      description: 'Strong typing, readability, and consistent structure.'
    },
    {
      title: 'UI / UX Focus',
      description: 'Bridging design with logic for seamless user experience.'
    },
    {
      title: 'Performance & Optimization',
      description: 'Lazy loading, code splitting, and data-driven performance tweaks.'
    }
  ];

  traits = [
    {
      title: 'Curiosity-Driven',
      description: 'Always exploring tech that simplifies human experience.'
    },
    {
      title: 'Frontend Architect',
      description: 'Balancing beauty and maintainability in every component.'
    },
    {
      title: 'Team Leader',
      description: 'Empowering teams with clarity, empathy, and code discipline.'
    },
    {
      title: 'Builder at Heart',
      description: 'I love bringing side projects to life from scratch.'
    }
  ];

  timeline = [
    {
      title: 'Frontend Module Lead',
      company: 'Fluid.live',
      period: 'Nov 2021 - Present',
      description: 'Leading frontend architecture and mentoring junior developers. Built scalable Angular applications serving 100K+ users. Implemented micro-frontend architecture reducing deployment time by 60%. Established coding standards and best practices across multiple development teams. Spearheaded migration from legacy systems to modern Angular 17 with improved performance metrics.',
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Material-UI', 'React', 'Node.js', 'MySQL', 'WordPress', 'HTML5', 'SCSS', 'ES6']
    },
    {
      title: 'Full Stack Developer',
      company: 'procedure.tech',
      period: 'June 2019 - Nov 2021',
      description: 'Developed responsive web applications and improved performance by 40%. Built complete applications from scratch with both frontend and backend development in an agile environment. Collaborated with cross-functional teams to deliver 15+ client projects on time and within budget. Implemented automated testing strategies resulting in 90% bug reduction in production. Optimized database queries and API endpoints improving overall system efficiency by 35%.',
      technologies: ['React', 'JavaScript', 'ES6', 'Redux', 'Material-UI', 'Jest', 'Angular', 'Node.js', 'MongoDB', 'Express', 'Bootstrap']
    },
    {
      title: 'Junior Developer',
      company: 'Coense Solutions Pvt. Ltd.',
      period: 'Dec 2016 - June 2019',
      description: 'Started career developing websites and learning modern web technologies. Gained experience in responsive design, API integration, and database management. Built custom WordPress themes and worked on e-commerce solutions using CodeIgniter framework. Developed 20+ responsive websites with cross-browser compatibility and mobile-first approach. Created RESTful APIs for client-server communication and integrated third-party payment gateways. Maintained and optimized MySQL databases ensuring data integrity and improved query performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'jQuery', 'PHP', 'MySQL', 'WordPress', 'React', 'Node.js', 'CodeIgniter', 'Bootstrap']
    }
  ];

  contacts = [
    { label: 'Email', url: 'mailto:rohitkudalkar92@gmail.com', display: 'rohitkudalkar92@gmail.com' },
    { label: 'GitHub', url: 'https://github.com/rohitkudalkar92', display: 'https://github.com/rohitkudalkar92' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rohit-kudalkar-225841129', display: 'https://www.linkedin.com/in/rohit-kudalkar-225841129/' },
    { label: 'Instagram', url: 'https://instagram.com/rohitkudalkar23', display: 'https://instagram.com/rohitkudalkar23' },
    { label: 'WhatsApp', url: 'https://wa.me/919999999999', display: 'Chat on WhatsApp' }
  ];

  private techIcons: { [key: string]: string } = {
    'Angular 17': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'RxJS': 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
    'NgRx': 'https://ngrx.io/assets/images/badge.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
    'SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'ES6': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  };

  getTechIcon(tech: string): string {
    return this.techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  }
}