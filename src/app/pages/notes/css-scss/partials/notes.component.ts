import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-partials-notes',
  templateUrl: './notes.component.html'
})
export class PartialsNotesComponent implements OnInit {

  basicExample = `// SCSS Partials - Split CSS into smaller, maintainable files
// File naming convention: _filename.scss (underscore prefix)

// _variables.scss
$primary-color: #3b82f6;
$secondary-color: #64748b;
$font-size-base: 16px;
$spacing-unit: 0.25rem;

// _mixins.scss
&#64;mixin button-style($bg, $color) {
  background: $bg;
  color: $color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

&#64;mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// _base.scss
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: $font-size-base;
  line-height: 1.6;
  color: $secondary-color;
}

// main.scss - Import all partials
&#64;import 'variables';
&#64;import 'mixins';
&#64;import 'base';
&#64;import 'components/buttons';
&#64;import 'components/cards';
&#64;import 'layout/header';
&#64;import 'layout/footer';`;

  fileStructure = `// Recommended File Structure
scss/
├── main.scss                 // Main entry point
├── _variables.scss           // Global variables
├── _mixins.scss             // Reusable mixins
├── _functions.scss          // Custom functions
├── base/
│   ├── _reset.scss          // CSS reset/normalize
│   ├── _typography.scss     // Font styles
│   └── _base.scss           // Base element styles
├── components/
│   ├── _buttons.scss        // Button styles
│   ├── _cards.scss          // Card components
│   ├── _forms.scss          // Form elements
│   └── _modals.scss         // Modal dialogs
├── layout/
│   ├── _header.scss         // Site header
│   ├── _footer.scss         // Site footer
│   ├── _sidebar.scss        // Sidebar layout
│   └── _grid.scss           // Grid system
├── pages/
│   ├── _home.scss           // Home page specific
│   ├── _about.scss          // About page specific
│   └── _contact.scss        // Contact page specific
└── utilities/
    ├── _helpers.scss        // Helper classes
    └── _utilities.scss      // Utility classes

// main.scss imports everything
&#64;import 'variables';
&#64;import 'mixins';
&#64;import 'functions';

&#64;import 'base/reset';
&#64;import 'base/typography';
&#64;import 'base/base';

&#64;import 'components/buttons';
&#64;import 'components/cards';
&#64;import 'components/forms';

&#64;import 'layout/header';
&#64;import 'layout/footer';
&#64;import 'layout/grid';

&#64;import 'pages/home';
&#64;import 'pages/about';

&#64;import 'utilities/helpers';
&#64;import 'utilities/utilities';`;

  importVsUse = `// &#64;import vs &#64;use - Modern SCSS practices

// OLD WAY: &#64;import (deprecated)
&#64;import 'variables';
&#64;import 'mixins';

.button {
  background: $primary-color;    // Global namespace
  &#64;include button-style();     // Global namespace
}

// NEW WAY: &#64;use (recommended)
&#64;use 'variables' as vars;
&#64;use 'mixins' as mix;

.button {
  background: vars.$primary-color;    // Namespaced
  &#64;include mix.button-style();     // Namespaced
}

// &#64;use with * (use sparingly)
&#64;use 'variables' as *;
&#64;use 'mixins' as *;

.button {
  background: $primary-color;    // Available without namespace
  &#64;include button-style();     // Available without namespace
}

// &#64;forward - Re-export from partials
// _index.scss
&#64;forward 'variables';
&#64;forward 'mixins';
&#64;forward 'functions';

// main.scss
&#64;use 'index' as *;  // Gets everything from index`;

  bestPractices = `// Best Practices for SCSS Partials

// 1. Use descriptive file names
_button-components.scss     // Good
_btn.scss                  // Bad - too short

// 2. Group related styles
// _forms.scss
.form-group { /* styles */ }
.form-control { /* styles */ }
.form-label { /* styles */ }
.form-error { /* styles */ }

// 3. Keep partials focused
// _typography.scss - ONLY typography
h1, h2, h3, h4, h5, h6 { /* heading styles */ }
p { /* paragraph styles */ }
.text-large { /* text utilities */ }

// 4. Use consistent import order
&#64;use 'variables';      // 1. Variables first
&#64;use 'functions';      // 2. Functions second
&#64;use 'mixins';         // 3. Mixins third
&#64;use 'base/reset';     // 4. Base styles
&#64;use 'components/buttons'; // 5. Components
&#64;use 'layout/header';  // 6. Layout
&#64;use 'pages/home';     // 7. Page-specific
&#64;use 'utilities/helpers'; // 8. Utilities last

// 5. Avoid deep nesting in partials
// Good - flat structure
_buttons.scss
_cards.scss
_forms.scss

// Bad - too deep
_components/_ui/_interactive/_buttons.scss

// 6. Use index files for organization
// components/_index.scss
&#64;forward 'buttons';
&#64;forward 'cards';
&#64;forward 'forms';

// main.scss
&#64;use 'components';  // Imports all components`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Partials - Notes');
  }
}