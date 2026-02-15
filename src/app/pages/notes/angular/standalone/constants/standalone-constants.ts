export const STANDALONE_CODE_EXAMPLES = {
  basic: {
    code: `// Basic Standalone Component
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="card">
      <h3>{{ name }}</h3>
      <p>{{ email }}</p>
    </div>
  \`
})
export class UserCardComponent {
  name = 'John Doe';
  email = 'john@example.com';
}`,
    output: `✓ No NgModule required
✓ Self-contained component
✓ Direct imports in component`
  },
  withImports: {
    code: `// Standalone Component with Multiple Imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ButtonComponent
  ],
  template: \`
    <form>
      <input [(ngModel)]="username" />
      <app-button [routerLink]="'/users'">Submit</app-button>
    </form>
  \`
})
export class UserFormComponent {
  username = '';
}`,
    output: `✓ Import only what you need
✓ Mix Angular modules and components
✓ Better tree-shaking`
  },
  bootstrapping: {
    code: `// Bootstrapping Standalone App (main.ts)
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // Add other providers
  ]
}).catch(err => console.error(err));`,
    output: `✓ No AppModule needed
✓ Functional providers
✓ Cleaner configuration`
  },
  routing: {
    code: `// Standalone Component Routing
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    loadComponent: () => 
      import('./users/users.component')
        .then(m => m.UsersComponent)
  }
];`,
    output: `✓ Direct component routes
✓ Lazy loading with loadComponent
✓ No lazy modules needed`
  },
  lazyLoading: {
    code: `// Lazy Loading Standalone Components
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => 
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  }
];

// admin.routes.ts
export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: AdminUsersComponent }
];`,
    output: `✓ Component-level lazy loading
✓ Route-level code splitting
✓ Smaller initial bundles`
  },
  providers: {
    code: `// Standalone Component with Providers
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  providers: [UserService], // Component-level provider
  template: \`
    <div *ngFor="let user of users">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent {
  users = this.userService.getUsers();
  
  constructor(private userService: UserService) {}
}

// Or use providedIn in service
@Injectable({ providedIn: 'root' })
export class UserService { }`,
    output: `✓ Component-scoped services
✓ Tree-shakable services
✓ Better dependency management`
  },
  migration: {
    code: `// Migrating from NgModule to Standalone

// BEFORE (NgModule)
@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserComponent]
})
export class UserModule { }

// AFTER (Standalone)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`...\`
})
export class UserComponent { }`,
    output: `✓ Remove NgModule wrapper
✓ Move imports to component
✓ Simpler architecture`
  },
  testing: {
    code: `// Testing Standalone Components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent] // Import component directly
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`,
    output: `✓ Import component in tests
✓ No TestBed module setup
✓ Simpler test configuration`
  }
} as const;

export const WHEN_TO_USE_STANDALONE = [
  'New Angular projects (Angular 14+)',
  'Modernizing existing applications gradually',
  'Building component libraries',
  'Creating reusable UI components',
  'Projects requiring better tree-shaking',
  'Simplifying application architecture'
] as const;

export const WHY_USE_STANDALONE = [
  'Eliminates NgModule boilerplate code',
  'Better tree-shaking and smaller bundle sizes',
  'Simpler mental model - components are self-contained',
  'Easier to understand component dependencies',
  'Faster development with less configuration',
  'Modern Angular recommended approach',
  'Easier migration path for future Angular versions'
] as const;

export const STANDALONE_ADVANTAGES = [
  'Reduced boilerplate - no NgModule declarations needed',
  'Better tree-shaking leads to smaller bundle sizes',
  'Clearer component dependencies - imports are explicit',
  'Easier to share components across projects',
  'Simpler testing - import component directly',
  'Faster compilation and build times',
  'Component-level lazy loading without modules',
  'Future-proof - Angular\'s recommended approach'
] as const;

export const STANDALONE_DISADVANTAGES = [
  'Learning curve for developers familiar with NgModules',
  'May require refactoring existing NgModule-based apps',
  'Some third-party libraries still use NgModules',
  'Larger import lists in components with many dependencies',
  'Migration can be time-consuming for large applications',
  'Mixed standalone/NgModule apps can be confusing initially'
] as const;

export const STANDALONE_BEST_PRACTICES = [
  'Use standalone: true for all new components',
  'Import only what each component needs',
  'Use functional providers (provideRouter, provideHttpClient)',
  'Leverage lazy loading with loadComponent',
  'Keep component imports minimal and focused',
  'Use providedIn: "root" for singleton services',
  'Migrate gradually - standalone works with NgModules',
  'Test standalone components in isolation'
] as const;
