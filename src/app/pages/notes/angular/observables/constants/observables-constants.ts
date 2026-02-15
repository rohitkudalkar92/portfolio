export const OBSERVABLES_CODE_EXAMPLES = {
  basic: {
    code: `// Basic Observable
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

observable.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Complete')
});`,
    output: `1
2
3
Complete`
  },
  map: {
    code: `// map - Transform emitted values
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(
    map(x => x * 2)
  )
  .subscribe(value => console.log(value));`,
    output: `2
4
6
8
10`
  },
  filter: {
    code: `// filter - Emit values that pass condition
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 6)
  .pipe(
    filter(x => x % 2 === 0)
  )
  .subscribe(value => console.log(value));`,
    output: `2
4
6`
  },
  switchMap: {
    code: `// switchMap - Switch to new observable, cancel previous
import { fromEvent } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

const searchBox = document.getElementById('search');
fromEvent(searchBox, 'input')
  .pipe(
    debounceTime(300),
    switchMap(event => 
      this.http.get(\`/api/search?q=\${event.target.value}\`)
    )
  )
  .subscribe(results => console.log(results));`,
    output: `✓ Cancels previous HTTP request
✓ Only latest search executes
✓ Prevents race conditions`
  },
  mergeMap: {
    code: `// mergeMap - Merge multiple observables
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

of(1, 2, 3)
  .pipe(
    mergeMap(x => 
      of(x * 10).pipe(delay(1000))
    )
  )
  .subscribe(value => console.log(value));`,
    output: `10 (after 1s)
20 (after 1s)
30 (after 1s)
All execute in parallel`
  },
  combineLatest: {
    code: `// combineLatest - Combine latest values from multiple observables
import { combineLatest, of } from 'rxjs';

const age$ = of(25, 30, 35);
const name$ = of('John', 'Jane');

combineLatest([age$, name$])
  .subscribe(([age, name]) => 
    console.log(\`\${name} is \${age} years old\`)
  );`,
    output: `Jane is 25 years old
Jane is 30 years old
Jane is 35 years old`
  },
  debounceTime: {
    code: `// debounceTime - Delay emissions
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

const input = document.getElementById('search');
fromEvent(input, 'input')
  .pipe(
    debounceTime(500),
    map(event => event.target.value)
  )
  .subscribe(value => console.log(value));`,
    output: `✓ Waits 500ms after last input
✓ Reduces API calls
✓ Improves performance`
  },
  takeUntil: {
    code: `// takeUntil - Unsubscribe pattern
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  template: '<p>{{ data }}</p>'
})
export class UserComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  data: any;

  constructor(private service: DataService) {
    this.service.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,
    output: `✓ Automatic unsubscription
✓ Prevents memory leaks
✓ Clean component destruction`
  },
  catchError: {
    code: `// catchError - Handle errors gracefully
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

this.http.get('/api/users')
  .pipe(
    map(response => response.data),
    catchError(error => {
      console.error('Error:', error);
      return of([]); // Return empty array as fallback
    })
  )
  .subscribe(users => console.log(users));`,
    output: `✓ Handles errors without breaking stream
✓ Provides fallback values
✓ Continues observable chain`
  },
  forkJoin: {
    code: `// forkJoin - Wait for all observables to complete
import { forkJoin } from 'rxjs';

const users$ = this.http.get('/api/users');
const posts$ = this.http.get('/api/posts');
const comments$ = this.http.get('/api/comments');

forkJoin([users$, posts$, comments$])
  .subscribe(([users, posts, comments]) => {
    console.log('All data loaded:', { users, posts, comments });
  });`,
    output: `✓ Waits for all requests
✓ Returns array of results
✓ Like Promise.all()`
  },
  subject: {
    code: `// Subject - Multicast observable
import { Subject } from 'rxjs';

const subject = new Subject<number>();

// Subscriber 1
subject.subscribe(value => console.log('Sub1:', value));

// Subscriber 2
subject.subscribe(value => console.log('Sub2:', value));

subject.next(1);
subject.next(2);`,
    output: `Sub1: 1
Sub2: 1
Sub1: 2
Sub2: 2`
  },
  behaviorSubject: {
    code: `// BehaviorSubject - Subject with initial value
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject<number>(0);

subject.subscribe(value => console.log('Sub1:', value));

subject.next(1);
subject.next(2);

// Late subscriber gets current value
subject.subscribe(value => console.log('Sub2:', value));`,
    output: `Sub1: 0
Sub1: 1
Sub1: 2
Sub2: 2 (current value)`
  }
} as const;

export const WHAT_IS_OBSERVABLES = [
  'Observable: A stream of data that emits values over time',
  'RxJS: Reactive Extensions for JavaScript - library for reactive programming',
  'Push-based: Observables push data to subscribers (vs pull-based like Promises)',
  'Lazy: Observables don\'t execute until subscribed',
  'Cancellable: Can unsubscribe to stop receiving values',
  'Multiple values: Can emit multiple values over time (vs Promise single value)',
  'Operators: Transform, filter, combine data streams declaratively'
] as const;

export const OBSERVABLES_VS_PROMISES = [
  'Observables: Lazy, cancellable, multiple values, operators',
  'Promises: Eager, not cancellable, single value, then/catch',
  'Observables: Can be synchronous or asynchronous',
  'Promises: Always asynchronous',
  'Observables: Rich operator library (map, filter, merge)',
  'Promises: Limited chaining (then, catch, finally)'
] as const;

export const OBSERVABLES_VS_REDUX = [
  'RxJS: Reactive programming library for async data streams',
  'Redux: State management library with single store',
  'RxJS: Handles async operations, events, HTTP requests',
  'Redux: Manages application state with actions and reducers',
  'RxJS: Can be used WITH Redux (redux-observable)',
  'Redux: Predictable state container, time-travel debugging',
  'RxJS: Focus on data flow and transformations',
  'Redux: Focus on state mutations and immutability',
  'Use RxJS: For complex async operations, event handling',
  'Use Redux: For centralized state management across app'
] as const;

export const COMMON_OPERATORS = [
  'map - Transform each value',
  'filter - Emit values that pass condition',
  'switchMap - Switch to new observable, cancel previous',
  'mergeMap - Merge multiple observables',
  'concatMap - Execute observables sequentially',
  'debounceTime - Delay emissions',
  'distinctUntilChanged - Emit only when value changes',
  'takeUntil - Complete when another observable emits',
  'catchError - Handle errors',
  'tap - Perform side effects',
  'combineLatest - Combine latest values',
  'forkJoin - Wait for all to complete'
] as const;

export const WHEN_TO_USE_RXJS = [
  'HTTP requests and API calls',
  'User input events (search, autocomplete)',
  'WebSocket connections',
  'State management',
  'Complex async operations',
  'Event handling across components',
  'Real-time data streams'
] as const;

export const RXJS_BEST_PRACTICES = [
  'Always unsubscribe to prevent memory leaks',
  'Use async pipe in templates for automatic unsubscription',
  'Use takeUntil pattern for component cleanup',
  'Avoid nested subscriptions - use operators instead',
  'Use switchMap for search/autocomplete',
  'Use catchError to handle errors gracefully',
  'Keep observables pure and side-effect free',
  'Use shareReplay for expensive operations'
] as const;
