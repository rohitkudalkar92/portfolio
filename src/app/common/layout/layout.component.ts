import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BreadcrumbComponent],
  template: `
    <div class="max-w-7xl mx-auto px-3 py-3">
      <app-header></app-header>
      <main class="mt-6 px-6">
        <app-breadcrumb></app-breadcrumb>
        <ng-content></ng-content>
      </main>
      <footer class="py-8 text-center text-dark text-sm">© {{ copyrightYear }} {{ brandName }} — Built with ❤️ in {{ location }}</footer>
    </div>
  ` 
})
export class LayoutComponent {
  brandName = CONSTANTS.BRAND_NAME;
  copyrightYear = CONSTANTS.COPYRIGHT_YEAR;
  location = CONSTANTS.LOCATION;
}