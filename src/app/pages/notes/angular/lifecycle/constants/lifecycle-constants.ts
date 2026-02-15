export const LIFECYCLE_CODE_EXAMPLES = {
  ngOnChanges: {
    code: `// ngOnChanges - Called when input properties change
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<p>{{ name }}</p>'
})
export class UserComponent implements OnChanges {
  @Input() name: string = '';
  @Input() age: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      console.log('Name changed:', changes['name'].currentValue);
    }
    if (changes['age']) {
      console.log('Age changed:', changes['age'].currentValue);
    }
  }
}`,
    output: `Called before ngOnInit and whenever input properties change
Receives SimpleChanges object with previous and current values
Use for reacting to input property changes`
  },
  ngOnInit: {
    code: `// ngOnInit - Called once after first ngOnChanges
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<div>{{ data }}</div>'
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private service: DataService) {
    // Constructor: Dependency injection only
    console.log('Constructor called');
  }

  ngOnInit(): void {
    // Initialize component, fetch data
    console.log('ngOnInit called');
    this.data = this.service.getData();
  }
}`,
    output: `Called once after component initialization
Best place for initialization logic and API calls
Input properties are available here`
  },
  ngDoCheck: {
    code: `// ngDoCheck - Called during every change detection
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-monitor',
  template: '<p>{{ counter }}</p>'
})
export class MonitorComponent implements DoCheck {
  counter = 0;

  ngDoCheck(): void {
    // Runs on every change detection cycle
    console.log('Change detection run:', ++this.counter);
    // Use sparingly - performance impact!
  }
}`,
    output: `Called during every change detection cycle
Use for custom change detection logic
⚠️ Performance impact - use carefully`
  },
  ngAfterContentInit: {
    code: `// ngAfterContentInit - After content projection
import { Component, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \`
})
export class CardComponent implements AfterContentInit {
  @ContentChild('header') header: any;

  ngAfterContentInit(): void {
    console.log('Content projected:', this.header);
    // Access projected content here
  }
}`,
    output: `Called after ng-content is initialized
Access projected content with @ContentChild/@ContentChildren
Called once after first ngDoCheck`
  },
  ngAfterContentChecked: {
    code: `// ngAfterContentChecked - After content checked
import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: '<ng-content></ng-content>'
})
export class WrapperComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log('Content checked');
    // Called after every check of projected content
  }
}`,
    output: `Called after every check of projected content
Runs after ngAfterContentInit
⚠️ Avoid expensive operations here`
  },
  ngAfterViewInit: {
    code: `// ngAfterViewInit - After view initialization
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form',
  template: '<input #nameInput type="text">'
})
export class FormComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log('View initialized');
    // Access child components and DOM elements
    this.nameInput.nativeElement.focus();
  }
}`,
    output: `Called after component's view is fully initialized
Access child components with @ViewChild/@ViewChildren
Safe to manipulate DOM here`
  },
  ngAfterViewChecked: {
    code: `// ngAfterViewChecked - After view checked
import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-monitor',
  template: '<p>{{ value }}</p>'
})
export class MonitorComponent implements AfterViewChecked {
  value = 0;

  ngAfterViewChecked(): void {
    console.log('View checked');
    // Called after every check of component's view
  }
}`,
    output: `Called after every check of component's view
Runs after ngAfterViewInit
⚠️ Performance sensitive - use carefully`
  },
  ngOnDestroy: {
    code: `// ngOnDestroy - Cleanup before component destruction
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: '<p>{{ time }}</p>'
})
export class TimerComponent implements OnDestroy {
  time = 0;
  private subscription: Subscription;
  private intervalId: any;

  constructor(private service: DataService) {
    this.subscription = this.service.data$.subscribe();
    this.intervalId = setInterval(() => this.time++, 1000);
  }

  ngOnDestroy(): void {
    // Cleanup: unsubscribe, clear timers, detach listeners
    this.subscription.unsubscribe();
    clearInterval(this.intervalId);
    console.log('Component destroyed');
  }
}`,
    output: `Called just before component is destroyed
Unsubscribe from observables
Clear timers and intervals
Remove event listeners
Prevent memory leaks`
  },
  complete: {
    code: `// Complete Lifecycle Example
import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: '<p>{{ message }}</p>'
})
export class LifecycleDemoComponent implements OnChanges, OnInit, OnDestroy {
  @Input() data: any;
  message = '';

  constructor() {
    console.log('1. Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
    this.message = 'Component initialized';
  }

  ngOnDestroy(): void {
    console.log('4. ngOnDestroy');
  }
}`,
    output: `Execution Order:
1. Constructor
2. ngOnChanges (if inputs exist)
3. ngOnInit
4. ngDoCheck (every CD cycle)
5. ngAfterContentInit
6. ngAfterContentChecked (every CD)
7. ngAfterViewInit
8. ngAfterViewChecked (every CD)
9. ngOnDestroy (on component removal)`
  }
} as const;

export const LIFECYCLE_HOOKS_ORDER = [
  'constructor() - Dependency injection',
  'ngOnChanges() - Input property changes',
  'ngOnInit() - Component initialization',
  'ngDoCheck() - Custom change detection',
  'ngAfterContentInit() - Content projection initialized',
  'ngAfterContentChecked() - Content projection checked',
  'ngAfterViewInit() - View initialized',
  'ngAfterViewChecked() - View checked',
  'ngOnDestroy() - Cleanup before destruction'
] as const;

export const COMMON_USE_CASES = [
  'ngOnInit: Fetch data from APIs, initialize component state',
  'ngOnChanges: React to input property changes, validate inputs',
  'ngAfterViewInit: Access and manipulate DOM elements, initialize third-party libraries',
  'ngOnDestroy: Unsubscribe from observables, clear timers, cleanup resources',
  'ngDoCheck: Implement custom change detection (use sparingly)',
  'ngAfterContentInit: Access projected content with @ContentChild'
] as const;

export const LIFECYCLE_BEST_PRACTICES = [
  'Always implement OnDestroy for cleanup to prevent memory leaks',
  'Use ngOnInit for initialization, not constructor',
  'Avoid heavy operations in ngDoCheck, ngAfterContentChecked, ngAfterViewChecked',
  'Unsubscribe from observables in ngOnDestroy or use async pipe',
  'Access DOM elements only in ngAfterViewInit or later',
  'Use OnPush change detection strategy for better performance',
  'Keep lifecycle hooks simple and focused',
  'Consider using takeUntil pattern for subscription management'
] as const;
