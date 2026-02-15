export const STATE_MANAGEMENT_CODE_EXAMPLES = {
  actions: {
    code: `// Actions - Events that describe state changes
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User List] Load Users');

export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const addUser = createAction(
  '[User Form] Add User',
  props<{ user: User }>()
);`,
    output: `✓ Describe what happened
✓ Use createAction helper
✓ props() for payload
✓ Naming: [Source] Event`
  },
  reducer: {
    code: `// Reducer - Pure function that handles state transitions
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({
    ...state,
    loading: true
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);`,
    output: `✓ Pure function
✓ Immutable state updates
✓ Use spread operator
✓ Handle multiple actions`
  },
  selectors: {
    code: `// Selectors - Query state slices
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectUsersLoading = createSelector(
  selectUserState,
  state => state.loading
);

export const selectUsersError = createSelector(
  selectUserState,
  state => state.error
);

export const selectUserById = (id: number) => createSelector(
  selectAllUsers,
  users => users.find(user => user.id === id)
);`,
    output: `✓ Memoized queries
✓ Compose selectors
✓ Reusable and testable
✓ Performance optimized`
  },
  effects: {
    code: `// Effects - Handle side effects
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => 
            of(UserActions.loadUsersFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}`,
    output: `✓ Handle async operations
✓ Dispatch new actions
✓ Listen to action streams
✓ Isolate side effects`
  },
  storeSetup: {
    code: `// Store Setup
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './user.reducer';
import { UserEffects } from './user.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppModule { }`,
    output: `✓ Register reducers
✓ Register effects
✓ Enable DevTools
✓ Single source of truth`
  },
  componentUsage: {
    code: `// Component Usage
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from './store/user.actions';
import * as UserSelectors from './store/user.selectors';

@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error">{{ error }}</div>
    <div *ngFor="let user of users$ | async">
      {{ user.name }}
    </div>
  \`
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.users$ = this.store.select(UserSelectors.selectAllUsers);
    this.loading$ = this.store.select(UserSelectors.selectUsersLoading);
    this.error$ = this.store.select(UserSelectors.selectUsersError);
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
}`,
    output: `✓ Dispatch actions
✓ Select state with observables
✓ Use async pipe
✓ No manual subscriptions`
  },
  entityAdapter: {
    code: `// Entity Adapter - Manage collections
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: string | null;
}

export const userAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
});

const initialState: UserState = userAdapter.getInitialState({
  loading: false,
  error: null
});

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loading: false })
  ),
  on(UserActions.addUser, (state, { user }) =>
    userAdapter.addOne(user, state)
  ),
  on(UserActions.updateUser, (state, { user }) =>
    userAdapter.updateOne({ id: user.id, changes: user }, state)
  ),
  on(UserActions.deleteUser, (state, { id }) =>
    userAdapter.removeOne(id, state)
  )
);`,
    output: `✓ CRUD operations built-in
✓ Normalized state
✓ Performance optimized
✓ Sorting and filtering`
  },
  componentStore: {
    code: `// Component Store - Local state management
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap, switchMap } from 'rxjs/operators';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  constructor(private todoService: TodoService) {
    super({ todos: [], filter: 'all' });
  }

  // Selectors
  readonly todos$ = this.select(state => state.todos);
  readonly filter$ = this.select(state => state.filter);
  
  readonly filteredTodos$ = this.select(
    this.todos$,
    this.filter$,
    (todos, filter) => {
      if (filter === 'active') return todos.filter(t => !t.completed);
      if (filter === 'completed') return todos.filter(t => t.completed);
      return todos;
    }
  );

  // Updaters
  readonly addTodo = this.updater((state, todo: Todo) => ({
    ...state,
    todos: [...state.todos, todo]
  }));

  readonly setFilter = this.updater((state, filter: TodoState['filter']) => ({
    ...state,
    filter
  }));

  // Effects
  readonly loadTodos = this.effect(trigger$ =>
    trigger$.pipe(
      switchMap(() => this.todoService.getTodos()),
      tap(todos => this.patchState({ todos }))
    )
  );
}`,
    output: `✓ Component-scoped state
✓ Simpler than global store
✓ Automatic cleanup
✓ Perfect for feature state`
  }
} as const;

export const STATE_MANAGEMENT_PATTERNS = [
  'NgRx Store: Redux pattern for Angular',
  'Component Store: Local component state',
  'Services with BehaviorSubject: Simple state sharing',
  'Signals: New reactive primitive (Angular 16+)',
  'Akita: Alternative state management',
  'NGXS: Simpler than NgRx'
] as const;

export const WHEN_TO_USE_NGRX = [
  'Large applications with complex state',
  'Multiple components sharing state',
  'Need for time-travel debugging',
  'Undo/redo functionality required',
  'State persistence needed',
  'Team familiar with Redux pattern'
] as const;

export const STATE_MANAGEMENT_BEST_PRACTICES = [
  'Keep state normalized and flat',
  'Use selectors for all state access',
  'Dispatch actions, never mutate state',
  'Use effects for side effects only',
  'Keep reducers pure and simple',
  'Use Entity Adapter for collections',
  'Enable StoreDevtools in development',
  'Consider Component Store for local state',
  'Avoid storing derived data',
  'Use action naming convention: [Source] Event'
] as const;
