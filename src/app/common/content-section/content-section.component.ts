import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule, ParagraphComponent],
  template: `
    <div class="glass rounded-xl p-6 my-8">
      <h2 class="text-xl font-semibold text-primary mb-4">{{ title }}</h2>
      <app-paragraph [text]="description" *ngIf="description"></app-paragraph>
      <ng-content></ng-content>
    </div>
  `
})
export class ContentSectionComponent {
  @Input() title: string = '';
  @Input() description?: string;
}