import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  initGoogleAnalytics(trackingId: string): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);
  }

  trackPageView(url: string): void {
    gtag('config', 'G-2F67HQZRPF', {
      page_path: url
    });
  }

  trackEvent(action: string, category: string, label?: string): void {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
}