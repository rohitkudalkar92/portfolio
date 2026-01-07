import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-variables-data-types',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink],
  templateUrl: './variables-data-types.component.html'
})
export class VariablesDataTypesComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python: Variables and Data Types');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}