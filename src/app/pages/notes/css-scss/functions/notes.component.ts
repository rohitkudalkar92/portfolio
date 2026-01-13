import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-functions-notes',
  templateUrl: './notes.component.html'
})
export class FunctionsNotesComponent implements OnInit {

  builtInExample = `// SCSS Built-in Functions
// Color Functions
$primary: #3b82f6;
$secondary: #64748b;

.color-examples {
  // Lighten and darken
  background: lighten($primary, 20%);        // #93c5fd
  border: 1px solid darken($primary, 15%);  // #1e40af
  
  // Adjust saturation and lightness
  color: saturate($secondary, 30%);          // More saturated
  box-shadow: 0 2px 4px desaturate($primary, 50%); // Less saturated
  
  // Mix colors
  outline: 2px solid mix($primary, $secondary, 60%); // 60% primary, 40% secondary
  
  // Get color components
  opacity: alpha($primary);                  // 1
  hue: hue($primary);                       // 217deg
}

// Math Functions
$base-size: 16px;
$ratio: 1.618; // Golden ratio

.math-examples {
  font-size: round($base-size * $ratio);     // 26px
  line-height: ceil($base-size * 1.5);       // 24px
  margin: floor($base-size / 4);             // 4px
  padding: abs(-10px);                       // 10px
  
  width: percentage(3 / 4);                  // 75%
  max-width: max(300px, 50vw);              // Larger value
  min-width: min(200px, 30vw);              // Smaller value
}

// String Functions
$font-family: 'Inter';
$image-path: '/assets/images/';

.string-examples {
  font-family: unquote($font-family + ', sans-serif'); // Inter, sans-serif
  background: url(quote($image-path + 'bg.jpg'));      // url("/assets/images/bg.jpg")
  
  // String manipulation
  content: to-upper-case('hello');           // "HELLO"
  data-attr: to-lower-case('WORLD');         // "world"
  
  // String length and slicing
  width: str-length('hello') * 10px;         // 50px
  content: str-slice('hello world', 1, 5);   // "hello"
}`;

  customExample = `// SCSS Custom Functions
// Basic custom function
&#64;function rem($pixels) {
  &#64;return $pixels / 16px * 1rem;
}

// Function with default parameter
&#64;function z-index($layer: base) {
  $z-indexes: (
    base: 1,
    dropdown: 100,
    modal: 200,
    tooltip: 300
  );
  
  &#64;return map-get($z-indexes, $layer);
}

// Function with validation
&#64;function spacing($multiplier) {
  &#64;if type-of($multiplier) != number {
    &#64;error "Spacing multiplier must be a number, got #{type-of($multiplier)}";
  }
  
  &#64;if $multiplier < 0 {
    &#64;warn "Negative spacing values may cause layout issues";
  }
  
  &#64;return $multiplier * 0.25rem;
}

// Advanced function with loops
&#64;function power($base, $exponent) {
  $result: 1;
  
  &#64;for $i from 1 through $exponent {
    $result: $result * $base;
  }
  
  &#64;return $result;
}

// Using custom functions
.custom-examples {
  font-size: rem(18);                        // 1.125rem
  z-index: z-index(modal);                   // 200
  margin: spacing(4);                        // 1rem
  padding: spacing(2) spacing(3);            // 0.5rem 0.75rem
  
  // Advanced calculations
  width: power(2, 3) * 10px;                 // 80px (2^3 * 10)
}`;

  practicalExample = `// Practical Function Examples
// 1. Responsive font scaling
&#64;function fluid-font($min-size, $max-size, $min-width: 320px, $max-width: 1200px) {
  $slope: ($max-size - $min-size) / ($max-width - $min-width);
  $intersection: $min-size - $slope * $min-width;
  
  &#64;return clamp(#{$min-size}, #{$intersection} + #{$slope * 100}vw, #{$max-size});
}

// 2. Color contrast checker
&#64;function contrast-color($background) {
  $lightness: lightness($background);
  
  &#64;if $lightness > 50% {
    &#64;return #000000; // Dark text on light background
  } &#64;else {
    &#64;return #ffffff; // Light text on dark background
  }
}

// 3. Grid column width calculator
&#64;function grid-width($columns, $total-columns: 12, $gutter: 2%) {
  $column-width: (100% - ($total-columns - 1) * $gutter) / $total-columns;
  &#64;return $column-width * $columns + ($columns - 1) * $gutter;
}

// 4. Color palette generator
&#64;function generate-palette($base-color, $steps: 5) {
  $palette: ();
  
  &#64;for $i from 1 through $steps {
    $lightness: 90% - ($i - 1) * 20%;
    $color: hsl(hue($base-color), saturation($base-color), $lightness);
    $palette: map-merge($palette, (#{$i * 100}: $color));
  }
  
  &#64;return $palette;
}

// Using practical functions
.practical-examples {
  // Fluid typography
  font-size: fluid-font(16px, 24px);
  
  // Auto contrast
  background: #3b82f6;
  color: contrast-color(#3b82f6);            // #ffffff
  
  // Grid system
  width: grid-width(6);                      // 6 columns out of 12
  
  // Dynamic palette
  $blue-palette: generate-palette(#3b82f6);
  background: map-get($blue-palette, 300);   // Light blue
}`;

  bestPractices = `// Best Practices for SCSS Functions
// 1. Use descriptive names
&#64;function calculate-rem($pixels) { /* Good */ }
&#64;function calc($px) { /* Bad - too generic */ }

// 2. Add parameter validation
&#64;function safe-divide($dividend, $divisor) {
  &#64;if $divisor == 0 {
    &#64;error "Cannot divide by zero";
  }
  
  &#64;return $dividend / $divisor;
}

// 3. Provide default values
&#64;function button-padding($size: medium) {
  $paddings: (
    small: 0.25rem 0.5rem,
    medium: 0.5rem 1rem,
    large: 0.75rem 1.5rem
  );
  
  &#64;return map-get($paddings, $size);
}

// 4. Keep functions pure (no side effects)
// Good - pure function
&#64;function double($value) {
  &#64;return $value * 2;
}

// Bad - has side effects
&#64;function impure-double($value) {
  $global-var: $value * 2; // Modifies global state
  &#64;return $global-var;
}

// 5. Document complex functions
/// Calculate fluid typography size
/// &#64;param {Number} $min-size - Minimum font size
/// &#64;param {Number} $max-size - Maximum font size  
/// &#64;param {Number} $min-width - Minimum viewport width
/// &#64;param {Number} $max-width - Maximum viewport width
/// &#64;return {String} - CSS clamp() function
&#64;function fluid-type($min-size, $max-size, $min-width: 320px, $max-width: 1200px) {
  // Implementation here
}

// 6. Group related functions
// _typography-functions.scss
&#64;function rem($pixels) { /* convert to rem */ }
&#64;function em($pixels, $context: 16px) { /* convert to em */ }
&#64;function line-height($font-size) { /* calculate line height */ }`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Functions - Notes');
  }
}