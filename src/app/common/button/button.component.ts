import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export enum ButtonVariant {
  ACCENT = 'accent',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DETAILS = 'details'
}

export enum ButtonSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg'
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a *ngIf="routerLink; else hrefTemplate" 
       [routerLink]="routerLink" 
       [class]="getClasses()">
      {{ text }}
      <svg *ngIf="variant === ButtonVariant.DETAILS" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </a>
    
    <ng-template #hrefTemplate>
      <a *ngIf="href; else buttonTemplate" 
         [href]="href" 
         [target]="target"
         [class]="getClasses()">
        {{ text }}
        <svg *ngIf="variant === ButtonVariant.DETAILS" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
      
      <ng-template #buttonTemplate>
        <button [class]="getClasses()" (click)="onClick()">
          {{ text }}
          <svg *ngIf="variant === ButtonVariant.DETAILS" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </ng-template>
    </ng-template>
  `
})
export class ButtonComponent {
  ButtonVariant = ButtonVariant;
  
  @Input() text = '';
  @Input() variant: ButtonVariant = ButtonVariant.PRIMARY;
  @Input() size: ButtonSize = ButtonSize.MEDIUM;
  @Input() block = false;
  @Input() routerLink?: string | any[];
  @Input() href?: string;
  @Input() target?: string;
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }

  getClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-200';
    
    const variantClasses = {
      [ButtonVariant.ACCENT]: 'text-black btn-accent',
      [ButtonVariant.PRIMARY]: 'text-white bg-indigo-600 hover:bg-indigo-700',
      [ButtonVariant.SECONDARY]: 'text-gray-700 bg-gray-200 hover:bg-gray-300',
      [ButtonVariant.DETAILS]: 'text-white bg-blue-500 hover:bg-blue-600 shadow-sm hover:shadow-md'
    };
    
    const sizeClasses = {
      [ButtonSize.SMALL]: 'px-3 py-1.5 text-xs',
      [ButtonSize.MEDIUM]: 'px-5 py-3',
      [ButtonSize.LARGE]: 'px-6 py-4 text-lg'
    };
    
    const blockClass = this.block ? 'w-full' : '';
    
    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${blockClass}`.trim();
  }
}