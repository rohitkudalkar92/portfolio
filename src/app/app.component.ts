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
          <p class="mt-4 text-gray-300 max-w-xl">
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
        <p class="text-gray-300 mt-2 max-w-2xl">I love translating ideas into functional, maintainable code. Here's what I work with most:</p>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div *ngFor="let skill of skills" class="p-5 rounded-xl glass">
            <h3 class="font-semibold">{{ skill.title }}</h3>
            <p class="text-gray-300 text-sm mt-2">{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold">About Me</h2>
            <p class="text-gray-300 mt-3">I'm a curious engineer passionate about crafting intuitive interfaces and scalable systems.
              When I'm not coding, I explore new frameworks, travel, and brainstorm product ideas like <b>Mano Smṛti</b> —
              a cognitive training app I'm building.</p>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div *ngFor="let trait of traits" class="p-4 rounded-lg glass">
                <h4 class="font-semibold">{{ trait.title }}</h4>
                <p class="text-gray-300 text-sm mt-1">{{ trait.description }}</p>
              </div>
            </div>
          </div>

          <aside class="p-6 rounded-xl glass">
            <h3 class="font-semibold">Quick Info</h3>
            <div class="mt-4 text-sm text-gray-300 space-y-2">
              <div>📍 Mumbai, India</div>
              <div>💻 Senior Software Engineer</div>
              <div>⚙️ Angular • React • TypeScript</div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-8">
        <h2 class="text-2xl font-bold mb-4">Contact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">Let's Connect</h3>
            <p class="text-gray-300 text-sm mt-2">Want to collaborate or just say hi? Drop a quick message below.</p>
            <div class="mt-6 text-sm text-gray-300">
              <p>Feel free to reach out through any of the platforms listed on the right, or send me an email directly.</p>
            </div>
          </div>

          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">Find Me</h3>
            <div class="mt-4 text-sm text-gray-300 space-y-2">
              <div *ngFor="let contact of contacts">
                {{ contact.label }}: <a [href]="contact.url" target="_blank" class="text-blue-400 hover:underline">{{ contact.display }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-8 text-center text-gray-400 text-sm">© 2025 Rohit.dev — Built with ❤️ in Mumbai</footer>
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

  contacts = [
    { label: 'Email', url: 'mailto:hello@rohit.dev', display: 'hello@rohit.dev' },
    { label: 'GitHub', url: 'https://github.com/rohit-dev', display: 'github.com/rohit-dev' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/rohit', display: 'linkedin.com/in/rohit' },
    { label: 'X (Twitter)', url: 'https://x.com/rohit_dev', display: '@rohit_dev' },
    { label: 'Instagram', url: 'https://instagram.com/rohit.dev', display: '@rohit.dev' },
    { label: 'Discord', url: 'https://discord.gg/rohit', display: 'discord.gg/rohit' },
    { label: 'YouTube', url: 'https://youtube.com/@rohit', display: 'youtube.com/@rohit' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/rohit', display: 'stackoverflow.com/users/rohit' },
    { label: 'Dev.to', url: 'https://dev.to/rohit', display: 'dev.to/rohit' },
    { label: 'Medium', url: 'https://medium.com/@rohit', display: 'medium.com/@rohit' },
    { label: 'CodePen', url: 'https://codepen.io/rohit', display: 'codepen.io/rohit' },
    { label: 'WhatsApp', url: 'https://wa.me/919999999999', display: 'Chat on WhatsApp' }
  ];
}