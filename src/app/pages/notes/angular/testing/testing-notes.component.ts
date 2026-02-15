import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { TESTING_CODE_EXAMPLES, TEST_TYPES, TESTING_TOOLS, TESTING_BEST_PRACTICES } from './constants/testing-constants';

@Component({
  selector: 'app-testing-notes',
  templateUrl: './testing-notes.component.html'
})
export class TestingNotesComponent implements OnInit {
  readonly componentTestExample = TESTING_CODE_EXAMPLES.componentTest;
  readonly serviceTestExample = TESTING_CODE_EXAMPLES.serviceTest;
  readonly httpTestExample = TESTING_CODE_EXAMPLES.httpTest;
  readonly asyncTestExample = TESTING_CODE_EXAMPLES.asyncTest;
  readonly spyTestExample = TESTING_CODE_EXAMPLES.spyTest;
  readonly routingTestExample = TESTING_CODE_EXAMPLES.routingTest;
  readonly formTestExample = TESTING_CODE_EXAMPLES.formTest;
  readonly pipeTestExample = TESTING_CODE_EXAMPLES.pipeTest;
  readonly testTypes = TEST_TYPES;
  readonly testingTools = TESTING_TOOLS;
  readonly bestPractices = TESTING_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Testing - Angular');
  }
}
