import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { SIGNALS_CODE_EXAMPLES, SIGNALS_ADVANTAGES, SIGNALS_DISADVANTAGES, WHEN_TO_USE_SIGNALS, WHEN_NOT_TO_USE_SIGNALS, WHEN_TO_USE_SET, WHEN_TO_USE_UPDATE, SIGNALS_BEST_PRACTICES, SIGNALS_REFERENCE } from './constants/signals-constants';

@Component({
  selector: 'app-signals-notes',
  templateUrl: './signals-notes.component.html'
})
export class SignalsNotesComponent implements OnInit {
  readonly basicExample = SIGNALS_CODE_EXAMPLES.basic;
  readonly computedExample = SIGNALS_CODE_EXAMPLES.computed;
  readonly effectExample = SIGNALS_CODE_EXAMPLES.effect;
  readonly setMethodExample = SIGNALS_CODE_EXAMPLES.setMethod;
  readonly updateMethodExample = SIGNALS_CODE_EXAMPLES.updateMethod;
  readonly updateExample = SIGNALS_CODE_EXAMPLES.update;
  readonly writableExample = SIGNALS_CODE_EXAMPLES.writable;
  readonly dataTypesExample = SIGNALS_CODE_EXAMPLES.dataTypes;
  readonly valueTypesExample = SIGNALS_CODE_EXAMPLES.valueTypes;
  readonly setVsUpdateExample = SIGNALS_CODE_EXAMPLES.setVsUpdate;
  readonly advantages = SIGNALS_ADVANTAGES;
  readonly disadvantages = SIGNALS_DISADVANTAGES;
  readonly whenToUse = WHEN_TO_USE_SIGNALS;
  readonly whenNotToUse = WHEN_NOT_TO_USE_SIGNALS;
  readonly whenToUseSet = WHEN_TO_USE_SET;
  readonly whenToUseUpdate = WHEN_TO_USE_UPDATE;
  readonly bestPractices = SIGNALS_BEST_PRACTICES;
  readonly reference = SIGNALS_REFERENCE;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Signals - Angular');
  }
}
