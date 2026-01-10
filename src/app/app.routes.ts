import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { DiagramComponent } from './pages/diagram/diagram.component';
import { NotFoundComponent } from './common/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'notes', loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule) },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];