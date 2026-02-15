import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { LIFECYCLE_CODE_EXAMPLES, LIFECYCLE_HOOKS_ORDER, COMMON_USE_CASES, LIFECYCLE_BEST_PRACTICES } from './constants/lifecycle-constants';

@Component({
  selector: 'app-lifecycle-notes',
  templateUrl: './lifecycle-notes.component.html'
})
export class LifecycleNotesComponent implements OnInit {
  readonly ngOnChangesExample = LIFECYCLE_CODE_EXAMPLES.ngOnChanges;
  readonly ngOnInitExample = LIFECYCLE_CODE_EXAMPLES.ngOnInit;
  readonly ngDoCheckExample = LIFECYCLE_CODE_EXAMPLES.ngDoCheck;
  readonly ngAfterContentInitExample = LIFECYCLE_CODE_EXAMPLES.ngAfterContentInit;
  readonly ngAfterContentCheckedExample = LIFECYCLE_CODE_EXAMPLES.ngAfterContentChecked;
  readonly ngAfterViewInitExample = LIFECYCLE_CODE_EXAMPLES.ngAfterViewInit;
  readonly ngAfterViewCheckedExample = LIFECYCLE_CODE_EXAMPLES.ngAfterViewChecked;
  readonly ngOnDestroyExample = LIFECYCLE_CODE_EXAMPLES.ngOnDestroy;
  readonly completeExample = LIFECYCLE_CODE_EXAMPLES.complete;
  readonly hooksOrder = LIFECYCLE_HOOKS_ORDER;
  readonly useCases = COMMON_USE_CASES;
  readonly bestPractices = LIFECYCLE_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Component Lifecycle - Angular');
  }
}
