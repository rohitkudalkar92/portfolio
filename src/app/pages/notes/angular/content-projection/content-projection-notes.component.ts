import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { CONTENT_PROJECTION_EXAMPLES, CONTENT_PROJECTION_BEST_PRACTICES } from './constants/content-projection-constants';

@Component({
  selector: 'app-content-projection-notes',
  templateUrl: './content-projection-notes.component.html'
})
export class ContentProjectionNotesComponent implements OnInit {
  readonly basicExample = CONTENT_PROJECTION_EXAMPLES.basic;
  readonly multiSlotExample = CONTENT_PROJECTION_EXAMPLES.multiSlot;
  readonly ngContentSelectExample = CONTENT_PROJECTION_EXAMPLES.ngContentSelect;
  readonly conditionalExample = CONTENT_PROJECTION_EXAMPLES.conditional;
  readonly ngTemplateOutletExample = CONTENT_PROJECTION_EXAMPLES.ngTemplateOutlet;
  readonly bestPractices = CONTENT_PROJECTION_BEST_PRACTICES;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Content Projection - Angular');
  }
}

