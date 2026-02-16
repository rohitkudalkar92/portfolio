import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { CONTROL_FLOW_CODE_EXAMPLES, CONTROL_FLOW_FEATURES, MIGRATION_GUIDE, CONTROL_FLOW_BEST_PRACTICES } from './constants/control-flow-constants';

@Component({
  selector: 'app-control-flow-notes',
  templateUrl: './control-flow-notes.component.html'
})
export class ControlFlowNotesComponent implements OnInit {
  readonly ifSyntaxExample = CONTROL_FLOW_CODE_EXAMPLES.ifSyntax;
  readonly forSyntaxExample = CONTROL_FLOW_CODE_EXAMPLES.forSyntax;
  readonly switchSyntaxExample = CONTROL_FLOW_CODE_EXAMPLES.switchSyntax;
  readonly forWithIndexExample = CONTROL_FLOW_CODE_EXAMPLES.forWithIndex;
  readonly nestedControlExample = CONTROL_FLOW_CODE_EXAMPLES.nestedControl;
  readonly trackByExample = CONTROL_FLOW_CODE_EXAMPLES.trackBy;
  readonly migrationExample = CONTROL_FLOW_CODE_EXAMPLES.migration;
  readonly advantagesExample = CONTROL_FLOW_CODE_EXAMPLES.advantages;
  readonly features = CONTROL_FLOW_FEATURES;
  readonly migrationGuide = MIGRATION_GUIDE;
  readonly bestPractices = CONTROL_FLOW_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Control Flow - Angular');
  }
}
