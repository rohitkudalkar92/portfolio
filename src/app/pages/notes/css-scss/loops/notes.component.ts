import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-loops-notes',
  templateUrl: './notes.component.html'
})
export class LoopsNotesComponent implements OnInit {

  forExample = `// SCSS &#64;for Loops - Generate repetitive styles
// &#64;for $i from start through end (inclusive)
&#64;for $i from 1 through 5 {
  .col-#{$i} {
    width: percentage($i / 5);
  }
}

// &#64;for $i from start to end (exclusive)
&#64;for $i from 1 to 6 {
  .margin-#{$i} {
    margin: #{$i * 0.25}rem;
  }
}

// Generate z-index utilities
&#64;for $i from 1 through 10 {
  .z-#{$i * 10} {
    z-index: $i * 10;
  }
}

/* Compiled CSS Output:
.col-1 { width: 20%; }
.col-2 { width: 40%; }
.col-3 { width: 60%; }
.col-4 { width: 80%; }
.col-5 { width: 100%; }

.margin-1 { margin: 0.25rem; }
.margin-2 { margin: 0.5rem; }
.margin-3 { margin: 0.75rem; }
.margin-4 { margin: 1rem; }
.margin-5 { margin: 1.25rem; }

.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-60 { z-index: 60; }
.z-70 { z-index: 70; }
.z-80 { z-index: 80; }
.z-90 { z-index: 90; }
.z-100 { z-index: 100; } */`;

  eachExample = `// SCSS &#64;each Loops - Iterate over lists and maps
// Loop through a list
$colors: red, green, blue, yellow, purple;

&#64;each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}

// Loop through a map
$theme-colors: (
  primary: #3b82f6,
  secondary: #64748b,
  success: #10b981,
  warning: #f59e0b,
  danger: #ef4444
);

&#64;each $name, $color in $theme-colors {
  .btn-#{$name} {
    background-color: $color;
    border: 1px solid darken($color, 10%);
    
    &:hover {
      background-color: lighten($color, 5%);
    }
  }
}

// Generate responsive breakpoints
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);

&#64;each $name, $width in $breakpoints {
  &#64;media (min-width: $width) {
    .container-#{$name} {
      max-width: $width;
    }
  }
}

/* Compiled Output:
.text-red { color: red; }
.text-green { color: green; }
.text-blue { color: blue; }
.text-yellow { color: yellow; }
.text-purple { color: purple; }

.btn-primary {
  background-color: #3b82f6;
  border: 1px solid #2563eb;
}
.btn-primary:hover {
  background-color: #60a5fa;
}

&#64;media (min-width: 640px) {
  .container-sm { max-width: 640px; }
}
&#64;media (min-width: 768px) {
  .container-md { max-width: 768px; }
} */`;

  whileExample = `// SCSS &#64;while Loops - Continue until condition is false
$i: 1;
&#64;while $i <= 6 {
  .heading-#{$i} {
    font-size: #{3 - $i * 0.25}rem;
    font-weight: #{400 + $i * 100};
  }
  $i: $i + 1;
}

// Generate opacity utilities
$opacity: 10;
&#64;while $opacity <= 100 {
  .opacity-#{$opacity} {
    opacity: $opacity / 100;
  }
  $opacity: $opacity + 10;
}

// Fibonacci sequence for spacing
$a: 1;
$b: 1;
$count: 1;

&#64;while $count <= 8 {
  .fib-spacing-#{$count} {
    margin: #{$a * 0.25}rem;
  }
  
  $temp: $a + $b;
  $a: $b;
  $b: $temp;
  $count: $count + 1;
}

/* Compiled Output:
.heading-1 { font-size: 2.75rem; font-weight: 500; }
.heading-2 { font-size: 2.5rem; font-weight: 600; }
.heading-3 { font-size: 2.25rem; font-weight: 700; }
.heading-4 { font-size: 2rem; font-weight: 800; }
.heading-5 { font-size: 1.75rem; font-weight: 900; }
.heading-6 { font-size: 1.5rem; font-weight: 1000; }

.opacity-10 { opacity: 0.1; }
.opacity-20 { opacity: 0.2; }
.opacity-30 { opacity: 0.3; }
.opacity-40 { opacity: 0.4; }
.opacity-50 { opacity: 0.5; }
.opacity-60 { opacity: 0.6; }
.opacity-70 { opacity: 0.7; }
.opacity-80 { opacity: 0.8; }
.opacity-90 { opacity: 0.9; }
.opacity-100 { opacity: 1; } */`;

  practicalExample = `// Practical Examples - Real-world use cases
// 1. CSS Grid System
&#64;for $i from 1 through 12 {
  .col-#{$i} {
    flex: 0 0 percentage($i / 12);
    max-width: percentage($i / 12);
  }
}

// 2. Spacing Utilities (like Tailwind)
$spacings: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24;

&#64;each $space in $spacings {
  .p-#{$space} { padding: #{$space * 0.25}rem; }
  .m-#{$space} { margin: #{$space * 0.25}rem; }
  .pt-#{$space} { padding-top: #{$space * 0.25}rem; }
  .pb-#{$space} { padding-bottom: #{$space * 0.25}rem; }
  .pl-#{$space} { padding-left: #{$space * 0.25}rem; }
  .pr-#{$space} { padding-right: #{$space * 0.25}rem; }
}

// 3. Animation Delays
&#64;for $i from 1 through 10 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}

// 4. Social Media Icons
$social-platforms: (
  facebook: #1877f2,
  twitter: #1da1f2,
  instagram: #e4405f,
  linkedin: #0077b5,
  youtube: #ff0000
);

&#64;each $platform, $color in $social-platforms {
  .social-#{$platform} {
    background-color: $color;
    
    &:hover {
      background-color: darken($color, 10%);
      transform: translateY(-2px);
    }
  }
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Loops - Notes');
  }
}