import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { PERFORMANCE_CODE_EXAMPLES, OPTIMIZATION_TECHNIQUES, PERFORMANCE_BEST_PRACTICES } from './constants/performance-constants';

@Component({
  selector: 'app-performance-notes',
  templateUrl: './performance-notes.component.html'
})
export class PerformanceNotesComponent implements OnInit {
  readonly onPushExample = PERFORMANCE_CODE_EXAMPLES.onPush;
  readonly trackByExample = PERFORMANCE_CODE_EXAMPLES.trackBy;
  readonly lazyLoadingExample = PERFORMANCE_CODE_EXAMPLES.lazyLoading;
  readonly purePipesExample = PERFORMANCE_CODE_EXAMPLES.purePipes;
  readonly virtualScrollingExample = PERFORMANCE_CODE_EXAMPLES.virtualScrolling;
  readonly preloadingExample = PERFORMANCE_CODE_EXAMPLES.preloading;
  readonly memoizationExample = PERFORMANCE_CODE_EXAMPLES.memoization;
  readonly detachChangeDetectionExample = PERFORMANCE_CODE_EXAMPLES.detachChangeDetection;
  readonly webWorkersExample = PERFORMANCE_CODE_EXAMPLES.webWorkers;
  readonly optimizationTechniques = OPTIMIZATION_TECHNIQUES;
  readonly bestPractices = PERFORMANCE_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Performance Optimization - Angular');
  }
}
