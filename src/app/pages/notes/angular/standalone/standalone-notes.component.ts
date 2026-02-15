import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { STANDALONE_CODE_EXAMPLES, STANDALONE_BEST_PRACTICES, WHEN_TO_USE_STANDALONE, WHY_USE_STANDALONE, STANDALONE_ADVANTAGES, STANDALONE_DISADVANTAGES } from './constants/standalone-constants';

@Component({
  selector: 'app-standalone-notes',
  templateUrl: './standalone-notes.component.html'
})
export class StandaloneNotesComponent implements OnInit {
  readonly basicExample = STANDALONE_CODE_EXAMPLES.basic;
  readonly withImportsExample = STANDALONE_CODE_EXAMPLES.withImports;
  readonly bootstrappingExample = STANDALONE_CODE_EXAMPLES.bootstrapping;
  readonly routingExample = STANDALONE_CODE_EXAMPLES.routing;
  readonly lazyLoadingExample = STANDALONE_CODE_EXAMPLES.lazyLoading;
  readonly providersExample = STANDALONE_CODE_EXAMPLES.providers;
  readonly migrationExample = STANDALONE_CODE_EXAMPLES.migration;
  readonly testingExample = STANDALONE_CODE_EXAMPLES.testing;
  readonly whenToUse = WHEN_TO_USE_STANDALONE;
  readonly whyUse = WHY_USE_STANDALONE;
  readonly advantages = STANDALONE_ADVANTAGES;
  readonly disadvantages = STANDALONE_DISADVANTAGES;
  readonly bestPractices = STANDALONE_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Standalone Components - Angular');
  }
}
