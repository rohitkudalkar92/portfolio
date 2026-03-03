export const DOM_MANIPULATION_EXAMPLES = {
  elementRef: `import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div>Hello World</div>'
})
export class ExampleComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Access native element
    const element = this.elementRef.nativeElement;
    element.style.color = 'blue';
  }
}`,

  renderer2: `import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div #myDiv>Content</div>'
})
export class ExampleComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    const div = this.elementRef.nativeElement.querySelector('div');
    
    // Set styles
    this.renderer.setStyle(div, 'color', 'red');
    this.renderer.setStyle(div, 'font-size', '20px');
    
    // Add/remove classes
    this.renderer.addClass(div, 'active');
    this.renderer.removeClass(div, 'inactive');
    
    // Set attributes
    this.renderer.setAttribute(div, 'data-id', '123');
    
    // Create and append elements
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText('New text');
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(div, span);
  }
}`,

  viewChild: `import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: \`
    <input #myInput type="text" />
    <button (click)="focusInput()">Focus</button>
  \`
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('myInput') inputRef!: ElementRef;

  ngAfterViewInit() {
    // Access element after view initialization
    console.log(this.inputRef.nativeElement.value);
  }

  focusInput() {
    this.inputRef.nativeElement.focus();
  }
}`,

  viewChildren: `import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: \`
    <div #item>Item 1</div>
    <div #item>Item 2</div>
    <div #item>Item 3</div>
  \`
})
export class ExampleComponent {
  @ViewChildren('item') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.items.forEach((item, index) => {
      console.log(\`Item \${index}:\`, item.nativeElement.textContent);
    });
  }
}`,

  hostListener: `import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div>Click anywhere</div>'
})
export class ExampleComponent {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Component clicked', event);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    console.log('Window resized', event);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }
}`,

  hostBinding: `import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div>Content</div>'
})
export class ExampleComponent {
  @HostBinding('class.active') isActive = true;
  @HostBinding('style.color') color = 'blue';
  @HostBinding('attr.role') role = 'button';

  toggleActive() {
    this.isActive = !this.isActive;
  }
}`
} as const;

export const DOM_MANIPULATION_BEST_PRACTICES = [
  'Use Renderer2 instead of direct DOM manipulation for better security',
  'Avoid accessing nativeElement directly when possible',
  'Use ViewChild/ViewChildren queries in ngAfterViewInit lifecycle hook',
  'Prefer Angular directives over manual DOM manipulation',
  'Use HostBinding and HostListener for host element interactions',
  'Be cautious with DOM manipulation in SSR environments',
  'Clean up event listeners to prevent memory leaks',
  'Use ChangeDetectorRef when DOM changes affect component state'
] as const;
