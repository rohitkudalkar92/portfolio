import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { SIGNALS_CODE_EXAMPLES, SIGNALS_ADVANTAGES, SIGNALS_DISADVANTAGES, WHEN_TO_USE_SIGNALS, WHEN_NOT_TO_USE_SIGNALS, SIGNALS_BEST_PRACTICES } from './constants/signals-constants';

@Component({
  selector: 'app-signals-notes',
  templateUrl: './signals-notes.component.html'
})
export class SignalsNotesComponent implements OnInit {
  readonly basicExample = SIGNALS_CODE_EXAMPLES.basic;
  readonly computedExample = SIGNALS_CODE_EXAMPLES.computed;
  readonly effectExample = SIGNALS_CODE_EXAMPLES.effect;
  readonly updateExample = SIGNALS_CODE_EXAMPLES.update;
  readonly writableExample = SIGNALS_CODE_EXAMPLES.writable;
  readonly advantages = SIGNALS_ADVANTAGES;
  readonly disadvantages = SIGNALS_DISADVANTAGES;
  readonly whenToUse = WHEN_TO_USE_SIGNALS;
  readonly whenNotToUse = WHEN_NOT_TO_USE_SIGNALS;
  readonly bestPractices = SIGNALS_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Signals - Angular');
  }
}
