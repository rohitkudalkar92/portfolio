export const PERFORMANCE_CODE_EXAMPLES = {
  onPush: {
    code: `// OnPush Change Detection Strategy
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <div class="card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user!: { name: string; email: string };
}`,
    output: `✓ Only checks when inputs change
✓ Reduces change detection cycles
✓ Improves performance significantly
✓ Use with immutable data`
  },
  trackBy: {
    code: `// TrackBy for ngFor
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngFor="let user of users; trackBy: trackByUserId">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];

  trackByUserId(index: number, user: any): number {
    return user.id;
  }
}`,
    output: `✓ Prevents unnecessary DOM re-renders
✓ Tracks items by unique identifier
✓ Improves list performance
✓ Essential for large lists`
  },
  lazyLoading: {
    code: `// Lazy Loading Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  }
];`,
    output: `✓ Reduces initial bundle size
✓ Loads features on demand
✓ Faster initial page load
✓ Better user experience`
  },
  pureP pipes: {
    code: `// Pure Pipes for Performance
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true  // Default, only re-runs when input changes
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}`,
    output: `✓ Pure pipes cache results
✓ Only re-run when inputs change
✓ Better than impure pipes
✓ Avoid in ngFor with large lists`
  },
  virtualScrolling: {
    code: `// Virtual Scrolling for Large Lists
import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-large-list',
  standalone: true,
  imports: [ScrollingModule],
  template: \`
    <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
      <div *cdkVirtualFor="let item of items" class="item">
        {{ item }}
      </div>
    </cdk-virtual-scroll-viewport>
  \`,
  styles: [\`.viewport { height: 400px; }\`]
})
export class LargeListComponent {
  items = Array.from({ length: 10000 }, (_, i) => \`Item #\${i}\`);
}`,
    output: `✓ Renders only visible items
✓ Handles thousands of items
✓ Smooth scrolling performance
✓ CDK ScrollingModule required`
  },
  preloading: {
    code: `// Preloading Strategy
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking'
    })
  ]
})
export class AppRoutingModule { }

// Custom Preloading Strategy
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}`,
    output: `✓ PreloadAllModules: Load all lazy modules
✓ Custom strategy: Selective preloading
✓ Balance initial load and UX
✓ Load in background after initial render`
  },
  memoization: {
    code: `// Memoization for Expensive Calculations
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: \`<p>Result: {{ getExpensiveResult() }}</p>\`
})
export class CalculatorComponent {
  private cache = new Map<string, number>();

  getExpensiveResult(): number {
    const key = 'result';
    
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }

    // Expensive calculation
    const result = this.performExpensiveCalculation();
    this.cache.set(key, result);
    return result;
  }

  private performExpensiveCalculation(): number {
    // Complex logic here
    return 42;
  }
}`,
    output: `✓ Cache expensive calculations
✓ Avoid redundant computations
✓ Use Map for caching
✓ Clear cache when data changes`
  },
  detachChangeDetection: {
    code: `// Detach Change Detection
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-data',
  template: \`<div>{{ data }}</div>\`
})
export class RealtimeDataComponent implements OnInit {
  data: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Detach from change detection
    this.cdr.detach();

    // Manual updates
    setInterval(() => {
      this.data = new Date().toISOString();
      this.cdr.detectChanges(); // Manually trigger
    }, 1000);
  }
}`,
    output: `✓ Manual change detection control
✓ Detach for high-frequency updates
✓ Call detectChanges() manually
✓ Use for real-time data streams`
  },
  webWorkers: {
    code: `// Web Workers for Heavy Computations
// app.worker.ts
addEventListener('message', ({ data }) => {
  const result = performHeavyCalculation(data);
  postMessage(result);
});

function performHeavyCalculation(data: any) {
  // CPU-intensive work
  return data * 2;
}

// component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-demo',
  template: \`<button (click)="calculate()">Calculate</button>\`
})
export class WorkerDemoComponent {
  calculate() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log('Result:', data);
      };
      worker.postMessage(100);
    }
  }
}`,
    output: `✓ Offload heavy computations
✓ Prevent UI blocking
✓ Run in separate thread
✓ Use for CPU-intensive tasks`
  }
} as const;

export const OPTIMIZATION_TECHNIQUES = [
  'OnPush Change Detection: Reduce change detection cycles',
  'TrackBy: Optimize ngFor rendering',
  'Lazy Loading: Load modules on demand',
  'Pure Pipes: Cache pipe results',
  'Virtual Scrolling: Render only visible items',
  'Preloading: Load modules in background',
  'Memoization: Cache expensive calculations',
  'Detach Change Detection: Manual control',
  'Web Workers: Offload heavy computations',
  'AOT Compilation: Ahead-of-time compilation'
] as const;

export const PERFORMANCE_BEST_PRACTICES = [
  'Use OnPush change detection strategy',
  'Implement trackBy for all ngFor loops',
  'Lazy load feature modules',
  'Use pure pipes instead of methods in templates',
  'Avoid complex expressions in templates',
  'Unsubscribe from observables (use async pipe)',
  'Use virtual scrolling for large lists',
  'Enable production mode',
  'Optimize bundle size with tree-shaking',
  'Use CDN for third-party libraries',
  'Implement service workers for caching',
  'Minimize DOM manipulations'
] as const;
