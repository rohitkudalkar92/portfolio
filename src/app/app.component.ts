import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './common/back-to-top.component';
import { filter } from 'rxjs/operators';
import { AnalyticsService, VisitorTrackingService } from './shared/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackToTopComponent],
  template: `
    <div class="min-h-screen hero-bg">
      <router-outlet></router-outlet>
      <app-back-to-top></app-back-to-top>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private analytics: AnalyticsService,
    private visitorTracking: VisitorTrackingService
  ) {}

  ngOnInit() {
    // Initialize analytics
    this.analytics.initGoogleAnalytics('G-2F67HQZRPF');
    // this.visitorTracking.trackVisitor(); // Disabled for GitHub Pages

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.scrollTo(0, 0);
        this.analytics.trackPageView((event as NavigationEnd).urlAfterRedirects);
      });
  }
}