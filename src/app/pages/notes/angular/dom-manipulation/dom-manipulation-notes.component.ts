import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DOM_MANIPULATION_EXAMPLES, DOM_MANIPULATION_BEST_PRACTICES } from './constants/dom-manipulation-constants';

@Component({
  selector: 'app-dom-manipulation-notes',
  templateUrl: './dom-manipulation-notes.component.html'
})
export class DomManipulationNotesComponent implements OnInit {
  readonly elementRefExample = DOM_MANIPULATION_EXAMPLES.elementRef;
  readonly renderer2Example = DOM_MANIPULATION_EXAMPLES.renderer2;
  readonly viewChildExample = DOM_MANIPULATION_EXAMPLES.viewChild;
  readonly viewChildrenExample = DOM_MANIPULATION_EXAMPLES.viewChildren;
  readonly hostListenerExample = DOM_MANIPULATION_EXAMPLES.hostListener;
  readonly hostBindingExample = DOM_MANIPULATION_EXAMPLES.hostBinding;
  readonly bestPractices = DOM_MANIPULATION_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('DOM Manipulation - Angular');
  }
}
