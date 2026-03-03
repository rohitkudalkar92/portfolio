import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { FORMS_CODE_EXAMPLES, FORM_VALIDATION_TYPES, FORM_BEST_PRACTICES, FORM_STATES } from './constants/forms-constants';

@Component({
  selector: 'app-forms-notes',
  templateUrl: './forms-notes.component.html'
})
export class FormsNotesComponent implements OnInit {
  readonly templateDrivenExample = FORMS_CODE_EXAMPLES.templateDriven;
  readonly reactiveExample = FORMS_CODE_EXAMPLES.reactive;
  readonly reactiveTemplateExample = FORMS_CODE_EXAMPLES.reactiveTemplate;
  readonly customValidatorExample = FORMS_CODE_EXAMPLES.customValidator;
  readonly asyncValidatorExample = FORMS_CODE_EXAMPLES.asyncValidator;
  readonly formArrayExample = FORMS_CODE_EXAMPLES.formArray;
  readonly formArrayTemplateExample = FORMS_CODE_EXAMPLES.formArrayTemplate;
  readonly validationTypes = FORM_VALIDATION_TYPES;
  readonly bestPractices = FORM_BEST_PRACTICES;
  readonly formStates = FORM_STATES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Forms - Angular');
  }
}