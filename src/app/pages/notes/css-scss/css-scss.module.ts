import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CssScssDetailsComponent } from './css-scss-details.component';
import { CssScssOutletComponent } from './css-scss-outlet.component';
import { VariablesNotesComponent } from './variables/notes.component';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';
import { TopicsListComponent } from '../../../common/topics-list/topics-list.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';

const routes = [
  { 
    path: '', 
    component: CssScssOutletComponent,
    children: [
      { path: '', component: CssScssDetailsComponent },
      { path: 'variables', component: VariablesNotesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CssScssDetailsComponent,
    CssScssOutletComponent,
    VariablesNotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutComponent,
    BackNavComponent,
    PageHeaderComponent,
    TopicsListComponent,
    CodeBlockComponent,
    ContentSectionComponent
  ]
})
export class CssScssModule { }