import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { INTERCEPTORS_CODE_EXAMPLES, INTERCEPTOR_USE_CASES, INTERCEPTORS_BEST_PRACTICES } from './constants/interceptors-constants';

@Component({
  selector: 'app-interceptors-notes',
  templateUrl: './interceptors-notes.component.html'
})
export class InterceptorsNotesComponent implements OnInit {
  readonly basicExample = INTERCEPTORS_CODE_EXAMPLES.basic;
  readonly authTokenExample = INTERCEPTORS_CODE_EXAMPLES.authToken;
  readonly errorHandlingExample = INTERCEPTORS_CODE_EXAMPLES.errorHandling;
  readonly loadingExample = INTERCEPTORS_CODE_EXAMPLES.loading;
  readonly cachingExample = INTERCEPTORS_CODE_EXAMPLES.caching;
  readonly retryExample = INTERCEPTORS_CODE_EXAMPLES.retry;
  readonly loggingExample = INTERCEPTORS_CODE_EXAMPLES.logging;
  readonly providerExample = INTERCEPTORS_CODE_EXAMPLES.provider;
  readonly useCases = INTERCEPTOR_USE_CASES;
  readonly bestPractices = INTERCEPTORS_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('HTTP Interceptors - Angular');
  }
}
