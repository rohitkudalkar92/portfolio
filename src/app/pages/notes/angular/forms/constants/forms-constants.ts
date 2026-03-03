export const FORMS_CODE_EXAMPLES = {
  templateDriven: `<!-- Template-Driven Form -->
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <div>
    <label for="name">Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      [(ngModel)]="user.name" 
      #name="ngModel"
      required
      minlength="2">
    <div *ngIf="name.invalid && name.touched">
      <small *ngIf="name.errors?.['required']">Name is required</small>
      <small *ngIf="name.errors?.['minlength']">Name must be at least 2 characters</small>
    </div>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      [(ngModel)]="user.email" 
      #email="ngModel"
      required
      email>
    <div *ngIf="email.invalid && email.touched">
      <small *ngIf="email.errors?.['required']">Email is required</small>
      <small *ngIf="email.errors?.['email']">Invalid email format</small>
    </div>
  </div>
  
  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>`,

  reactive: `// Reactive Form Component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern(/^\\d{5}$/)]]
      })
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
}`,

  reactiveTemplate: `<!-- Reactive Form Template -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" formControlName="name">
    <div *ngIf="name?.invalid && name?.touched">
      <small *ngIf="name?.errors?.['required']">Name is required</small>
      <small *ngIf="name?.errors?.['minlength']">Name must be at least 2 characters</small>
    </div>
  </div>

  <div formGroupName="address">
    <h3>Address</h3>
    <input type="text" placeholder="Street" formControlName="street">
    <input type="text" placeholder="City" formControlName="city">
    <input type="text" placeholder="Zip Code" formControlName="zipCode">
  </div>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>`,

  customValidator: `// Custom Validator
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

// Usage
this.userForm = this.fb.group({
  name: ['', [
    Validators.required,
    forbiddenNameValidator(/admin/i)
  ]]
});`,

  asyncValidator: `// Async Validator
export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }
    
    return userService.checkEmailExists(control.value).pipe(
      map(exists => exists ? { emailExists: true } : null),
      catchError(() => of(null))
    );
  };
}`,

  formArray: `// Form Array Example
import { FormArray, FormControl } from '@angular/forms';

export class HobbiesFormComponent {
  hobbiesForm = this.fb.group({
    hobbies: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  get hobbies() {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }
}`,

  formArrayTemplate: `<!-- Form Array Template -->
<form [formGroup]="hobbiesForm">
  <div formArrayName="hobbies">
    <div *ngFor="let hobby of hobbies.controls; let i = index">
      <input type="text" [formControlName]="i" placeholder="Hobby">
      <button type="button" (click)="removeHobby(i)">Remove</button>
    </div>
  </div>
  <button type="button" (click)="addHobby()">Add Hobby</button>
</form>`
};

export const FORM_VALIDATION_TYPES = [
  {
    name: 'required',
    description: 'Field must have a value',
    example: 'Validators.required'
  },
  {
    name: 'minLength',
    description: 'Minimum character length',
    example: 'Validators.minLength(3)'
  },
  {
    name: 'maxLength',
    description: 'Maximum character length',
    example: 'Validators.maxLength(50)'
  },
  {
    name: 'pattern',
    description: 'Must match regex pattern',
    example: 'Validators.pattern(/^[a-zA-Z]+$/)'
  },
  {
    name: 'email',
    description: 'Valid email format',
    example: 'Validators.email'
  },
  {
    name: 'min',
    description: 'Minimum numeric value',
    example: 'Validators.min(18)'
  },
  {
    name: 'max',
    description: 'Maximum numeric value',
    example: 'Validators.max(100)'
  }
];

export const FORM_BEST_PRACTICES = [
  'Use reactive forms for complex scenarios',
  'Implement proper validation feedback',
  'Use FormBuilder for cleaner code',
  'Create reusable custom validators',
  'Handle form state changes with valueChanges',
  'Implement proper error handling',
  'Use FormArray for dynamic form controls',
  'Validate on blur for better UX',
  'Disable submit button when form is invalid',
  'Reset form after successful submission'
];

export const FORM_STATES = [
  {
    state: 'pristine',
    description: 'Form has not been modified',
    opposite: 'dirty'
  },
  {
    state: 'dirty',
    description: 'Form has been modified',
    opposite: 'pristine'
  },
  {
    state: 'touched',
    description: 'Form control has been visited',
    opposite: 'untouched'
  },
  {
    state: 'untouched',
    description: 'Form control has not been visited',
    opposite: 'touched'
  },
  {
    state: 'valid',
    description: 'Form passes all validation',
    opposite: 'invalid'
  },
  {
    state: 'invalid',
    description: 'Form fails validation',
    opposite: 'valid'
  }
];