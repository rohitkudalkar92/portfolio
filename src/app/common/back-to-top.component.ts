import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="scrollToTop()" 
      class="back-to-top glass p-3 rounded-full hover:scale-110 transition-all"
      [class.visible]="isVisible">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  `
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}