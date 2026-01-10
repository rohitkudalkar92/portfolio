import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { Note } from './notes.interface';
import { NOTES_DATA } from './notes.constants';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.NOTES);
  }
  
  notes: Note[] = NOTES_DATA;
}