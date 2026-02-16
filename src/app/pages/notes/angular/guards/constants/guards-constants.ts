export const GUARDS_CODE_EXAMPLES = {
  canActivate: {
    code: `// CanActivate - Protect route access
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    
    return this.router.createUrlTree(['/login']);
  }
}

// Route configuration
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];`,
    output: `✓ Prevent unauthorized access
✓ Redirect to login if not authenticated
✓ Return boolean or UrlTree
✓ Applied to route configuration`
  },
  canActivateChild: {
    code: `// CanActivateChild - Protect child routes
import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivateChild(): boolean {
    if (this.authService.hasAdminRole()) {
      return true;
    }
    
    this.router.navigate(['/unauthorized']);
    return false;
  }
}

// Route configuration
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];`,
    output: `✓ Protect all child routes
✓ Check permissions once
✓ Applied to parent route
✓ Guards all nested routes`
  },
  canDeactivate: {
    code: `// CanDeactivate - Prevent navigation away
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

// Component implementation
@Component({
  selector: 'app-form',
  template: '...'
})
export class FormComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;

  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  }
}`,
    output: `✓ Warn about unsaved changes
✓ Confirm before leaving
✓ Component implements interface
✓ Prevent accidental data loss`
  },
  canLoad: {
    code: `// CanLoad - Prevent lazy module loading
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthLoadGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(route: Route): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}

// Route configuration
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthLoadGuard]
  }
];`,
    output: `✓ Prevent module download
✓ Save bandwidth
✓ Better than canActivate for lazy modules
✓ Module not loaded if false`
  },
  canMatch: {
    code: `// CanMatch - Route matching guard (Angular 15+)
import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FeatureFlagGuard implements CanMatch {
  constructor(private featureService: FeatureService) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    return this.featureService.isEnabled('new-feature');
  }
}

// Route configuration - multiple routes with same path
const routes: Routes = [
  {
    path: 'dashboard',
    component: NewDashboardComponent,
    canMatch: [FeatureFlagGuard]
  },
  {
    path: 'dashboard',
    component: OldDashboardComponent
  }
];`,
    output: `✓ Control route matching
✓ Feature flags
✓ A/B testing
✓ Multiple routes same path`
  },
  functionalGuard: {
    code: `// Functional Guards (Angular 15+)
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  
  return router.createUrlTree(['/login']);
};

export const roleGuard = (role: string) => {
  return () => {
    const authService = inject(AuthService);
    return authService.hasRole(role);
  };
};

// Route configuration
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard, roleGuard('admin')]
  }
];`,
    output: `✓ Simpler than class guards
✓ Use inject() for dependencies
✓ Composable and reusable
✓ Modern Angular approach`
  },
  asyncGuard: {
    code: `// Async Guard with Observable
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.permissionService.checkPermission('admin').pipe(
      take(1),
      map(hasPermission => {
        if (hasPermission) {
          return true;
        }
        this.router.navigate(['/unauthorized']);
        return false;
      })
    );
  }
}`,
    output: `✓ Async permission checks
✓ API calls in guards
✓ Return Observable<boolean>
✓ Use take(1) to complete`
  },
  multipleGuards: {
    code: `// Multiple Guards on Single Route
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard, SubscriptionGuard],
    canDeactivate: [UnsavedChangesGuard]
  }
];

// Guards execute in order
// All must return true to proceed
// First false stops execution`,
    output: `✓ Multiple guards per route
✓ Execute in array order
✓ All must pass
✓ Combine different checks`
  }
} as const;

export const GUARD_TYPES = [
  'CanActivate: Control route access',
  'CanActivateChild: Protect child routes',
  'CanDeactivate: Prevent leaving route',
  'CanLoad: Prevent lazy module loading',
  'CanMatch: Control route matching (v15+)',
  'Resolve: Pre-fetch data before navigation'
] as const;

export const GUARDS_USE_CASES = [
  'Authentication: Check if user is logged in',
  'Authorization: Verify user permissions/roles',
  'Unsaved Changes: Warn before leaving forms',
  'Feature Flags: Enable/disable features',
  'Subscription: Check active subscription',
  'Age Verification: Confirm user age',
  'Terms Acceptance: Ensure terms accepted',
  'Network Status: Check online/offline'
] as const;

export const GUARDS_BEST_PRACTICES = [
  'Keep guards simple and focused',
  'Use functional guards for new code (Angular 15+)',
  'Return UrlTree for redirects instead of navigate()',
  'Use canLoad for lazy modules to save bandwidth',
  'Combine multiple guards for complex logic',
  'Handle async operations with Observables',
  'Use take(1) to complete Observable guards',
  'Test guards in isolation',
  'Provide clear error messages',
  'Consider user experience when blocking navigation'
] as const;
