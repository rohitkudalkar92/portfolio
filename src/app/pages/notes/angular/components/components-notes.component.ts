import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { COMPONENTS_CODE_EXAMPLES, COMPONENT_DECORATORS, COMPONENT_LIFECYCLE_HOOKS, COMPONENT_BEST_PRACTICES, COMPONENT_TYPES } from './constants/components-constants';

@Component({
  selector: 'app-components-notes',
  templateUrl: './components-notes.component.html'
})
export class ComponentsNotesComponent implements OnInit {
  readonly basicExample = COMPONENTS_CODE_EXAMPLES.basic;
  readonly standaloneExample = COMPONENTS_CODE_EXAMPLES.standalone;
  readonly inputExample = COMPONENTS_CODE_EXAMPLES.input;
  readonly outputExample = COMPONENTS_CODE_EXAMPLES.output;
  readonly lifecycleExample = COMPONENTS_CODE_EXAMPLES.lifecycle;
  readonly viewChildExample = COMPONENTS_CODE_EXAMPLES.viewChild;
  readonly smartComponentExample = COMPONENTS_CODE_EXAMPLES.smartComponent;
  readonly dumbComponentExample = COMPONENTS_CODE_EXAMPLES.dumbComponent;
  readonly lazyComponentExample = COMPONENTS_CODE_EXAMPLES.lazyComponent;
  readonly dynamicComponentExample = COMPONENTS_CODE_EXAMPLES.dynamicComponent;
  readonly decorators = COMPONENT_DECORATORS;
  readonly lifecycleHooks = COMPONENT_LIFECYCLE_HOOKS;
  readonly bestPractices = COMPONENT_BEST_PRACTICES;
  readonly types = COMPONENT_TYPES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Components - Angular');
  }
}
