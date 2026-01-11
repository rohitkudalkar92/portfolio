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
import { StringsNotesComponent } from './python/strings/notes.component';
import { ErrorTypesNotesComponent } from './python/error-types/notes.component';
import { CleanCodeComponent } from './clean-code/clean-code.component';
import { ES6Component } from './es6/es6.component';

import { LayoutComponent } from '../../common/layout/layout.component';
import { BackNavComponent } from '../../common/back-nav/back-nav.component';
import { CodeBlockComponent } from '../../common/code-block/code-block.component';
import { InfoBoxComponent } from '../../common/info-box/info-box.component';
import { ContentSectionComponent } from '../../common/content-section/content-section.component';
import { TopicHeaderComponent } from '../../common/topic-header/topic-header.component';
import { DataTypesGridComponent } from '../../common/data-types-grid/data-types-grid.component';
import { PracticeExerciseComponent } from '../../common/practice-exercise/practice-exercise.component';
import { SearchBoxComponent } from '../../common/search-box/search-box.component';
import { TopicsListComponent } from '../../common/topics-list/topics-list.component';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';

const routes = [
  { path: '', component: NotesComponent },
  { path: 'python', component: PythonDetailsComponent },
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) },
  { path: 'git', loadChildren: () => import('./git/git.module').then(m => m.GitModule) },
  { path: 'meditation', loadChildren: () => import('./meditation/meditation.module').then(m => m.MeditationModule) },
  { path: 'python-dsa', loadChildren: () => import('./python-dsa/python-dsa.module').then(m => m.PythonDsaModule) },
  { path: 'python/print-console', component: PrintConsoleNotesComponent },
  { path: 'python/variables-data-types', component: VariablesDataTypesNotesComponent },
  { path: 'python/operators', component: OperatorsNotesComponent },
  { path: 'python/type-conversion', component: TypeConversionNotesComponent },
  { path: 'python/strings', component: StringsNotesComponent },
  { path: 'python/error-types', component: ErrorTypesNotesComponent },
  { path: 'clean-code', component: CleanCodeComponent },
  { path: 'es6', component: ES6Component }
];

@NgModule({
  declarations: [
    NotesComponent,
    PythonDetailsComponent,
    PrintConsoleNotesComponent,
    VariablesDataTypesNotesComponent,
    OperatorsNotesComponent,
    TypeConversionNotesComponent,
    StringsNotesComponent,
    ErrorTypesNotesComponent,
    CleanCodeComponent,
    ES6Component
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
    TopicsListComponent,
    PageHeaderComponent
  ]
})
export class NotesModule { }