import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { GradientTextComponent } from '../gradient-text/gradient-text.component';
import { DescriptionTextComponent } from '../../shared/components/description-text/description-text.component';
import { ButtonComponent, ButtonVariant } from '../button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, GradientTextComponent, DescriptionTextComponent, ButtonComponent],
  template: `
    <div class="max-w-6xl 2xl:max-w-7xl mx-auto py-3">
      <app-header></app-header>
      
      <div class="flex flex-col items-center justify-center min-h-[60vh] text-center p-5">
        <div class="mb-8">
          <h1 class="text-9xl font-bold">
            <app-gradient-text text="404" gradientClass="from-indigo-300 to-pink-400"></app-gradient-text>
          </h1>
          <h2 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
          <app-description-text 
            text="Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL." 
            customClass="text-dark max-w-md">
          </app-description-text>
        </div>
        
        <div class="flex gap-4">
          <app-button routerLink="/" [variant]="ButtonVariant.ACCENT" text="Back to Home"></app-button>
          <app-button (click)="goBack()" [variant]="ButtonVariant.SECONDARY" text="Go to Previous Page"></app-button>
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {
  ButtonVariant = ButtonVariant;
  
  constructor(private location: Location) {}
  
  goBack(): void {
    this.location.back();
  }
}