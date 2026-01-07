import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/projects/project-detail.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { DSAComponent } from './pages/dsa.component';
import { DiagramComponent } from './pages/diagram/diagram.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PythonDetailsComponent } from './pages/notes/python-details.component';
import { NotFoundComponent } from './common/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dsa', component: DSAComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/python', component: PythonDetailsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];