import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { TitleService } from '../../../title.service';
import { CONSTANTS } from '../../../constants';
import { PYTHON_TOPICS, PythonTopic } from '../../../data/python-topics.data';

@Component({
  selector: 'app-python-details',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink],
  templateUrl: './python-details.component.html'
})
export class PythonDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  pythonTopics = PYTHON_TOPICS;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  }
}