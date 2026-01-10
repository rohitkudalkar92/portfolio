import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-directives-notes',
  template: `
    <app-layout>
      <app-back-nav backLink="/notes/angular" backText="Back to Angular"></app-back-nav>
      
      <app-topic-header 
        title="Directives"
        description="Structural and attribute directives in Angular">
      </app-topic-header>

      <app-content-section title="What are Directives?">
        <p>Directives are classes that add behavior to elements in Angular templates. There are three types:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Structural Directives:</strong> Change DOM layout by adding/removing elements</li>
          <li><strong>Attribute Directives:</strong> Change appearance or behavior of elements</li>
          <li><strong>Component Directives:</strong> Directives with templates (components)</li>
        </ul>
      </app-content-section>

      <app-content-section title="Built-in Structural Directives">
        <p>Common structural directives that modify DOM structure:</p>
        <app-code-block 
          language="html"
          [code]="structuralExample">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Built-in Attribute Directives">
        <p>Attribute directives that modify element appearance or behavior:</p>
        <app-code-block 
          language="html"
          [code]="attributeExample">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Custom Attribute Directive">
        <p>Create custom directives with &#64;Directive decorator:</p>
        <app-code-block 
          language="typescript"
          [code]="customDirectiveExample">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Custom Structural Directive">
        <p>Create structural directives with TemplateRef and ViewContainerRef:</p>
        <app-code-block 
          language="typescript"
          [code]="structuralDirectiveExample">
        </app-code-block>
      </app-content-section>

      <app-info-box 
        type="info"
        title="Best Practices">
        <ul class="list-disc ml-6 space-y-1">
          <li *ngFor="let practice of bestPractices">{{ practice }}</li>
        </ul>
      </app-info-box>
    </app-layout>
  `
})
export class DirectivesNotesComponent implements OnInit {
  
  structuralExample = `<!-- *ngIf - Conditionally add/remove elements -->
<div *ngIf="isVisible">This content is conditionally shown</div>
<div *ngIf="user; else noUser">Welcome {{ user.name }}!</div>
<ng-template #noUser>Please log in</ng-template>

<!-- *ngFor - Repeat elements -->
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>

<!-- *ngSwitch - Switch between multiple options -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'loading'">Loading...</p>
  <p *ngSwitchCase="'success'">Data loaded!</p>
  <p *ngSwitchDefault>Unknown status</p>
</div>`;

  attributeExample = `<!-- ngClass - Dynamic CSS classes -->
<div [ngClass]="{ 'active': isActive, 'disabled': !isEnabled }">
  Dynamic classes
</div>
<div [ngClass]="cssClasses">Multiple classes</div>

<!-- ngStyle - Dynamic inline styles -->
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">
  Dynamic styles
</div>

<!-- ngModel - Two-way data binding -->
<input [(ngModel)]="username" placeholder="Enter username">
<p>Hello {{ username }}!</p>`;

  customDirectiveExample = `import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

<!-- Usage -->
<p appHighlight="lightblue">Hover over me!</p>
<p [appHighlight]="color">Dynamic color highlight</p>`;

  structuralDirectiveExample = `import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}

<!-- Usage -->
<p *appUnless="isHidden">This shows when isHidden is false</p>`;

  bestPractices = [
    'Use built-in directives when possible before creating custom ones',
    'Keep directive logic focused and reusable',
    'Use HostListener for event handling in directives',
    'Prefer attribute directives over direct DOM manipulation',
    'Use Input properties to make directives configurable',
    'Clean up subscriptions and event listeners in OnDestroy',
    'Use Renderer2 for safe DOM manipulation',
    'Test directives thoroughly with different scenarios'
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Directives - Angular');
  }
}