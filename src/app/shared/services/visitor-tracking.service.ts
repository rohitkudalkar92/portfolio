import { Injectable } from '@angular/core';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  url: string;
  sessionId: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackingService {
  
  trackVisitor(): void {
    const visitorData: VisitorData = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href,
      sessionId: this.generateSessionId()
    };

    this.sendToBackend(visitorData);
    this.storeLocally(visitorData);
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private sendToBackend(data: VisitorData): void {
    fetch('/api/track-visitor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(err => console.log('Tracking failed:', err));
  }

  private storeLocally(data: VisitorData): void {
    try {
      const visitors = JSON.parse(localStorage.getItem('visitors') || '[]') as VisitorData[];
      visitors.push(data);
      localStorage.setItem('visitors', JSON.stringify(visitors.slice(-100)));
    } catch (error) {
      console.warn('Failed to store visitor data:', error);
    }
  }
}