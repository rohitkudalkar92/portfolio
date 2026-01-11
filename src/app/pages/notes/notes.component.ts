import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { Note } from './notes.interface';
import { NOTES_DATA } from './notes.constants';
import { ButtonVariant, ButtonSize } from '../../common/button/button.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  ButtonVariant = ButtonVariant;
  ButtonSize = ButtonSize;
  
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.NOTES);
  }
  
  notes: Note[] = NOTES_DATA;
}