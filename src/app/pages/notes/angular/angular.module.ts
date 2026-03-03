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
import { DataBindingNotesComponent } from './data-binding/data-binding-notes.component';
import { ObservablesNotesComponent } from './observables/observables-notes.component';
import { ModulesNotesComponent } from './modules/modules-notes.component';
import { TestingNotesComponent } from './testing/testing-notes.component';
import { StateManagementNotesComponent } from './state-management/state-management-notes.component';
import { InterceptorsNotesComponent } from './interceptors/interceptors-notes.component';
import { GuardsNotesComponent } from './guards/guards-notes.component';
import { ControlFlowNotesComponent } from './control-flow/control-flow-notes.component';
import { PerformanceNotesComponent } from './performance/performance-notes.component';
import { SignalsNotesComponent } from './signals/signals-notes.component';
import { ComponentsNotesComponent } from './components/components-notes.component';
import { FormsNotesComponent } from './forms/forms-notes.component';
import { ContentProjectionNotesComponent } from './content-projection/content-projection-notes.component';
import { DomManipulationNotesComponent } from './dom-manipulation/dom-manipulation-notes.component';
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
import { ParagraphComponent } from '../../../common/paragraph/paragraph.component';
import { StyledListComponent } from '../../../common/styled-list/styled-list.component';
import { QuickReferenceComponent } from '../../../common/quick-reference/quick-reference.component';
import { BackToTopComponent } from '../../../common/back-to-top/back-to-top.component';

const routes = [
  { path: '', component: AngularDetailsComponent },
  { path: 'components', component: ComponentsNotesComponent },
  { path: 'forms', component: FormsNotesComponent },
  { path: 'services', component: ServicesNotesComponent },
  { path: 'directives', component: DirectivesNotesComponent },
  { path: 'routing', component: RoutingNotesComponent },
  { path: 'pipes', component: PipesNotesComponent },
  { path: 'standalone', component: StandaloneNotesComponent },
  { path: 'lifecycle', component: LifecycleNotesComponent },
  { path: 'data-binding', component: DataBindingNotesComponent },
  { path: 'observables', component: ObservablesNotesComponent },
  { path: 'modules', component: ModulesNotesComponent },
  { path: 'testing', component: TestingNotesComponent },
  { path: 'state-management', component: StateManagementNotesComponent },
  { path: 'interceptors', component: InterceptorsNotesComponent },
  { path: 'guards', component: GuardsNotesComponent },
  { path: 'control-flow', component: ControlFlowNotesComponent },
  { path: 'performance', component: PerformanceNotesComponent },
  { path: 'signals', component: SignalsNotesComponent },
  { path: 'content-projection', component: ContentProjectionNotesComponent },
  { path: 'dom-manipulation', component: DomManipulationNotesComponent }
];

@NgModule({
  declarations: [
    AngularDetailsComponent,
    ComponentsNotesComponent,
    FormsNotesComponent,
    ServicesNotesComponent,
    DirectivesNotesComponent,
    RoutingNotesComponent,
    PipesNotesComponent,
    StandaloneNotesComponent,
    LifecycleNotesComponent,
    DataBindingNotesComponent,
    ObservablesNotesComponent,
    ModulesNotesComponent,
    TestingNotesComponent,
    StateManagementNotesComponent,
    InterceptorsNotesComponent,
    GuardsNotesComponent,
    ControlFlowNotesComponent,
    PerformanceNotesComponent,
    SignalsNotesComponent,
    ContentProjectionNotesComponent,
    DomManipulationNotesComponent
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
    PracticeExerciseComponent,
    ParagraphComponent,
    StyledListComponent,
    QuickReferenceComponent,
    BackToTopComponent
  ]
})
export class AngularModule { }