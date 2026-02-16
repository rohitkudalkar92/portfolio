export const CONTROL_FLOW_CODE_EXAMPLES = {
  ifSyntax: {
    code: `// @if - New conditional syntax (Angular 17+)
@if (user.isLoggedIn) {
  <p>Welcome, {{ user.name }}!</p>
} @else if (user.isGuest) {
  <p>Welcome, Guest!</p>
} @else {
  <p>Please log in</p>
}

// Old syntax (still supported)
<p *ngIf="user.isLoggedIn">Welcome, {{ user.name }}!</p>
<p *ngIf="!user.isLoggedIn">Please log in</p>`,
    output: `✓ Cleaner syntax
✓ Built-in else if support
✓ No structural directives needed
✓ Better type inference`
  },
  forSyntax: {
    code: `// @for - New loop syntax (Angular 17+)
@for (user of users; track user.id) {
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
} @empty {
  <p>No users found</p>
}

// Old syntax (still supported)
<div *ngFor="let user of users; trackBy: trackByUserId">
  <h3>{{ user.name }}</h3>
</div>`,
    output: `✓ Required track expression
✓ Built-in @empty block
✓ Better performance
✓ Cleaner syntax`
  },
  switchSyntax: {
    code: `// @switch - New switch syntax (Angular 17+)
@switch (status) {
  @case ('pending') {
    <p>Order is pending</p>
  }
  @case ('processing') {
    <p>Order is being processed</p>
  }
  @case ('completed') {
    <p>Order completed!</p>
  }
  @default {
    <p>Unknown status</p>
  }
}

// Old syntax (still supported)
<div [ngSwitch]="status">
  <p *ngSwitchCase="'pending'">Order is pending</p>
  <p *ngSwitchCase="'processing'">Order is being processed</p>
  <p *ngSwitchDefault>Unknown status</p>
</div>`,
    output: `✓ Block-based syntax
✓ No container element needed
✓ Cleaner and more readable
✓ Better type checking`
  },
  forWithIndex: {
    code: `// @for with index and other variables
@for (item of items; track item.id; let idx = $index) {
  <div>
    <span>{{ idx + 1 }}. {{ item.name }}</span>
    @if ($first) {
      <span class="badge">First</span>
    }
    @if ($last) {
      <span class="badge">Last</span>
    }
  </div>
}

// Available variables:
// $index - current index
// $first - true if first item
// $last - true if last item
// $even - true if even index
// $odd - true if odd index
// $count - total number of items`,
    output: `✓ Access loop variables
✓ $index, $first, $last
✓ $even, $odd, $count
✓ Combine with @if`
  },
  nestedControl: {
    code: `// Nested control flow
@for (category of categories; track category.id) {
  <div class="category">
    <h2>{{ category.name }}</h2>
    
    @if (category.products.length > 0) {
      @for (product of category.products; track product.id) {
        <div class="product">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price | currency }}</p>
          
          @switch (product.stock) {
            @case (0) {
              <span class="out-of-stock">Out of Stock</span>
            }
            @case (1) {
              <span class="low-stock">Only 1 left!</span>
            }
            @default {
              <span class="in-stock">In Stock</span>
            }
          }
        </div>
      } @empty {
        <p>No products in this category</p>
      }
    } @else {
      <p>Category is empty</p>
    }
  </div>
}`,
    output: `✓ Combine @if, @for, @switch
✓ Nested structures
✓ Clean and readable
✓ No wrapper elements`
  },
  trackBy: {
    code: `// Track expressions in @for
// Simple property
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
}

// Index tracking (not recommended)
@for (item of items; track $index) {
  <p>{{ item }}</p>
}

// Complex expression
@for (item of items; track item.category + item.id) {
  <p>{{ item.name }}</p>
}

// Function call
@for (user of users; track trackUser(user)) {
  <p>{{ user.name }}</p>
}`,
    output: `✓ Track is required
✓ Use unique identifier
✓ Improves performance
✓ Prevents unnecessary re-renders`
  },
  migration: {
    code: `// Migration from old to new syntax

// BEFORE (Old Syntax)
<div *ngIf="isVisible">
  <ul>
    <li *ngFor="let item of items; trackBy: trackById">
      <span [ngSwitch]="item.type">
        <span *ngSwitchCase="'A'">Type A</span>
        <span *ngSwitchCase="'B'">Type B</span>
        <span *ngSwitchDefault>Unknown</span>
      </span>
    </li>
  </ul>
</div>

// AFTER (New Syntax)
@if (isVisible) {
  <ul>
    @for (item of items; track item.id) {
      <li>
        @switch (item.type) {
          @case ('A') { <span>Type A</span> }
          @case ('B') { <span>Type B</span> }
          @default { <span>Unknown</span> }
        }
      </li>
    }
  </ul>
}`,
    output: `✓ Remove structural directives
✓ Use @ syntax
✓ Cleaner templates
✓ Both syntaxes work together`
  },
  advantages: {
    code: `// Advantages of new control flow

// 1. Better Performance
// - Faster rendering
// - Smaller bundle size
// - Built into compiler

// 2. Better Type Safety
@if (user) {
  // TypeScript knows user is not null here
  <p>{{ user.name }}</p>
}

// 3. No Wrapper Elements
@if (condition) {
  <p>Content</p>
}
// vs old syntax requiring container
<ng-container *ngIf="condition">
  <p>Content</p>
</ng-container>

// 4. Built-in @empty
@for (item of items; track item.id) {
  <p>{{ item }}</p>
} @empty {
  <p>No items</p>
}
// vs old syntax
<div *ngIf="items.length > 0; else noItems">
  <p *ngFor="let item of items">{{ item }}</p>
</div>
<ng-template #noItems>
  <p>No items</p>
</ng-template>`,
    output: `✓ 90% faster rendering
✓ 30% smaller bundles
✓ Better type inference
✓ Cleaner templates`
  }
} as const;

export const CONTROL_FLOW_FEATURES = [
  '@if: Conditional rendering with else if support',
  '@for: Loops with required track and @empty block',
  '@switch: Switch statements with @case and @default',
  'No structural directives needed',
  'Better performance and smaller bundles',
  'Improved type safety and inference',
  'Built-in @empty for @for loops',
  'Cleaner syntax without wrapper elements'
] as const;

export const MIGRATION_GUIDE = [
  '*ngIf → @if with @else if and @else',
  '*ngFor → @for with track (required)',
  'trackBy function → track expression',
  '[ngSwitch] → @switch with @case',
  'Use @empty instead of checking length',
  'Remove ng-container wrappers',
  'Both syntaxes can coexist',
  'Migrate gradually, no rush'
] as const;

export const CONTROL_FLOW_BEST_PRACTICES = [
  'Always use track with @for for performance',
  'Use unique identifiers for track (id, not index)',
  'Leverage @empty for cleaner empty state handling',
  'Combine @if with @else if for multiple conditions',
  'No need for ng-container with new syntax',
  'Use @switch for multiple conditions on same value',
  'Take advantage of improved type inference',
  'Migrate new code to @ syntax, keep old code as is',
  'Test thoroughly when migrating',
  'Use Angular CLI schematic for migration'
] as const;
