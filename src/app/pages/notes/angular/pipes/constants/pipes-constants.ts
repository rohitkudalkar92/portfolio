export const PIPES_CODE_EXAMPLES = {
  builtIn: {
    code: `// Built-in Pipes
{{ value | uppercase }}
{{ value | lowercase }}
{{ value | titlecase }}
{{ price | currency:'USD':'symbol':'1.2-2' }}
{{ date | date:'short' }}
{{ percentage | percent:'1.2-2' }}
{{ data | json }}
{{ items | slice:0:5 }}`,
    output: `HELLO WORLD
hello world
Hello World
$1,234.56
12/25/2023, 10:30 AM
45.67%
{"name":"John","age":30}
[first 5 items]`
  },
  custom: {
    code: `// Custom Pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
  standalone: true
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}

// Usage in template
{{ 2 | exponential:3 }}`,
    output: `8`
  },
  pure: {
    code: `// Pure Pipe (default)
@Pipe({
  name: 'filter',
  pure: true,
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}`,
    output: `// Only re-runs when input reference changes`
  },
  impure: {
    code: `// Impure Pipe
@Pipe({
  name: 'asyncFilter',
  pure: false,
  standalone: true
})
export class AsyncFilterPipe implements PipeTransform {
  transform(items: any[], callback: (item: any) => boolean): any[] {
    return items.filter(callback);
  }
}`,
    output: `// Re-runs on every change detection cycle`
  },
  async: {
    code: `// Async Pipe
import { Observable } from 'rxjs';

export class Component {
  data$: Observable<string[]>;
  
  constructor(private service: DataService) {
    this.data$ = this.service.getData();
  }
}

// Template
<div *ngFor="let item of data$ | async">
  {{ item }}
</div>`,
    output: `// Automatically subscribes and unsubscribes`
  },
  chaining: {
    code: `// Chaining Pipes
{{ birthday | date:'fullDate' | uppercase }}
{{ price | currency:'USD' | slice:0:5 }}
{{ name | titlecase | slice:0:10 }}`,
    output: `MONDAY, DECEMBER 25, 2023
$1,23
John Smith`
  },
  parameters: {
    code: `// Pipe with Multiple Parameters
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, trail = '...'): string {
    return value.length > limit 
      ? value.substring(0, limit) + trail 
      : value;
  }
}

// Usage
{{ longText | truncate:50:'...' }}`,
    output: `This is a very long text that will be trunca...`
  },
  goodCase: {
    code: `// GOOD: Formatting display data
{{ price | currency:'USD' }}
{{ user.email | lowercase }}
{{ createdAt | date:'medium' }}

// GOOD: Simple transformations
{{ text | truncate:100 }}
{{ status | statusBadge }}

// GOOD: Using async pipe
<div *ngFor="let user of users$ | async">
  {{ user.name }}
</div>`,
    output: `✓ Clean separation of concerns
✓ Reusable across templates
✓ Easy to test
✓ No memory leaks with async pipe`
  },
  badCase: {
    code: `// BAD: Complex business logic
{{ data | complexCalculation | apiCall }}

// BAD: Impure pipes for filtering large lists
<div *ngFor="let item of items | filterPipe:searchTerm">

// BAD: Side effects in pipes
@Pipe({ name: 'logger' })
export class LoggerPipe {
  transform(value: any): any {
    console.log(value); // Side effect!
    this.service.logToServer(value); // API call!
    return value;
  }
}

// BAD: Stateful pipes
@Pipe({ name: 'counter' })
export class CounterPipe {
  count = 0; // Mutable state!
  transform(value: any): number {
    return ++this.count;
  }
}`,
    output: `✗ Performance issues
✗ Hard to debug
✗ Unpredictable behavior
✗ Violates pure function principles`
  }
} as const;

export const WHEN_TO_USE_PIPES = [
  'Formatting dates, numbers, and currency for display',
  'Converting text case (uppercase, lowercase, titlecase)',
  'Filtering and sorting lists in templates',
  'Transforming data for presentation without changing source',
  'Working with observables using async pipe',
  'Creating reusable display transformations across components'
] as const;

export const WHY_USE_PIPES = [
  'Keep components clean by moving presentation logic to pipes',
  'Reusable across multiple templates and components',
  'Easy to test in isolation',
  'Declarative syntax makes templates more readable',
  'Built-in change detection optimization with pure pipes',
  'Async pipe prevents memory leaks by auto-unsubscribing'
] as const;

export const PIPES_BEST_PRACTICES = [
  'Use pure pipes whenever possible for better performance',
  'Avoid complex logic in pipes - keep them simple and focused',
  'Use async pipe for observables to prevent memory leaks',
  'Mark pipes as standalone for modern Angular architecture',
  'Cache results in impure pipes to avoid unnecessary recalculations',
  'Use built-in pipes before creating custom ones',
  'Test pipes thoroughly with edge cases',
  'Document pipe parameters and expected input/output'
] as const;
