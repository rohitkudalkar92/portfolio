import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { OBSERVABLES_CODE_EXAMPLES, COMMON_OPERATORS, WHEN_TO_USE_RXJS, RXJS_BEST_PRACTICES, WHAT_IS_OBSERVABLES, OBSERVABLES_VS_PROMISES, OBSERVABLES_VS_REDUX } from './constants/observables-constants';

@Component({
  selector: 'app-observables-notes',
  templateUrl: './observables-notes.component.html'
})
export class ObservablesNotesComponent implements OnInit {
  readonly basicExample = OBSERVABLES_CODE_EXAMPLES.basic;
  readonly mapExample = OBSERVABLES_CODE_EXAMPLES.map;
  readonly filterExample = OBSERVABLES_CODE_EXAMPLES.filter;
  readonly switchMapExample = OBSERVABLES_CODE_EXAMPLES.switchMap;
  readonly mergeMapExample = OBSERVABLES_CODE_EXAMPLES.mergeMap;
  readonly combineLatestExample = OBSERVABLES_CODE_EXAMPLES.combineLatest;
  readonly debounceTimeExample = OBSERVABLES_CODE_EXAMPLES.debounceTime;
  readonly takeUntilExample = OBSERVABLES_CODE_EXAMPLES.takeUntil;
  readonly catchErrorExample = OBSERVABLES_CODE_EXAMPLES.catchError;
  readonly forkJoinExample = OBSERVABLES_CODE_EXAMPLES.forkJoin;
  readonly subjectExample = OBSERVABLES_CODE_EXAMPLES.subject;
  readonly behaviorSubjectExample = OBSERVABLES_CODE_EXAMPLES.behaviorSubject;
  readonly whatIsObservables = WHAT_IS_OBSERVABLES;
  readonly observablesVsPromises = OBSERVABLES_VS_PROMISES;
  readonly observablesVsRedux = OBSERVABLES_VS_REDUX;
  readonly commonOperators = COMMON_OPERATORS;
  readonly whenToUse = WHEN_TO_USE_RXJS;
  readonly bestPractices = RXJS_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Observables & RxJS - Angular');
  }
}
