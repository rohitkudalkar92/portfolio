export const INTERCEPTORS_CODE_EXAMPLES = {
  basic: {
    code: `// Basic HTTP Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone and modify request
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token123')
    });
    
    // Pass modified request to next handler
    return next.handle(authReq);
  }
}`,
    output: `✓ Implements HttpInterceptor
✓ Clone request to modify
✓ Add headers, params, etc.
✓ Call next.handle() to continue`
  },
  authToken: {
    code: `// Auth Token Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: \`Bearer \${token}\`
        }
      });
    }
    
    return next.handle(req);
  }
}`,
    output: `✓ Add auth token to requests
✓ Get token from service
✓ Clone request with headers
✓ Automatic authentication`
  },
  errorHandling: {
    code: `// Error Handling Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = \`Error: \${error.error.message}\`;
        } else {
          // Server-side error
          errorMessage = \`Error Code: \${error.status}\\nMessage: \${error.message}\`;
        }
        
        this.notificationService.showError(errorMessage);
        return throwError(() => error);
      })
    );
  }
}`,
    output: `✓ Catch HTTP errors
✓ Handle client/server errors
✓ Show user notifications
✓ Re-throw error for handling`
  },
  loading: {
    code: `// Loading Indicator Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.activeRequests === 0) {
      this.loadingService.show();
    }
    this.activeRequests++;

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}`,
    output: `✓ Show loading indicator
✓ Track active requests
✓ Hide when all complete
✓ Use finalize for cleanup`
  },
  caching: {
    code: `// Caching Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.url);
    if (cachedResponse) {
      return of(cachedResponse.clone());
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(req.url, event.clone());
        }
      })
    );
  }
}`,
    output: `✓ Cache GET requests
✓ Return cached response
✓ Store new responses
✓ Improve performance`
  },
  retry: {
    code: `// Retry Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { retry, delay } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      retry({
        count: 3,
        delay: (error, retryCount) => {
          // Exponential backoff: 1s, 2s, 4s
          const delayMs = Math.pow(2, retryCount - 1) * 1000;
          console.log(\`Retry attempt \${retryCount} after \${delayMs}ms\`);
          return delay(delayMs);
        }
      })
    );
  }
}`,
    output: `✓ Retry failed requests
✓ Exponential backoff
✓ Configurable retry count
✓ Handle transient failures`
  },
  logging: {
    code: `// Logging Interceptor
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    
    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(\`\${req.method} \${req.url} - \${event.status} (\${elapsed}ms)\`);
          }
        },
        error: (error) => {
          const elapsed = Date.now() - started;
          console.error(\`\${req.method} \${req.url} - Error (\${elapsed}ms)\`, error);
        }
      })
    );
  }
}`,
    output: `✓ Log all HTTP requests
✓ Track request duration
✓ Log success and errors
✓ Debugging and monitoring`
  },
  provider: {
    code: `// Register Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// In AppModule or standalone app
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];

// Standalone app (main.ts)
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor])
    )
  ]
});`,
    output: `✓ Register with HTTP_INTERCEPTORS
✓ multi: true for multiple interceptors
✓ Order matters - first to last
✓ Functional interceptors in v15+`
  }
} as const;

export const INTERCEPTOR_USE_CASES = [
  'Authentication: Add auth tokens to requests',
  'Error Handling: Centralized error management',
  'Loading Indicators: Show/hide loading state',
  'Caching: Cache GET requests for performance',
  'Retry Logic: Retry failed requests automatically',
  'Logging: Log all HTTP traffic for debugging',
  'Request Modification: Add headers, params, or transform data',
  'Response Transformation: Modify response data'
] as const;

export const INTERCEPTORS_BEST_PRACTICES = [
  'Keep interceptors focused on single responsibility',
  'Order matters - register in correct sequence',
  'Always call next.handle() to continue chain',
  'Clone requests before modifying (immutable)',
  'Use finalize() for cleanup operations',
  'Handle errors gracefully with catchError',
  'Avoid heavy logic in interceptors',
  'Test interceptors in isolation',
  'Consider functional interceptors (Angular 15+)',
  'Document interceptor purpose and order'
] as const;
