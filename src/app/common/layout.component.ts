import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="max-w-6xl mx-auto px-3 py-3">
      <app-header></app-header>
      <main class="mt-6 px-6">
        <ng-content></ng-content>
      </main>
    </div>
  `
})
export class LayoutComponent {}