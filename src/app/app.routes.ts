import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ExperienceComponent } from './pages/experience.component';
import { ProjectsComponent } from './pages/projects.component';
import { ProjectDetailComponent } from './pages/project-detail.component';
import { SkillsComponent } from './pages/skills.component';
import { DSAComponent } from './pages/dsa.component';
import { DiagramComponent } from './pages/diagram.component';
import { NotFoundComponent } from './common/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dsa', component: DSAComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];