import { Component, HostListener, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="scrollToTop()" 
      class="back-to-top glass p-3 rounded-full hover:opacity-80 transition-opacity"
      [class.visible]="isVisible">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  `
})
export class BackToTopComponent implements OnDestroy {
  isVisible = false;
  private scrollTimeout: any;
  private ticking = false;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
    });
  }

  private onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        const shouldShow = window.pageYOffset > 300;
        if (shouldShow !== this.isVisible) {
          this.ngZone.run(() => {
            this.isVisible = shouldShow;
          });
        }
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  ngOnDestroy() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}