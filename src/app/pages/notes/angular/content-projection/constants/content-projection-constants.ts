export const CONTENT_PROJECTION_EXAMPLES = {
  basic: `// Parent Component
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \`
})
export class CardComponent {}

// Usage
<app-card>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</app-card>`,

  multiSlot: `// Component with multiple slots
@Component({
  selector: 'app-panel',
  template: \`
    <div class="panel">
      <div class="header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="body">
        <ng-content select="[body]"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  \`
})
export class PanelComponent {}

// Usage
<app-panel>
  <div header>Panel Header</div>
  <div body>Panel Body Content</div>
  <div footer>Panel Footer</div>
</app-panel>`,

  ngContentSelect: `// Select by element
<ng-content select="h1"></ng-content>

// Select by class
<ng-content select=".header"></ng-content>

// Select by attribute
<ng-content select="[header]"></ng-content>

// Select by directive
<ng-content select="app-header"></ng-content>

// Default slot (no selector)
<ng-content></ng-content>`,

  conditional: `@Component({
  selector: 'app-expandable',
  template: \`
    <div class="expandable">
      <div class="header" (click)="toggle()">
        <ng-content select="[title]"></ng-content>
      </div>
      <div *ngIf="isExpanded" class="content">
        <ng-content></ng-content>
      </div>
    </div>
  \`
})
export class ExpandableComponent {
  isExpanded = false;
  
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}`,

  ngTemplateOutlet: `@Component({
  selector: 'app-list',
  template: \`
    <div class="list">
      <ng-container 
        *ngFor="let item of items"
        [ngTemplateOutlet]="itemTemplate"
        [ngTemplateOutletContext]="{$implicit: item}">
      </ng-container>
    </div>
  \`
})
export class ListComponent {
  @Input() items: any[] = [];
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
}

// Usage
<app-list [items]="users">
  <ng-template let-user>
    <div>{{ user.name }}</div>
  </ng-template>
</app-list>`
} as const;

export const CONTENT_PROJECTION_BEST_PRACTICES = [
  'Use ng-content for simple content projection',
  'Use select attribute for multi-slot projection',
  'Provide default content when ng-content might be empty',
  'Use @ContentChild/@ContentChildren to access projected content',
  'Consider using ng-template for complex projections',
  'Document expected projection structure in component',
  'Use CSS ::ng-deep carefully with projected content',
  'Test components with and without projected content'
] as const;
