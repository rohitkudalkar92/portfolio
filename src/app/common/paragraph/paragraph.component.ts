import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class]="getClasses()">{{ text }}</p>
  `
})
export class ParagraphComponent {
  @Input() text: string = '';
  @Input() color: 'primary' | 'secondary' | 'muted' | 'accent' = 'secondary';
  @Input() margin: 'mb-2' | 'mb-3' | 'mb-4' | 'mb-6' = 'mb-3';
  @Input() size: 'sm' | 'base' | 'lg' = 'base';

  getClasses(): string {
    const colorClasses = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'muted': 'text-muted',
      'accent': 'text-accent'
    };

    const sizeClasses = {
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg'
    };

    return `${colorClasses[this.color]} ${this.margin} ${sizeClasses[this.size]}`;
  }
}