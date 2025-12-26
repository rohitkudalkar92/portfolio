import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      
      <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div class="mb-8">
          <h1 class="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">
            404
          </h1>
          <h2 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p class="text-dark max-w-md">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div class="flex gap-4">
          <a routerLink="/" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-black font-semibold btn-accent hover:opacity-90 transition-opacity">
            ← Back to Home
          </a>
          <a routerLink="/projects" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:opacity-90 transition-opacity">
            View Projects
          </a>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {}