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
  setMethod: {
    code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-set-demo',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <button (click)="reset()">Reset</button>
    <button (click)="setToTen()">Set to 10</button>
  \`
})
export class SetDemoComponent {
  count = signal(0);

  reset() {
    this.count.set(0);  // Set to specific value
  }

  setToTen() {
    this.count.set(10);  // Replace current value
  }
}`,
    output: `count.set(0) → 0
count.set(10) → 10
✓ Replaces entire value`
  },
  updateMethod: {
    code: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-update-demo',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
    <button (click)="double()">×2</button>
  \`
})
export class UpdateDemoComponent {
  count = signal(5);

  increment() {
    this.count.update(current => current + 1);
  }

  double() {
    this.count.update(current => current * 2);
  }
}`,
    output: `count.update(n => n + 1) → 6
count.update(n => n * 2) → 12
✓ Updates based on current value`
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
  },
  dataTypes: {
    code: `import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-data-types',
  standalone: true,
  template: \`<div>Examples</div>\`
})
export class DataTypesComponent {
  // Primitive types
  count = signal<number>(0);
  name = signal<string>('John');
  isActive = signal<boolean>(true);
  
  // Array type
  items = signal<string[]>(['a', 'b', 'c']);
  
  // Object type
  user = signal<{ id: number; name: string }>({
    id: 1,
    name: 'John'
  });
  
  // Interface type
  profile: WritableSignal<UserProfile> = signal({
    email: 'john@example.com',
    age: 25
  });
  
  // Union type
  status = signal<'idle' | 'loading' | 'success'>('idle');
  
  // Optional/nullable
  data = signal<string | null>(null);
}

interface UserProfile {
  email: string;
  age: number;
}`,
    output: `signal<number>(0)
signal<string>('John')
signal<boolean>(true)
signal<string[]>(['a', 'b'])
signal<User>({ id: 1 })`
  },
  valueTypes: {
    code: `import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-value-types',
  standalone: true,
  template: \`<div>{{ product().name }}</div>\`
})
export class ValueTypesComponent {
  // Primitive values
  count = signal(42);              // number
  title = signal('Hello');         // string
  enabled = signal(true);          // boolean
  
  // Complex values
  tags = signal(['angular', 'signals']);  // array
  
  product = signal<Product>({      // object
    id: 1,
    name: 'Laptop',
    price: 999
  });
  
  // Null/undefined
  optional = signal<string | null>(null);
  data = signal<number | undefined>(undefined);
}`,
    output: `Values: primitives, arrays, objects
✓ Immutable updates recommended
✓ Type inference works`
  },
  setVsUpdate: {
    code: `import { Component, signal } from '@angular/core';

interface Cart {
  items: string[];
  total: number;
}

@Component({
  selector: 'app-set-vs-update',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <p>Items: {{ cart().items.length }}</p>
  \`
})
export class SetVsUpdateComponent {
  count = signal(0);
  cart = signal<Cart>({ items: [], total: 0 });

  // Use set() - when you have the complete new value
  resetCount() {
    this.count.set(0);  // Direct value
  }

  setCountFromAPI(value: number) {
    this.count.set(value);  // Value from external source
  }

  // Use update() - when you need current value
  increment() {
    this.count.update(current => current + 1);
  }

  addItem(item: string) {
    this.cart.update(current => ({
      items: [...current.items, item],
      total: current.total + 1
    }));
  }
}`,
    output: `Use set():
✓ Reset to fixed value
✓ Replace with external data

Use update():
✓ Increment/decrement
✓ Modify based on current state`
  }
} as const;

export const WHEN_TO_USE_SET = [
  'Resetting to initial/default value',
  'Setting value from API response',
  'Replacing entire state with new data',
  'Setting value from user input directly',
  'When new value is independent of current value'
] as const;

export const WHEN_TO_USE_UPDATE = [
  'Incrementing or decrementing numbers',
  'Adding/removing items from arrays',
  'Updating object properties immutably',
  'Toggling boolean values',
  'Any operation that depends on current value'
] as const;

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

export const SIGNALS_REFERENCE = [
  {
    title: 'Angular Signals Complete Guide',
    url: 'https://www.youtube.com/watch?v=9f4YoN3v_5Y'
  },
  {
    title: 'Angular Signals Tutorial',
    url: 'https://www.youtube.com/watch?v=v47E_Z6lrGk'
  },
  {
    title: 'Angular Signals Deep Dive',
    url: 'https://www.youtube.com/watch?v=2EuQGcHoZwk'
  }
] as const;
