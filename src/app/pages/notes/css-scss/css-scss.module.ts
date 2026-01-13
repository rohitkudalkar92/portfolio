import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CssScssDetailsComponent } from './css-scss-details.component';
import { CssScssOutletComponent } from './css-scss-outlet.component';
import { VariablesNotesComponent } from './variables/notes.component';
import { NestingNotesComponent } from './nesting/notes.component';
import { MixinsNotesComponent } from './mixins/notes.component';
import { ExtendsNotesComponent } from './extends/notes.component';
import { OperatorsNotesComponent } from './operators/notes.component';
import { LoopsNotesComponent } from './loops/notes.component';
import { PartialsNotesComponent } from './partials/notes.component';
import { FunctionsNotesComponent } from './functions/notes.component';
import { ControlDirectivesNotesComponent } from './control-directives/notes.component';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';
import { TopicsListComponent } from '../../../common/topics-list/topics-list.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';
import { InfoBoxComponent } from '../../../common/info-box/info-box.component';
import { DescriptionTextComponent } from '../../../common/description-text/description-text.component';

const routes = [
  { 
    path: '', 
    component: CssScssOutletComponent,
    children: [
      { path: '', component: CssScssDetailsComponent },
      { path: 'variables', component: VariablesNotesComponent },
      { path: 'nesting', component: NestingNotesComponent },
      { path: 'mixins', component: MixinsNotesComponent },
      { path: 'extends', component: ExtendsNotesComponent },
      { path: 'operators', component: OperatorsNotesComponent },
      { path: 'loops', component: LoopsNotesComponent },
      { path: 'partials', component: PartialsNotesComponent },
      { path: 'functions', component: FunctionsNotesComponent },
      { path: 'control-directives', component: ControlDirectivesNotesComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CssScssDetailsComponent,
    CssScssOutletComponent,
    VariablesNotesComponent,
    NestingNotesComponent,
    MixinsNotesComponent,
    ExtendsNotesComponent,
    OperatorsNotesComponent,
    LoopsNotesComponent,
    PartialsNotesComponent,
    FunctionsNotesComponent,
    ControlDirectivesNotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutComponent,
    BackNavComponent,
    PageHeaderComponent,
    TopicsListComponent,
    CodeBlockComponent,
    ContentSectionComponent,
    InfoBoxComponent,
    DescriptionTextComponent
  ]
})
export class CssScssModule { }