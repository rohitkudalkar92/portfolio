export const DATA_BINDING_CODE_EXAMPLES = {
  interpolation: {
    code: `// Interpolation - One-way from component to view
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: \`
    <h1>{{ title }}</h1>
    <p>Welcome, {{ firstName }} {{ lastName }}!</p>
    <p>Age: {{ age }}</p>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>{{ getMessage() }}</p>
  \`
})
export class UserComponent {
  title = 'User Profile';
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  
  getMessage(): string {
    return 'Hello from method!';
  }
}`,
    output: `User Profile
Welcome, John Doe!
Age: 30
2 + 2 = 4
Hello from method!`
  },
  propertyBinding: {
    code: `// Property Binding - Bind to element properties
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  template: \`
    <img [src]="imageUrl" [alt]="imageAlt">
    <button [disabled]="isDisabled">Click Me</button>
    <div [class.active]="isActive">Status</div>
    <div [style.color]="textColor">Colored Text</div>
    <input [value]="username" [readonly]="isReadonly">
  \`
})
export class ImageComponent {
  imageUrl = 'assets/logo.png';
  imageAlt = 'Company Logo';
  isDisabled = false;
  isActive = true;
  textColor = 'blue';
  username = 'john_doe';
  isReadonly = true;
}`,
    output: `✓ Bind to any DOM property
✓ Use square brackets [property]
✓ Dynamic property values
✓ Type-safe binding`
  },
  eventBinding: {
    code: `// Event Binding - Handle user events
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <p>Count: {{ count }}</p>
    
    <input (input)="onInput($event)" [value]="text">
    <p>You typed: {{ text }}</p>
    
    <div (mouseenter)="onMouseEnter()" 
         (mouseleave)="onMouseLeave()">
      Hover me: {{ isHovered }}
    </div>
  \`
})
export class CounterComponent {
  count = 0;
  text = '';
  isHovered = false;
  
  increment(): void {
    this.count++;
  }
  
  decrement(): void {
    this.count--;
  }
  
  onInput(event: Event): void {
    this.text = (event.target as HTMLInputElement).value;
  }
  
  onMouseEnter(): void {
    this.isHovered = true;
  }
  
  onMouseLeave(): void {
    this.isHovered = false;
  }
}`,
    output: `✓ Use parentheses (event)
✓ Access $event object
✓ Call component methods
✓ Handle any DOM event`
  },
  twoWayBinding: {
    code: `// Two-Way Binding - Sync data between view and component
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <input [(ngModel)]="username" placeholder="Username">
    <p>Username: {{ username }}</p>
    
    <input [(ngModel)]="email" type="email">
    <p>Email: {{ email }}</p>
    
    <textarea [(ngModel)]="message"></textarea>
    <p>Message length: {{ message.length }}</p>
    
    <select [(ngModel)]="country">
      <option value="US">United States</option>
      <option value="UK">United Kingdom</option>
      <option value="CA">Canada</option>
    </select>
    <p>Selected: {{ country }}</p>
  \`
})
export class FormComponent {
  username = '';
  email = '';
  message = '';
  country = 'US';
}`,
    output: `✓ Combines property and event binding
✓ Syntax: [(ngModel)]
✓ Requires FormsModule
✓ Automatic synchronization`
  },
  attributeBinding: {
    code: `// Attribute Binding - Bind to HTML attributes
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes',
  template: \`
    <button [attr.aria-label]="buttonLabel">Click</button>
    <div [attr.role]="roleValue">Content</div>
    <td [attr.colspan]="columnSpan">Cell</td>
    <input [attr.data-id]="userId" [attr.required]="isRequired ? '' : null">
  \`
})
export class AttributesComponent {
  buttonLabel = 'Submit Form';
  roleValue = 'navigation';
  columnSpan = 2;
  userId = '12345';
  isRequired = true;
}`,
    output: `✓ Use [attr.attribute-name]
✓ For attributes without DOM properties
✓ ARIA attributes
✓ Data attributes`
  },
  classBinding: {
    code: `// Class Binding - Dynamic CSS classes
import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  template: \`
    <!-- Single class -->
    <div [class.active]="isActive">Active State</div>
    
    <!-- Multiple classes with object -->
    <div [class]="{ 'active': isActive, 'disabled': isDisabled }">
      Multi-class
    </div>
    
    <!-- Class string -->
    <div [class]="currentClasses">Dynamic Classes</div>
    
    <!-- NgClass directive -->
    <div [ngClass]="getClasses()">NgClass</div>
  \`,
  styles: [\`
    .active { color: green; }
    .disabled { opacity: 0.5; }
    .highlight { background: yellow; }
  \`]
})
export class StylesComponent {
  isActive = true;
  isDisabled = false;
  currentClasses = 'active highlight';
  
  getClasses() {
    return {
      'active': this.isActive,
      'disabled': this.isDisabled
    };
  }
}`,
    output: `✓ [class.className] for single class
✓ [class] for multiple classes
✓ [ngClass] for complex logic
✓ Dynamic class management`
  },
  styleBinding: {
    code: `// Style Binding - Dynamic inline styles
import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-styles',
  template: \`
    <!-- Single style -->
    <div [style.color]="textColor">Colored Text</div>
    <div [style.font-size.px]="fontSize">Sized Text</div>
    
    <!-- Multiple styles with object -->
    <div [style]="{ 'color': textColor, 'font-size': fontSize + 'px' }">
      Multi-style
    </div>
    
    <!-- NgStyle directive -->
    <div [ngStyle]="getStyles()">NgStyle</div>
    
    <!-- With units -->
    <div [style.width.%]="widthPercent">Width</div>
    <div [style.margin.px]="marginPixels">Margin</div>
  \`
})
export class InlineStylesComponent {
  textColor = 'blue';
  fontSize = 16;
  widthPercent = 50;
  marginPixels = 10;
  
  getStyles() {
    return {
      'color': this.textColor,
      'font-size': this.fontSize + 'px',
      'font-weight': 'bold'
    };
  }
}`,
    output: `✓ [style.property] for single style
✓ [style] for multiple styles
✓ [ngStyle] for complex logic
✓ Support for units (.px, .%, .em)`
  },
  customTwoWay: {
    code: `// Custom Two-Way Binding
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: \`
    <input [value]="value" (input)="onValueChange($event)">
  \`
})
export class CustomInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  
  onValueChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}

// Usage in parent component
@Component({
  selector: 'app-parent',
  template: \`
    <app-custom-input [(value)]="name"></app-custom-input>
    <p>Name: {{ name }}</p>
  \`
})
export class ParentComponent {
  name = 'John';
}`,
    output: `✓ @Input() for property
✓ @Output() with 'Change' suffix
✓ EventEmitter for updates
✓ Use [(property)] syntax`
  }
} as const;

export const BINDING_TYPES = [
  'Interpolation {{ }} - Display component data in template',
  'Property Binding [property] - Set element properties',
  'Event Binding (event) - Handle user events',
  'Two-Way Binding [(ngModel)] - Sync data bidirectionally',
  'Attribute Binding [attr.name] - Set HTML attributes',
  'Class Binding [class.name] - Toggle CSS classes',
  'Style Binding [style.property] - Set inline styles'
] as const;

export const WHEN_TO_USE = [
  'Interpolation: Display simple text or component properties',
  'Property Binding: Set dynamic values for element properties (src, disabled, value)',
  'Event Binding: Respond to user actions (clicks, input, hover)',
  'Two-Way Binding: Forms where user input needs to update component state',
  'Attribute Binding: Set ARIA attributes, data attributes, or colspan/rowspan',
  'Class Binding: Toggle CSS classes based on component state',
  'Style Binding: Apply dynamic inline styles with specific values'
] as const;

export const WHERE_TO_USE = [
  'Interpolation: Text content, attribute values in templates',
  'Property Binding: Any element property (img src, button disabled, input value)',
  'Event Binding: User interaction points (buttons, inputs, forms)',
  'Two-Way Binding: Form inputs, textareas, selects in template-driven forms',
  'Attribute Binding: Accessibility features, custom data attributes',
  'Class Binding: Conditional styling, state-based UI changes',
  'Style Binding: Dynamic colors, sizes, positions'
] as const;

export const WHY_USE = [
  'Interpolation: Simple, readable syntax for displaying data',
  'Property Binding: Type-safe, prevents XSS attacks, works with any property',
  'Event Binding: Declarative event handling, automatic cleanup',
  'Two-Way Binding: Reduces boilerplate for form synchronization',
  'Attribute Binding: Access attributes without DOM properties',
  'Class Binding: Cleaner than string manipulation, reactive styling',
  'Style Binding: Dynamic styling without external CSS classes'
] as const;

export const HOW_TO_USE = [
  'Interpolation: {{ expression }} - Wrap expression in double curly braces',
  'Property Binding: [property]="expression" - Use square brackets',
  'Event Binding: (event)="handler()" - Use parentheses',
  'Two-Way Binding: [(ngModel)]="property" - Combine brackets and parentheses',
  'Attribute Binding: [attr.name]="value" - Prefix with attr.',
  'Class Binding: [class.className]="boolean" - Prefix with class.',
  'Style Binding: [style.property]="value" - Prefix with style.'
] as const;

export const DATA_BINDING_BEST_PRACTICES = [
  'Use interpolation for simple text display',
  'Use property binding for dynamic properties',
  'Avoid complex expressions in templates',
  'Use two-way binding sparingly - prefer reactive forms',
  'Use event binding for user interactions',
  'Sanitize user input to prevent XSS attacks',
  'Use OnPush change detection for better performance',
  'Keep template expressions pure and side-effect free'
] as const;
