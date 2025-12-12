import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      <h1 class="text-3xl font-bold mb-8">Featured Projects</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let project of projects" class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
          <div class="mb-4">
            <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover rounded-lg">
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
          <p class="text-sm opacity-80 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span *ngFor="let tech of project.technologies" class="flex items-center gap-1 text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
              <img [src]="getTechIcon(tech)" [alt]="tech" class="w-3 h-3">
              <span>{{ tech }}</span>
            </span>
          </div>
          <div class="flex gap-2">
            <a [routerLink]="['/project', project.id]" class="flex-1 text-center py-2 px-3 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-xs">
              Details
            </a>
            <a [href]="project.liveUrl" target="_blank" class="flex-1 text-center py-2 px-3 border border-glass-border rounded-lg hover:bg-glass-bg transition-colors text-xs">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    {
      id: 'house-medicine',
      title: 'House Medicine',
      description: 'Healthcare platform providing online medical consultations, prescription management, and health monitoring services. Built with modern web technologies for seamless user experience.',
      image: 'assets/house-medicin/house-medicin-2.png',
      technologies: ['React', 'Redux', 'TypeScript', 'Monorepo', 'Node.js', 'MySQL', 'WordPress'],
      liveUrl: 'https://housemedicine.com/',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular frontend, Node.js backend, and MongoDB database. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'task-management',
      title: 'Task Management App',
      description: 'React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern React hooks and Context API.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'Redux', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with Angular 17, featuring dark/light theme toggle, responsive design, and smooth animations. Showcases work experience and projects.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      technologies: ['Angular 17', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      liveUrl: 'https://rohit.dev',
      githubUrl: 'https://github.com/rohit/portfolio'
    },
    {
      id: 'weather-dashboard',
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Integrates with multiple weather APIs for accurate data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'cms-dashboard',
      title: 'CMS Dashboard',
      description: 'Content management system with role-based access control, rich text editor, and media management. Built for scalability and ease of use.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MySQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'social-media-app',
      title: 'Social Media App',
      description: 'Social networking platform with real-time messaging, post sharing, and user profiles. Features include image uploads, likes, comments, and friend connections.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    }
  ];

  private techIcons: { [key: string]: string } = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Angular 17': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'SCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    'API Integration': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
    'Monorepo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
  };

  getTechIcon(tech: string): string {
    return this.techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  }
}