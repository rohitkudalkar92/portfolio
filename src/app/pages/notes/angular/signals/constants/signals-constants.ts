export const SIGNALS_CODE_EXAMPLES = {
  basic: {
    code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+</button>
  \`
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}`,
    output: `Count: 0
[Click +]
Count: 1`
  },
  computed: {
    code: `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: \`
    <p>Price: $\{{ price() }}</p>
    <p>Quantity: {{ quantity() }}</p>
    <p>Total: $\{{ total() }}</p>
  \`
})
export class CartComponent {
  price = signal(10);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());
}`,
    output: `Price: $10
Quantity: 2
Total: $20`
  },
  effect: {
    code: `import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true,
  template: \`<button (click)="increment()">Count: {{ count() }}</button>\`
})
export class LoggerComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  increment() {
    this.count.update(n => n + 1);
  }
}`,
    output: `Console: Count changed: 0
[Click button]
Console: Count changed: 1`
  },
  update: {
    code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-methods',
  standalone: true,
  template: \`<p>Value: {{ value() }}</p>\`
})
export class MethodsComponent {
  value = signal(5);

  examples() {
    // Set new value
    this.value.set(10);

    // Update based on current value
    this.value.update(v => v * 2);

    // Read current value
    const current = this.value();
  }
}`,
    output: `value.set(10) → 10
value.update(v => v * 2) → 20
value() → 20`
  },
  writable: {
    code: `import { Component, signal, WritableSignal } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user',
  standalone: true,
  template: \`
    <p>{{ user().name }}, {{ user().age }}</p>
    <button (click)="updateAge()">Birthday</button>
  \`
})
export class UserComponent {
  user: WritableSignal<User> = signal({ name: 'John', age: 25 });

  updateAge() {
    this.user.update(u => ({ ...u, age: u.age + 1 }));
  }
}`,
    output: `John, 25
[Click Birthday]
John, 26`
  }
} as const;

export const SIGNALS_ADVANTAGES = [
  'Fine-grained reactivity - only affected parts re-render',
  'No Zone.js dependency - better performance',
  'Simpler than RxJS for basic state management',
  'Automatic dependency tracking in computed signals',
  'Type-safe and compile-time checked',
  'Works seamlessly with OnPush change detection',
  'Easier to debug than observables',
  'Smaller bundle size without Zone.js',
  'Synchronous by default - easier to reason about',
  'Better integration with Angular templates'
] as const;

export const SIGNALS_DISADVANTAGES = [
  'Relatively new - limited community resources',
  'Cannot replace all RxJS use cases',
  'Learning curve for developers used to observables',
  'Limited third-party library support currently',
  'Effects can be tricky to manage properly',
  'Not suitable for complex async operations'
] as const;

export const WHEN_TO_USE_SIGNALS = [
  'Component local state management',
  'Form state and validation',
  'UI state (toggles, counters, selections)',
  'Derived/computed values from other state',
  'Simple synchronous data flows',
  'Performance-critical components with frequent updates'
] as const;

export const WHEN_NOT_TO_USE_SIGNALS = [
  'Complex async operations (HTTP requests, timers)',
  'Event streams requiring operators (debounce, throttle)',
  'Multi-step async workflows',
  'When you need RxJS operators like switchMap, mergeMap',
  'WebSocket or SSE connections',
  'Complex state management (use NgRx instead)'
] as const;

export const SIGNALS_BEST_PRACTICES = [
  'Use signals for component state that changes over time',
  'Use computed() for derived values',
  'Use effect() sparingly - prefer computed() when possible',
  'Keep signals immutable - use update() with spread operator',
  'Avoid side effects in computed signals',
  'Use WritableSignal type for better type safety',
  'Combine with OnPush for optimal performance'
] as const;
