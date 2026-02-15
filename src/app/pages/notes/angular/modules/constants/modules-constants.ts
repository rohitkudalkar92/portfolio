export const MODULES_CODE_EXAMPLES = {
  appModule: {
    code: `// Root AppModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
    output: `✓ Root module of application
✓ BrowserModule imported once
✓ Bootstrap component defined
✓ Application entry point`
  },
  featureModule: {
    code: `// Feature Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule  // Use CommonModule, not BrowserModule
  ],
  providers: [UserService],
  exports: [UserListComponent]  // Export to use in other modules
})
export class UserModule { }`,
    output: `✓ Encapsulates related features
✓ Uses CommonModule
✓ Provides feature-specific services
✓ Exports public components`
  },
  sharedModule: {
    code: `// Shared Module - Reusable components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    CommonModule,    // Re-export commonly used modules
    FormsModule
  ]
})
export class SharedModule { }`,
    output: `✓ Contains reusable components
✓ Exports components and modules
✓ Imported by feature modules
✓ No providers (use forRoot pattern)`
  },
  coreModule: {
    code: `// Core Module - Singleton services
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AuthService,
    LoggerService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}`,
    output: `✓ Singleton services only
✓ Import once in AppModule
✓ Guards against re-import
✓ Application-wide services`
  },
  lazyLoading: {
    code: `// Lazy Loading with loadChildren
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'users',
    loadChildren: () => 
      import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`,
    output: `✓ Loads modules on demand
✓ Reduces initial bundle size
✓ Improves performance
✓ Separate chunks created`
  },
  lazyModule: {
    code: `// Lazy Loaded Feature Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  // forChild for lazy modules
  ]
})
export class AdminModule { }`,
    output: `✓ Use RouterModule.forChild()
✓ Define child routes
✓ Loaded only when accessed
✓ Independent bundle`
  },
  forRootPattern: {
    code: `// forRoot Pattern - Configure module with providers
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';

@NgModule({
  imports: [CommonModule]
})
export class AuthModule {
  static forRoot(config: AuthConfig): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        { provide: AuthConfig, useValue: config }
      ]
    };
  }
}

// Usage in AppModule
@NgModule({
  imports: [
    AuthModule.forRoot({ apiUrl: 'https://api.example.com' })
  ]
})
export class AppModule { }`,
    output: `✓ Configure module with options
✓ Provide services once
✓ Import in AppModule only
✓ Prevents duplicate providers`
  },
  preloading: {
    code: `// Preloading Strategy
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules  // Preload all lazy modules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }`,
    output: `✓ PreloadAllModules: Load all after initial
✓ NoPreloading: Load only on demand
✓ Custom strategy: Selective preloading
✓ Balance performance and UX`
  }
} as const;

export const MODULE_TYPES = [
  'Root Module (AppModule): Application entry point, imports BrowserModule',
  'Feature Module: Encapsulates related functionality',
  'Shared Module: Reusable components, directives, pipes',
  'Core Module: Singleton services, import once in AppModule',
  'Routing Module: Route configuration',
  'Widget Module: Third-party components'
] as const;

export const WHEN_TO_USE_MODULES = [
  'Feature Modules: Organize code by feature (users, products, admin)',
  'Shared Modules: Reusable UI components across features',
  'Core Module: Application-wide singleton services',
  'Lazy Loading: Large features that are not needed immediately',
  'Preloading: Improve UX by loading modules in background',
  'forRoot Pattern: Configurable modules with providers'
] as const;

export const MODULES_VS_STANDALONE = [
  'NgModules: Traditional Angular architecture (pre-v14)',
  'Standalone: Modern approach without NgModules (v14+)',
  'NgModules: Group related components, services, directives',
  'Standalone: Components import dependencies directly',
  'NgModules: Still supported, good for large existing apps',
  'Standalone: Recommended for new projects',
  'Can mix both: Gradual migration possible',
  'Lazy loading: Both support it (loadChildren vs loadComponent)'
] as const;

export const MODULES_BEST_PRACTICES = [
  'Import BrowserModule only in AppModule',
  'Use CommonModule in feature modules',
  'Create CoreModule for singleton services',
  'Use SharedModule for reusable components',
  'Implement lazy loading for large features',
  'Use forRoot pattern for configurable modules',
  'Avoid circular dependencies between modules',
  'Keep modules focused and cohesive',
  'Consider migrating to standalone components for new code'
] as const;
