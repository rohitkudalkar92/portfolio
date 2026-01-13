import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-operators-notes',
  templateUrl: './notes.component.html'
})
export class OperatorsNotesComponent implements OnInit {

  arithmeticExample = `// SCSS Arithmetic Operators
$base-font-size: 16px;
$line-height-ratio: 1.5;
$container-width: 1200px;
$columns: 12;

.typography {
  font-size: $base-font-size;                    // 16px
  line-height: $base-font-size * $line-height-ratio;  // 24px
  margin-bottom: $base-font-size / 2;            // 8px
  padding: $base-font-size + 4px;                // 20px
}

.grid-column {
  width: $container-width / $columns;            // 100px
  margin: $base-font-size % 10px;                // 6px (16 % 10)
}

.responsive-text {
  font-size: $base-font-size - 2px;              // 14px (mobile)
  
  &#64;media (min-width: 768px) {
    font-size: $base-font-size + 2px;            // 18px (desktop)
  }
}

/* Compiled CSS Output:
.typography {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  padding: 20px;
}

.grid-column {
  width: 100px;
  margin: 6px;
}

.responsive-text {
  font-size: 14px;
}

&#64;media (min-width: 768px) {
  .responsive-text {
    font-size: 18px;
  }
} */`;

  comparisonExample = `// SCSS Comparison Operators
$mobile-breakpoint: 768px;
$tablet-breakpoint: 1024px;
$current-width: 800px;

// Conditional styles using comparison
&#64;if $current-width < $mobile-breakpoint {
  .container { width: 100%; }
} &#64;else if $current-width >= $mobile-breakpoint and $current-width < $tablet-breakpoint {
  .container { width: 750px; }
} &#64;else {
  .container { width: 1200px; }
}

// Boolean comparisons
$enable-rounded: true;
$enable-shadows: false;

.card {
  background: white;
  padding: 1rem;
  
  &#64;if $enable-rounded == true {
    border-radius: 8px;
  }
  
  &#64;if $enable-shadows != false {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

// Number comparisons
$z-index-modal: 1000;
$z-index-tooltip: 1050;

.modal {
  z-index: $z-index-modal;
  
  &#64;if $z-index-tooltip > $z-index-modal {
    // Ensure tooltip appears above modal
    .tooltip { z-index: $z-index-tooltip; }
  }
}`;

  stringExample = `// SCSS String Operators
$font-family-base: 'Inter';
$font-family-mono: 'Fira Code';
$image-path: '/assets/images/';
$icon-prefix: 'icon-';

.typography {
  font-family: $font-family-base + ', sans-serif';     // 'Inter, sans-serif'
  
  &.mono {
    font-family: $font-family-mono + ', monospace';    // 'Fira Code, monospace'
  }
}

.background-image {
  background-image: url($image-path + 'hero-bg.jpg');  // url('/assets/images/hero-bg.jpg')
}

// Dynamic class generation
&#64;each $icon in home, user, settings, logout {
  .#{$icon-prefix}#{$icon} {
    background-image: url($image-path + 'icons/' + $icon + '.svg');
  }
}

/* Compiled Output:
.typography {
  font-family: 'Inter, sans-serif';
}

.typography.mono {
  font-family: 'Fira Code, monospace';
}

.background-image {
  background-image: url('/assets/images/hero-bg.jpg');
}

.icon-home {
  background-image: url('/assets/images/icons/home.svg');
}

.icon-user {
  background-image: url('/assets/images/icons/user.svg');
}

.icon-settings {
  background-image: url('/assets/images/icons/settings.svg');
}

.icon-logout {
  background-image: url('/assets/images/icons/logout.svg');
} */`;

  colorExample = `// SCSS Color Functions and Operations
$primary-color: #3b82f6;
$secondary-color: #64748b;

.color-variations {
  // Lighten and darken
  background: lighten($primary-color, 20%);      // Lighter blue
  border: 1px solid darken($primary-color, 15%); // Darker blue
  
  // Adjust saturation and opacity
  color: saturate($secondary-color, 30%);        // More saturated
  box-shadow: 0 2px 4px rgba($primary-color, 0.3); // With opacity
}

.color-mixing {
  // Mix colors
  background: mix($primary-color, $secondary-color, 50%); // 50/50 mix
  
  // Complement and adjust hue
  border-color: complement($primary-color);       // Opposite color
  outline-color: adjust-hue($primary-color, 45deg); // Shift hue
}

// Dynamic color generation
&#64;each $name, $color in (
  primary: #3b82f6,
  success: #10b981,
  warning: #f59e0b,
  danger: #ef4444
) {
  .btn-#{$name} {
    background: $color;
    border: 1px solid darken($color, 10%);
    
    &:hover {
      background: lighten($color, 5%);
    }
  }
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Operators - Notes');
  }
}