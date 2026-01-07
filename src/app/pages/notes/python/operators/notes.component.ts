import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../../common/layout/layout.component';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-operators-notes',
  standalone: true,
  imports: [CommonModule, RouterLink, LayoutComponent],
  templateUrl: './notes.component.html',
  styleUrls: []
})
export class OperatorsNotesComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Operators - My Notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}