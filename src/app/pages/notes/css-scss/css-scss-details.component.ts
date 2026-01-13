import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';
import { TopicItem } from '../../../common/topics-list/topics-list.component';

@Component({
  selector: 'app-css-scss-details',
  templateUrl: './css-scss-details.component.html'
})
export class CssScssDetailsComponent implements OnInit {

  topics: TopicItem[] = [
    {
      id: 'variables',
      title: 'Variables',
      description: 'Store reusable values like colors, fonts, and spacing'
    },
    {
      id: 'nesting',
      title: 'Nesting',
      description: 'Write nested CSS rules that mirror HTML structure'
    },
    {
      id: 'mixins',
      title: 'Mixins',
      description: 'Reusable groups of CSS declarations'
    },
    {
      id: 'partials',
      title: 'Partials',
      description: 'Split CSS into smaller, maintainable files'
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'Built-in and custom functions for calculations'
    },
    {
      id: 'control-directives',
      title: 'Control Directives',
      description: '@if, @for, @each, @while for dynamic styles'
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('CSS & SCSS - Notes');
  }
}