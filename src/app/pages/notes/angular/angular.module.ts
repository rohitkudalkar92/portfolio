import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularDetailsComponent } from './angular-details.component';
import { ServicesNotesComponent } from './services/services-notes.component';
import { DirectivesNotesComponent } from './directives/directives-notes.component';
import { RoutingNotesComponent } from './routing/routing-notes.component';
import { PipesNotesComponent } from './pipes/pipes-notes.component';
import { StandaloneNotesComponent } from './standalone/standalone-notes.component';
import { LifecycleNotesComponent } from './lifecycle/lifecycle-notes.component';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';
import { SearchBoxComponent } from '../../../common/search-box/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list/topics-list.component';
import { TopicHeaderComponent } from '../../../common/topic-header/topic-header.component';
import { ContentSectionComponent } from '../../../common/content-section/content-section.component';
import { CodeBlockComponent } from '../../../common/code-block/code-block.component';
import { InfoBoxComponent } from '../../../common/info-box/info-box.component';
import { PracticeExerciseComponent } from '../../../common/practice-exercise/practice-exercise.component';

const routes = [
  { path: '', component: AngularDetailsComponent },
  { path: 'services', component: ServicesNotesComponent },
  { path: 'directives', component: DirectivesNotesComponent },
  { path: 'routing', component: RoutingNotesComponent },
  { path: 'pipes', component: PipesNotesComponent },
  { path: 'standalone', component: StandaloneNotesComponent },
  { path: 'lifecycle', component: LifecycleNotesComponent }
];

@NgModule({
  declarations: [
    AngularDetailsComponent,
    ServicesNotesComponent,
    DirectivesNotesComponent,
    RoutingNotesComponent,
    PipesNotesComponent,
    StandaloneNotesComponent,
    LifecycleNotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutComponent,
    BackNavComponent,
    PageHeaderComponent,
    SearchBoxComponent,
    TopicsListComponent,
    TopicHeaderComponent,
    ContentSectionComponent,
    CodeBlockComponent,
    InfoBoxComponent,
    PracticeExerciseComponent
  ]
})
export class AngularModule { }