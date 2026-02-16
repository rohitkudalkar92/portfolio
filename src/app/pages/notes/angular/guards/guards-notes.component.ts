import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { GUARDS_CODE_EXAMPLES, GUARD_TYPES, GUARDS_USE_CASES, GUARDS_BEST_PRACTICES } from './constants/guards-constants';

@Component({
  selector: 'app-guards-notes',
  templateUrl: './guards-notes.component.html'
})
export class GuardsNotesComponent implements OnInit {
  readonly canActivateExample = GUARDS_CODE_EXAMPLES.canActivate;
  readonly canActivateChildExample = GUARDS_CODE_EXAMPLES.canActivateChild;
  readonly canDeactivateExample = GUARDS_CODE_EXAMPLES.canDeactivate;
  readonly canLoadExample = GUARDS_CODE_EXAMPLES.canLoad;
  readonly canMatchExample = GUARDS_CODE_EXAMPLES.canMatch;
  readonly functionalGuardExample = GUARDS_CODE_EXAMPLES.functionalGuard;
  readonly asyncGuardExample = GUARDS_CODE_EXAMPLES.asyncGuard;
  readonly multipleGuardsExample = GUARDS_CODE_EXAMPLES.multipleGuards;
  readonly guardTypes = GUARD_TYPES;
  readonly useCases = GUARDS_USE_CASES;
  readonly bestPractices = GUARDS_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Route Guards - Angular');
  }
}
