import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { STATE_MANAGEMENT_CODE_EXAMPLES, STATE_MANAGEMENT_PATTERNS, WHEN_TO_USE_NGRX, STATE_MANAGEMENT_BEST_PRACTICES } from './constants/state-management-constants';

@Component({
  selector: 'app-state-management-notes',
  templateUrl: './state-management-notes.component.html'
})
export class StateManagementNotesComponent implements OnInit {
  readonly actionsExample = STATE_MANAGEMENT_CODE_EXAMPLES.actions;
  readonly reducerExample = STATE_MANAGEMENT_CODE_EXAMPLES.reducer;
  readonly selectorsExample = STATE_MANAGEMENT_CODE_EXAMPLES.selectors;
  readonly effectsExample = STATE_MANAGEMENT_CODE_EXAMPLES.effects;
  readonly storeSetupExample = STATE_MANAGEMENT_CODE_EXAMPLES.storeSetup;
  readonly componentUsageExample = STATE_MANAGEMENT_CODE_EXAMPLES.componentUsage;
  readonly entityAdapterExample = STATE_MANAGEMENT_CODE_EXAMPLES.entityAdapter;
  readonly componentStoreExample = STATE_MANAGEMENT_CODE_EXAMPLES.componentStore;
  readonly stateManagementPatterns = STATE_MANAGEMENT_PATTERNS;
  readonly whenToUseNgrx = WHEN_TO_USE_NGRX;
  readonly bestPractices = STATE_MANAGEMENT_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('State Management - Angular');
  }
}
