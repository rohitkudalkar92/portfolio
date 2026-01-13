import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-control-directives-notes',
  templateUrl: './notes.component.html'
})
export class ControlDirectivesNotesComponent implements OnInit {

  ifElseExample = `// SCSS &#64;if/&#64;else Conditional Logic
$theme: dark;
$enable-rounded: true;
$button-size: large;

.theme-styles {
  &#64;if $theme == dark {
    background: #1f2937;
    color: #ffffff;
  } &#64;else if $theme == light {
    background: #ffffff;
    color: #1f2937;
  } &#64;else {
    background: #64748b;
    color: #ffffff;
  }
}

.button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  
  &#64;if $enable-rounded {
    border-radius: 4px;
  }
  
  &#64;if $button-size == small {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  } &#64;else if $button-size == large {
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  } &#64;else {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}

/* Compiled CSS Output:
.theme-styles {
  background: #1f2937;
  color: #ffffff;
}

.button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.125rem;
  padding: 0.75rem 1.5rem;
} */`;

  combinedExample = `// Combining Control Directives
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);

$colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981,
  warning: #f59e0b,
  danger: #ef4444
);

// Generate responsive utilities with conditions
&#64;each $name, $width in $breakpoints {
  &#64;media (min-width: $width) {
    &#64;for $i from 1 through 12 {
      .#{$name}\\:col-#{$i} {
        &#64;if $i <= 6 {
          flex: 0 0 percentage($i / 12);
        } &#64;else {
          flex: 0 0 percentage($i / 12);
          max-width: percentage($i / 12);
        }
      }
    }
  }
}

// Generate button variants with validation
&#64;each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
    color: white;
    
    &#64;if lightness($color) > 70% {
      color: #1f2937; // Dark text for light backgrounds
    }
    
    &:hover {
      &#64;if $name == danger {
        background: darken($color, 15%);
      } &#64;else {
        background: darken($color, 10%);
      }
    }
  }
}

// Dynamic spacing system
$spacing-base: 0.25rem;
$spacing-count: 20;

&#64;for $i from 0 through $spacing-count {
  $value: $i * $spacing-base;
  
  .p-#{$i} { padding: $value; }
  .m-#{$i} { margin: $value; }
  
  &#64;if $i > 0 {
    .pt-#{$i} { padding-top: $value; }
    .pb-#{$i} { padding-bottom: $value; }
    .pl-#{$i} { padding-left: $value; }
    .pr-#{$i} { padding-right: $value; }
    
    .mt-#{$i} { margin-top: $value; }
    .mb-#{$i} { margin-bottom: $value; }
    .ml-#{$i} { margin-left: $value; }
    .mr-#{$i} { margin-right: $value; }
  }
}`;

  practicalExample = `// Practical Use Cases
// 1. Theme System
$themes: (
  light: (
    bg-primary: #ffffff,
    bg-secondary: #f8fafc,
    text-primary: #1f2937,
    text-secondary: #64748b
  ),
  dark: (
    bg-primary: #1f2937,
    bg-secondary: #111827,
    text-primary: #ffffff,
    text-secondary: #d1d5db
  )
);

&#64;each $theme-name, $theme-colors in $themes {
  .theme-#{$theme-name} {
    &#64;each $property, $color in $theme-colors {
      --#{$property}: #{$color};
    }
  }
}

// 2. Component State Management
&#64;mixin button-state($state: default) {
  &#64;if $state == loading {
    opacity: 0.6;
    cursor: not-allowed;
    
    &::after {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }
  } &#64;else if $state == disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  } &#64;else if $state == success {
    background: #10b981;
    
    &::before {
      content: '✓';
      margin-right: 0.5rem;
    }
  }
}

// 3. Responsive Typography Scale
$type-scale: (
  xs: (mobile: 0.75rem, desktop: 0.75rem),
  sm: (mobile: 0.875rem, desktop: 0.875rem),
  base: (mobile: 1rem, desktop: 1rem),
  lg: (mobile: 1.125rem, desktop: 1.125rem),
  xl: (mobile: 1.25rem, desktop: 1.25rem),
  2xl: (mobile: 1.5rem, desktop: 1.5rem),
  3xl: (mobile: 1.875rem, desktop: 1.875rem),
  4xl: (mobile: 2.25rem, desktop: 2.25rem)
);

&#64;each $size, $values in $type-scale {
  .text-#{$size} {
    font-size: map-get($values, mobile);
    
    &#64;media (min-width: 768px) {
      &#64;if map-get($values, desktop) != map-get($values, mobile) {
        font-size: map-get($values, desktop);
      }
    }
  }
}

// 4. Grid System with Conditions
&#64;for $i from 1 through 12 {
  .col-#{$i} {
    flex: 0 0 percentage($i / 12);
    
    &#64;if $i == 12 {
      max-width: 100%;
    } &#64;else {
      max-width: percentage($i / 12);
    }
    
    // Add responsive variants
    &#64;each $breakpoint, $width in $breakpoints {
      &#64;media (min-width: $width) {
        &.#{$breakpoint}\\:col-#{$i} {
          flex: 0 0 percentage($i / 12);
          max-width: percentage($i / 12);
        }
      }
    }
  }
}`;

  bestPractices = `// Best Practices for Control Directives
// 1. Keep conditions simple and readable
// Good
&#64;if $theme == dark {
  background: $dark-bg;
}

// Bad - too complex
&#64;if $theme == dark and $size == large and $variant != outline and $state != disabled {
  // Too many conditions
}

// 2. Use meaningful variable names
$enable-animations: true;  // Good
$a: true;                 // Bad

// 3. Provide fallbacks
&#64;if $custom-font {
  font-family: $custom-font;
} &#64;else {
  font-family: system-ui, sans-serif; // Fallback
}

// 4. Avoid deep nesting
// Good - flat structure
&#64;if $condition-1 {
  property: value1;
}
&#64;if $condition-2 {
  property: value2;
}

// Bad - deep nesting
&#64;if $condition-1 {
  &#64;if $condition-2 {
    &#64;if $condition-3 {
      property: value; // Too deep
    }
  }
}

// 5. Use maps for complex conditions
$button-styles: (
  primary: (bg: #3b82f6, color: white),
  secondary: (bg: #64748b, color: white),
  outline: (bg: transparent, color: #3b82f6)
);

&#64;each $variant, $styles in $button-styles {
  .btn-#{$variant} {
    background: map-get($styles, bg);
    color: map-get($styles, color);
  }
}

// 6. Document complex logic
/// Generate responsive grid columns
/// &#64;param {Number} $columns - Total number of columns
/// &#64;param {Map} $breakpoints - Breakpoint map
&#64;mixin generate-grid($columns: 12, $breakpoints: $grid-breakpoints) {
  &#64;for $i from 1 through $columns {
    // Implementation with conditions
  }
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Control Directives - Notes');
  }
}