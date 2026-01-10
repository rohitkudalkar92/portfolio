import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NotesComponent } from './notes.component';
import { PythonDetailsComponent } from './python/python-details.component';
import { PrintConsoleNotesComponent } from './python/print-console/notes.component';
import { VariablesDataTypesNotesComponent } from './python/variables-data-types/notes.component';
import { OperatorsNotesComponent } from './python/operators/notes.component';
import { TypeConversionNotesComponent } from './python/type-conversion/notes.component';

import { LayoutComponent } from '../../common/layout/layout.component';
import { BackNavComponent } from '../../common/back-nav.component';
import { CodeBlockComponent } from '../../common/code-block.component';
import { InfoBoxComponent } from '../../common/info-box.component';
import { ContentSectionComponent } from '../../common/content-section.component';
import { TopicHeaderComponent } from '../../common/topic-header.component';
import { DataTypesGridComponent } from '../../common/data-types-grid.component';
import { PracticeExerciseComponent } from '../../common/practice-exercise.component';
import { SearchBoxComponent } from '../../common/search-box.component';
import { TopicsListComponent } from '../../common/topics-list.component';

const routes = [
  { path: '', component: NotesComponent },
  { path: 'python', component: PythonDetailsComponent },
  { path: 'git', loadChildren: () => import('./git/git.module').then(m => m.GitModule) },
  { path: 'meditation', loadChildren: () => import('./meditation/meditation.module').then(m => m.MeditationModule) },
  { path: 'python-dsa', loadChildren: () => import('./python-dsa/python-dsa.module').then(m => m.PythonDsaModule) },
  { path: 'python/print-console', component: PrintConsoleNotesComponent },
  { path: 'python/variables-data-types', component: VariablesDataTypesNotesComponent },
  { path: 'python/operators', component: OperatorsNotesComponent },
  { path: 'python/type-conversion', component: TypeConversionNotesComponent }
];

@NgModule({
  declarations: [
    NotesComponent,
    PythonDetailsComponent,
    PrintConsoleNotesComponent,
    VariablesDataTypesNotesComponent,
    OperatorsNotesComponent,
    TypeConversionNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    LayoutComponent,
    BackNavComponent,
    CodeBlockComponent,
    InfoBoxComponent,
    ContentSectionComponent,
    TopicHeaderComponent,
    DataTypesGridComponent,
    PracticeExerciseComponent,
    SearchBoxComponent,
    TopicsListComponent
  ]
})
export class NotesModule { }