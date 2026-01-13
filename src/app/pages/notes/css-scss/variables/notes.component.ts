import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-variables-notes',
  templateUrl: './notes.component.html'
})
export class VariablesNotesComponent implements OnInit {

  basicExample = `// SCSS Variables - Define once, use everywhere
$primary-color: #3b82f6;  // Blue color for primary elements
$font-size: 16px;         // Base font size
$margin: 1rem;            // Standard margin

// Using variables in CSS rules
.button {
  background: $primary-color;  // Uses the blue color
  font-size: $font-size;       // Uses 16px
  margin: $margin;             // Uses 1rem
}

/* Compiled CSS Output:
.button {
  background: #3b82f6;
  font-size: 16px;
  margin: 1rem;
} */`;

  goodPractice = `// Good Practice - Descriptive naming and organization
// Colors
$color-primary: #3b82f6;      // Main brand color
$color-secondary: #64748b;    // Secondary brand color

// Typography
$font-size-base: 16px;        // Base font size
$font-size-large: 20px;       // Large text size

// Spacing
$spacing-small: 0.5rem;       // 8px spacing
$spacing-medium: 1rem;        // 16px spacing

// Usage
.card {
  color: $color-primary;        // Consistent branding
  font-size: $font-size-base;   // Standard text size
  padding: $spacing-medium;     // Uniform spacing
}

/* Compiled Output:
.card {
  color: #3b82f6;
  font-size: 16px;
  padding: 1rem;
} */`;

  badPractice = `// Bad Practice - Avoid these mistakes
$blue: #3b82f6;               // Too generic name
$16px: 16px;                  // Invalid: starts with number
$m: 1rem;                     // Too short, unclear meaning

// Don't hardcode values when you have variables
.card {
  color: #3b82f6;             // X Should use $color-primary
  font-size: 16px;            // X Should use $font-size-base
  padding: 1rem;              // X Should use $spacing-medium
}

/* Problems:
- Hard to maintain
- Inconsistent values
- No single source of truth
- Difficult to change themes */`;

  variableTypes = `// Different types of SCSS variables

// Colors
$primary: #3b82f6;
$success: #10b981;
$error: #ef4444;

// Numbers (with units)
$font-size: 16px;
$line-height: 1.5;          // Unitless number
$border-width: 2px;

// Strings
$font-family: 'Inter, sans-serif';
$image-path: '/assets/images/';

// Booleans
$enable-rounded: true;
$enable-shadows: false;

// Lists
$font-sizes: 12px, 14px, 16px, 18px, 24px;
$margins: 0.5rem, 1rem, 1.5rem, 2rem;

// Maps (key-value pairs)
$colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981
);

// Usage examples
.text {
  font-family: $font-family;           // String
  font-size: nth($font-sizes, 3);      // List (gets 16px)
  color: map-get($colors, primary);    // Map (gets #3b82f6)
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Variables - Notes');
  }
}