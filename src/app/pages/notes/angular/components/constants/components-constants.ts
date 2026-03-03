export const COMPONENTS_CODE_EXAMPLES = {
  basic: {
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello {{ name }}!</h1>',
  styles: ['h1 { color: blue; }']
})
export class HelloComponent {
  name = 'Angular';
}`,
    output: `Hello Angular!`
  },
  standalone: {
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: '<p>{{ username }}</p>'
})
export class UserComponent {
  username = 'John Doe';
}`,
    output: `John Doe`
  },
  input: {
    code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>Received: {{ message }}</p>'
})
export class ChildComponent {
  @Input() message: string = '';
}

// Parent usage:
// <app-child [message]="'Hello from parent'"></app-child>`,
    output: `Received: Hello from parent`
  },
  output: {
    code: `import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button (click)="handleClick()">Click me</button>'
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<string>();

  handleClick() {
    this.clicked.emit('Button clicked!');
  }
}

// Parent usage:
// <app-button (clicked)="onButtonClick($event)"></app-button>`,
    output: `Event emitted: Button clicked!`
  },
  lifecycle: {
    code: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>Check console</p>'
})
export class LifecycleComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Component initialized');
  }

  ngOnDestroy() {
    console.log('Component destroyed');
  }
}`,
    output: `Console: Component initialized
[On destroy]
Console: Component destroyed`
  },
  viewChild: {
    code: `import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<input #myInput type="text">'
})
export class ParentComponent {
  @ViewChild('myInput') inputRef!: ElementRef;

  ngAfterViewInit() {
    this.inputRef.nativeElement.focus();
  }
}`,
    output: `✓ Input element focused on load`
  },
  smartComponent: {
    code: `import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-container',
  template: '<app-user-display [user]="user"></app-user-display>'
})
export class UserContainerComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}`,
    output: `✓ Handles logic and data fetching
✓ Passes data to presentational component`
  },
  dumbComponent: {
    code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-display',
  template: '<p>{{ user.name }} - {{ user.email }}</p>'
})
export class UserDisplayComponent {
  @Input() user: any;
}`,
    output: `John Doe - john@example.com
✓ Only displays data
✓ No business logic`
  },
  lazyComponent: {
    code: `// app.routes.ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => 
      import('./dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  }
];

// Loaded only when route is accessed`,
    output: `✓ Component loaded on demand
✓ Reduces initial bundle size`
  },
  dynamicComponent: {
    code: `import { Component, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: '<ng-container #container></ng-container>'
})
export class DynamicComponent {
  constructor(private vcr: ViewContainerRef) {}

  loadComponent(component: any) {
    const componentRef: ComponentRef<any> = 
      this.vcr.createComponent(component);
  }
}`,
    output: `✓ Component created at runtime
✓ Dynamic content rendering`
  }
} as const;

export const COMPONENT_DECORATORS = [
  '@Input() - Receive data from parent component',
  '@Output() - Emit events to parent component',
  '@ViewChild() - Access child component or DOM element',
  '@ViewChildren() - Access multiple children',
  '@ContentChild() - Access projected content',
  '@HostListener() - Listen to host element events',
  '@HostBinding() - Bind to host element properties'
] as const;

export const COMPONENT_LIFECYCLE_HOOKS = [
  'ngOnChanges - Called when input properties change',
  'ngOnInit - Called once after first ngOnChanges',
  'ngDoCheck - Called during every change detection',
  'ngAfterContentInit - After content projection',
  'ngAfterContentChecked - After content checked',
  'ngAfterViewInit - After view initialization',
  'ngAfterViewChecked - After view checked',
  'ngOnDestroy - Cleanup before component destruction'
] as const;

export const COMPONENT_BEST_PRACTICES = [
  'Keep components small and focused on single responsibility',
  'Use OnPush change detection for better performance',
  'Unsubscribe from observables in ngOnDestroy',
  'Use standalone components for modern Angular apps',
  'Avoid logic in templates - move to component class',
  'Use @Input() and @Output() for component communication',
  'Implement lifecycle hooks only when needed'
] as const;

export const COMPONENT_TYPES = [
  'Smart/Container Components - Handle logic and state management',
  'Dumb/Presentational Components - Display data, no business logic',
  'Standalone Components - Self-contained, no NgModule needed',
  'Lazy-loaded Components - Loaded on demand for performance',
  'Dynamic Components - Created at runtime programmatically',
  'Structural Components - Use *ngIf, *ngFor, *ngSwitch',
  'Attribute Components - Modify element behavior or appearance'
] as const;
