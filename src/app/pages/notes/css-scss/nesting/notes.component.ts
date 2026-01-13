import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-nesting-notes',
  templateUrl: './notes.component.html'
})
export class NestingNotesComponent implements OnInit {

  basicExample = `// SCSS Nesting - Mirror HTML structure
.card {
  padding: 1rem;
  border-radius: 8px;
  background: white;
  
  .header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .content {
    color: #666;
    line-height: 1.6;
  }
  
  .footer {
    margin-top: 1rem;
    border-top: 1px solid #eee;
    padding-top: 0.5rem;
  }
}

/* Compiled CSS Output:
.card {
  padding: 1rem;
  border-radius: 8px;
  background: white;
}

.card .header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card .content {
  color: #666;
  line-height: 1.6;
}

.card .footer {
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
} */`;

  parentSelector = `// Parent Selector (&) - Reference parent in nested rules
.button {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  
  &:hover {                    // Pseudo-class: .button:hover
    background: #2563eb;
    transform: translateY(-1px);
  }
  
  &:active {                   // Pseudo-class: .button:active
    transform: translateY(0);
  }
  
  &.disabled {                 // Class modifier: .button.disabled
    background: #9ca3af;
    cursor: not-allowed;
  }
  
  &--large {                   // BEM modifier: .button--large
    padding: 0.75rem 1.5rem;    // Larger button variant
    font-size: 1.125rem;
  }
  
  &__icon {                    // BEM element: .button__icon
    margin-right: 0.5rem;       // Icon inside button
  }
}

/* Compiled Output:
.button {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

.button:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}

.button.disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.button--large {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

.button__icon {
  margin-right: 0.5rem;
} */`;

  goodPractice = `// Good Practice - Logical nesting, max 3-4 levels
.navigation {
  background: #1f2937;
  
  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    .nav-item {
      margin-right: 1rem;
      
      .nav-link {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
          background: #3b82f6;
        }
      }
    }
  }
}`;

  badPractice = `// Bad Practice - Too deep nesting, hard to read
.page {
  .container {
    .section {
      .article {
        .header {
          .title {
            .text {
              .span {
                color: red; // 8 levels deep - too much!
              }
            }
          }
        }
      }
    }
  }
}

// Also bad - unrelated nesting
.card {
  padding: 1rem;
  
  .random-component {  // X Not related to card
    color: blue;
  }
}`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('SCSS Nesting - Notes');
  }
}