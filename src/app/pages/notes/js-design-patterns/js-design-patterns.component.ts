import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from '../../../title.service';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';
import { QuickReferenceComponent } from '../../../common/quick-reference/quick-reference.component';
import { DESIGN_PATTERNS_CODE_EXAMPLES, PATTERN_CATEGORIES, WHEN_TO_USE, DESIGN_PATTERNS_BEST_PRACTICES } from './constants/design-patterns-constants';

@Component({
  selector: 'app-js-design-patterns',
  standalone: true,
  imports: [
    CommonModule,
    LayoutComponent,
    BackNavComponent,
    PageHeaderComponent,
    CodeBlockComponent,
    ContentSectionComponent,
    QuickReferenceComponent
  ],
  templateUrl: './js-design-patterns.component.html'
})
export class JsDesignPatternsComponent implements OnInit {
  readonly singletonExample = DESIGN_PATTERNS_CODE_EXAMPLES.singleton;
  readonly factoryExample = DESIGN_PATTERNS_CODE_EXAMPLES.factory;
  readonly observerExample = DESIGN_PATTERNS_CODE_EXAMPLES.observer;
  readonly moduleExample = DESIGN_PATTERNS_CODE_EXAMPLES.module;
  readonly prototypeExample = DESIGN_PATTERNS_CODE_EXAMPLES.prototype;
  readonly decoratorExample = DESIGN_PATTERNS_CODE_EXAMPLES.decorator;
  readonly strategyExample = DESIGN_PATTERNS_CODE_EXAMPLES.strategy;
  readonly promiseExample = DESIGN_PATTERNS_CODE_EXAMPLES.promise;
  readonly patternCategories = PATTERN_CATEGORIES;
  readonly whenToUse = WHEN_TO_USE;
  readonly bestPractices = DESIGN_PATTERNS_BEST_PRACTICES;

  readonly quickRefTopics = [
    { id: 'singleton', number: 1, title: 'Singleton Pattern' },
    { id: 'factory', number: 2, title: 'Factory Pattern' },
    { id: 'observer', number: 3, title: 'Observer Pattern' },
    { id: 'module', number: 4, title: 'Module Pattern' },
    { id: 'prototype', number: 5, title: 'Prototype Pattern' },
    { id: 'decorator', number: 6, title: 'Decorator Pattern' },
    { id: 'strategy', number: 7, title: 'Strategy Pattern' },
    { id: 'promise', number: 8, title: 'Promise Pattern' },
    { id: 'best-practices', number: 9, title: 'Best Practices' }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('JavaScript Design Patterns');
  }

  scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
