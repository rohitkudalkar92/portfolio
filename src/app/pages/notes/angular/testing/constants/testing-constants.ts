export const TESTING_CODE_EXAMPLES = {
  componentTest: {
    code: `// Component Testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    component.name = 'John Doe';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('John Doe');
  });
});`,
    output: `✓ TestBed configures testing module
✓ ComponentFixture wraps component
✓ detectChanges() triggers change detection
✓ Access DOM via nativeElement`
  },
  serviceTest: {
    code: `// Service Testing
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(3);
    expect(users[0].name).toBe('John');
  });
});`,
    output: `✓ TestBed.inject() gets service instance
✓ Test service methods directly
✓ No DOM interaction needed
✓ Fast and isolated tests`
  },
  httpTest: {
    code: `// HTTP Testing with HttpClientTestingModule
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding requests
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'John' }];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});`,
    output: `✓ HttpClientTestingModule for HTTP tests
✓ HttpTestingController mocks requests
✓ expectOne() verifies single request
✓ flush() provides mock response`
  },
  asyncTest: {
    code: `// Async Testing
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
  });

  it('should update after delay', fakeAsync(() => {
    component.startTimer();
    expect(component.count).toBe(0);
    
    tick(1000); // Simulate 1 second
    expect(component.count).toBe(1);
    
    tick(2000); // Simulate 2 more seconds
    expect(component.count).toBe(3);
  }));
});`,
    output: `✓ fakeAsync() for async operations
✓ tick() advances virtual time
✓ No real waiting required
✓ Fast async tests`
  },
  spyTest: {
    code: `// Spies and Mocks
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent with Spy', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers', 'deleteUser']);

    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should call getUsers on init', () => {
    userService.getUsers.and.returnValue([{ id: 1, name: 'John' }]);
    component.ngOnInit();
    expect(userService.getUsers).toHaveBeenCalled();
  });
});`,
    output: `✓ jasmine.createSpyObj() creates mock
✓ and.returnValue() sets return value
✓ toHaveBeenCalled() verifies calls
✓ Isolate component from dependencies`
  },
  routingTest: {
    code: `// Router Testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should navigate to users', () => {
    component.goToUsers();
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});`,
    output: `✓ Mock Router with spy
✓ Test navigation calls
✓ Verify route parameters
✓ No actual navigation`
  },
  formTest: {
    code: `// Form Testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should validate email', () => {
    const emailControl = component.loginForm.get('email');
    
    emailControl?.setValue('invalid');
    expect(emailControl?.valid).toBeFalsy();
    
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should disable submit when form invalid', () => {
    expect(component.loginForm.valid).toBeFalsy();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
  });
});`,
    output: `✓ Import ReactiveFormsModule
✓ Test form validation
✓ Check control values
✓ Verify form state`
  },
  pipeTest: {
    code: `// Pipe Testing
import { ExponentialPipe } from './exponential.pipe';

describe('ExponentialPipe', () => {
  let pipe: ExponentialPipe;

  beforeEach(() => {
    pipe = new ExponentialPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should calculate power', () => {
    expect(pipe.transform(2, 3)).toBe(8);
    expect(pipe.transform(5, 2)).toBe(25);
  });

  it('should default to power of 1', () => {
    expect(pipe.transform(5)).toBe(5);
  });
});`,
    output: `✓ Instantiate pipe directly
✓ Test transform method
✓ No TestBed needed
✓ Simple unit tests`
  }
} as const;

export const TEST_TYPES = [
  'Unit Tests: Test individual components, services, pipes in isolation',
  'Integration Tests: Test component interactions with dependencies',
  'E2E Tests: Test complete user workflows (Protractor/Cypress)',
  'Snapshot Tests: Capture and compare component output'
] as const;

export const TESTING_TOOLS = [
  'Jasmine: Testing framework with describe, it, expect',
  'Karma: Test runner that executes tests in browsers',
  'TestBed: Angular testing utility for configuring modules',
  'HttpClientTestingModule: Mock HTTP requests',
  'fakeAsync/tick: Control async operations in tests',
  'Spies: Mock functions and track calls'
] as const;

export const TESTING_BEST_PRACTICES = [
  'Follow AAA pattern: Arrange, Act, Assert',
  'Test one thing per test case',
  'Use descriptive test names',
  'Mock external dependencies',
  'Test both success and error cases',
  'Keep tests fast and isolated',
  'Aim for high code coverage (80%+)',
  'Run tests before committing code',
  'Use beforeEach for common setup',
  'Clean up after tests (afterEach)'
] as const;
