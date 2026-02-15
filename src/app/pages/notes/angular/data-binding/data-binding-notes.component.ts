import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DATA_BINDING_CODE_EXAMPLES, BINDING_TYPES, DATA_BINDING_BEST_PRACTICES, WHEN_TO_USE, WHERE_TO_USE, WHY_USE, HOW_TO_USE } from './constants/data-binding-constants';

@Component({
  selector: 'app-data-binding-notes',
  templateUrl: './data-binding-notes.component.html'
})
export class DataBindingNotesComponent implements OnInit {
  readonly interpolationExample = DATA_BINDING_CODE_EXAMPLES.interpolation;
  readonly propertyBindingExample = DATA_BINDING_CODE_EXAMPLES.propertyBinding;
  readonly eventBindingExample = DATA_BINDING_CODE_EXAMPLES.eventBinding;
  readonly twoWayBindingExample = DATA_BINDING_CODE_EXAMPLES.twoWayBinding;
  readonly attributeBindingExample = DATA_BINDING_CODE_EXAMPLES.attributeBinding;
  readonly classBindingExample = DATA_BINDING_CODE_EXAMPLES.classBinding;
  readonly styleBindingExample = DATA_BINDING_CODE_EXAMPLES.styleBinding;
  readonly customTwoWayExample = DATA_BINDING_CODE_EXAMPLES.customTwoWay;
  readonly bindingTypes = BINDING_TYPES;
  readonly whenToUse = WHEN_TO_USE;
  readonly whereToUse = WHERE_TO_USE;
  readonly whyUse = WHY_USE;
  readonly howToUse = HOW_TO_USE;
  readonly bestPractices = DATA_BINDING_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Data Binding - Angular');
  }
}
