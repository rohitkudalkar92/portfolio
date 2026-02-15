import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { PIPES_CODE_EXAMPLES, PIPES_BEST_PRACTICES, WHEN_TO_USE_PIPES, WHY_USE_PIPES } from './constants/pipes-constants';

@Component({
  selector: 'app-pipes-notes',
  templateUrl: './pipes-notes.component.html'
})
export class PipesNotesComponent implements OnInit {
  readonly builtInExample = PIPES_CODE_EXAMPLES.builtIn;
  readonly customExample = PIPES_CODE_EXAMPLES.custom;
  readonly pureExample = PIPES_CODE_EXAMPLES.pure;
  readonly impureExample = PIPES_CODE_EXAMPLES.impure;
  readonly asyncExample = PIPES_CODE_EXAMPLES.async;
  readonly chainingExample = PIPES_CODE_EXAMPLES.chaining;
  readonly parametersExample = PIPES_CODE_EXAMPLES.parameters;
  readonly goodCaseExample = PIPES_CODE_EXAMPLES.goodCase;
  readonly badCaseExample = PIPES_CODE_EXAMPLES.badCase;
  readonly whenToUse = WHEN_TO_USE_PIPES;
  readonly whyUse = WHY_USE_PIPES;
  readonly bestPractices = PIPES_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Pipes - Angular');
  }
}
