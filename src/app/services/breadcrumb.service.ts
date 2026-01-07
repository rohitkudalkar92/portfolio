import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  private routeLabels: { [key: string]: string } = {
    '': 'Home',
    'skills': 'Skills',
    'projects': 'Projects',
    'notes': 'Notes',
    'python': 'Python Learning',
    'contact': 'Contact'
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumbs());
  }

  private buildBreadcrumbs(): void {
    const breadcrumbs: Breadcrumb[] = [];
    const urlSegments = this.router.url.split('/').filter(segment => segment);
    
    let currentUrl = '';
    
    for (const segment of urlSegments) {
      currentUrl += `/${segment}`;
      const label = this.routeLabels[segment] || this.formatLabel(segment);
      breadcrumbs.push({ label, url: currentUrl });
    }

    this.breadcrumbsSubject.next(breadcrumbs);
  }

  private formatLabel(segment: string): string {
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  }

  setCustomLabel(route: string, label: string): void {
    this.routeLabels[route] = label;
    this.buildBreadcrumbs();
  }
}