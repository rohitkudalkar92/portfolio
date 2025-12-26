import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExperienceComponent } from './experience.component';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';
import { SkillsComponent } from './skills.component';
import { DSAComponent } from './dsa.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dsa', component: DSAComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];