import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      
      <div *ngIf="project" class="mt-8">
        <button (click)="goBack()" class="mb-6 flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
          ← Back to Projects
        </button>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img [src]="project.image" [alt]="project.title" class="w-full rounded-xl shadow-lg mb-4">
            <div *ngIf="project.gallery" class="grid grid-cols-2 gap-2">
              <img *ngFor="let img of project.gallery" [src]="img" [alt]="project.title" class="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" (click)="setMainImage(img)">
            </div>
          </div>
          
          <div>
            <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
            <p class="text-lg opacity-90 mb-6">{{ project.description }}</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" class="flex items-center gap-1 text-sm px-3 py-2 bg-glass-bg border border-glass-border rounded-lg">
                  <img [src]="getTechIcon(tech)" [alt]="tech" class="w-4 h-4">
                  <span>{{ tech }}</span>
                </span>
              </div>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">Key Features</h3>
              <ul class="space-y-2">
                <li *ngFor="let feature of project.features" class="flex items-start gap-2">
                  <span class="text-green-400 mt-1">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div class="flex gap-4">
              <a [href]="project.liveUrl" target="_blank" class="flex-1 text-center py-3 px-6 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                View Live Site
              </a>
              <a [href]="project.githubUrl" target="_blank" class="flex-1 text-center py-3 px-6 border border-glass-border rounded-lg hover:bg-glass-bg transition-colors">
                View Code
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-12">
          <h3 class="text-2xl font-semibold mb-6">Project Details</h3>
          <div class="glass p-6 rounded-xl">
            <p class="text-lg leading-relaxed">{{ project.longDescription }}</p>
          </div>
        </div>
      </div>
      
      <div *ngIf="!project" class="text-center py-12">
        <h2 class="text-2xl font-semibold mb-4">Project Not Found</h2>
        <button (click)="goBack()" class="text-indigo-400 hover:underline">← Back to Projects</button>
      </div>
    </div>
  `
})
export class ProjectDetailComponent implements OnInit {
  project: any = null;
  
  private projects = [
    {
      id: 'house-medicine',
      title: 'House Medicine',
      description: 'Healthcare platform providing online medical consultations, prescription management, and health monitoring services.',
      longDescription: 'House Medicine is a comprehensive healthcare platform that revolutionizes the way patients access medical care. The platform features a user-friendly interface for booking appointments, managing prescriptions, and accessing health records. Built with React and Redux for robust state management in a monorepo architecture, it integrates with Node.js backend services and MySQL database for reliable data management. The platform includes features like real-time chat with doctors, prescription tracking, health monitoring dashboards, and secure patient data management.',
      image: 'assets/house-medicin/house-medicin-2.png',
      gallery: [
        'assets/house-medicin/house-medicin-1.png',
        'assets/house-medicin/house-medicin-2.png',
        'assets/house-medicin/house-medicin-3.png',
        'assets/house-medicin/house-medicin-4.png',
        'assets/house-medicin/house-medicin-5.png',
        'assets/house-medicin/house-medicin-6.png'
      ],
      technologies: ['React', 'Redux', 'TypeScript', 'Monorepo', 'Node.js', 'MySQL', 'WordPress'],
      features: [
        'Online medical consultations',
        'Prescription management system',
        'Patient health records',
        'Real-time chat with doctors',
        'Appointment booking system',
        'Health monitoring dashboard',
        'Secure data encryption'
      ],
      liveUrl: 'https://housemedicine.com/',
      githubUrl: 'https://github.com/rohit'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular frontend, Node.js backend, and MongoDB database.',
      longDescription: 'A modern e-commerce platform built from the ground up with scalability and performance in mind. Features include comprehensive product catalog management, secure user authentication, shopping cart functionality, and integrated payment processing. The platform is designed to handle high traffic loads and provides an intuitive admin dashboard for managing products, orders, and customer data.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Product catalog management',
        'User authentication & authorization',
        'Shopping cart & checkout',
        'Payment gateway integration',
        'Order tracking system',
        'Admin dashboard',
        'Responsive design'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/rohit'
    }
  ];

  private techIcons: { [key: string]: string } = {
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Monorepo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === projectId);
  }

  getTechIcon(tech: string): string {
    return this.techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  setMainImage(imageSrc: string) {
    if (this.project) {
      this.project.image = imageSrc;
    }
  }
}