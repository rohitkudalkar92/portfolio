import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header [class]="getHeaderClasses()" class="w-full sticky top-0 z-50 backdrop-blur-md flex items-center justify-between px-6 py-4 rounded-xl shadow-lg transition-all duration-300">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black">
          R
        </div>
        
        <div class="flex items-center gap-2 md:gap-4">
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 text-sm opacity-90" role="navigation" aria-label="Main navigation">
            <a *ngFor="let item of navItems; trackBy: trackByNavItem" 
               [routerLink]="item.path" 
               routerLinkActive="text-primary font-semibold" 
               [routerLinkActiveOptions]="item.exact ? {exact: true} : {exact: false}" 
               class="hover:underline transition-all"
               [attr.aria-current]="item.path === currentRoute ? 'page' : null">
              {{ item.label }}
            </a>
          </nav>  
          
          <!-- Theme Toggle -->
          <button (click)="toggleTheme()" class="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110">
            <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
              {{ isDark ? '☀️' : '🌙' }}
            </span>
          </button>
          
          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" 
                  class="md:hidden p-3 text-white glass rounded-lg hover:bg-white/10 transition-all" 
                  [attr.aria-label]="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
                  [attr.aria-expanded]="isMobileMenuOpen">
            <span class="text-lg" [innerHTML]="isMobileMenuOpen ? '✕' : '☰'"></span>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a [routerLink]="routes.HOME" class="hover:underline transition-all duration-200">{{ nav.HOME }}</a>
          <a [routerLink]="routes.SKILLS" class="hover:underline transition-all duration-200">{{ nav.SKILLS }}</a>
          <a [routerLink]="routes.PROJECTS" class="hover:underline transition-all duration-200">{{ nav.PROJECTS }}</a>
          <a [routerLink]="routes.DSA" class="hover:underline transition-all duration-200">{{ nav.DSA }}</a>
          <a [routerLink]="routes.EXPERIENCE" class="hover:underline transition-all duration-200">{{ nav.EXPERIENCE }}</a>
        </nav>
        <button (click)="toggleTheme()" [class]="getButtonClasses()" class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
            {{ isDark ? '☀️' : '🌙' }}
          </span>
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  isDark = false;
  isMobileMenuOpen = false;
  currentRoute = '';
  
  readonly brandName = CONSTANTS.BRAND_NAME;
  readonly brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  readonly nav = CONSTANTS.NAV;
  
  readonly navItems = [
    { path: '/', label: this.nav.HOME, exact: true },
    { path: '/skills', label: this.nav.SKILLS },
    { path: '/projects', label: this.nav.PROJECTS },
    { path: '/diagram', label: 'Diagram' },
    { path: '/dsa', label: this.nav.DSA },
    { path: '/timeline', label: this.nav.EXPERIENCE }
  ];

  trackByNavItem(index: number, item: any): string {
    return item.label;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeTheme();
    this.setupRouterSubscription();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeTheme() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  private setupRouterSubscription() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        this.currentRoute = (event as NavigationEnd).urlAfterRedirects;
        this.closeMobileMenu();
      });
  }

  toggleTheme() {
    this.animateThemeTransition(() => {
      this.isDark = !this.isDark;
      this.applyTheme();
      this.saveThemePreference();
    });
  }

  private animateThemeTransition(callback: () => void) {
    const body = document.body;
    body.style.opacity = '0.8';
    body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      callback();
      setTimeout(() => {
        body.style.opacity = '1';
        body.style.transform = 'scale(1)';
      }, 100);
    }, 150);
  }

  private saveThemePreference() {
    sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  getButtonClasses(): string {
    return this.isDark 
      ? 'border border-black/20' 
      : 'border border-white/20';
  }

  getHeaderClasses(): string {
    return this.isDark 
      ? 'bg-white/90 text-gray-900 border border-black/10' 
      : 'bg-gray-800/90 text-white border border-white/10';
  }
}