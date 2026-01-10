import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PythonDsaDetailsComponent } from './python-dsa-details.component';

const routes: Routes = [
  { path: '', component: PythonDsaDetailsComponent },
  { path: 'arrays-lists', loadComponent: () => import('./arrays-lists/notes.component').then(m => m.NotesComponent) },
  { path: 'strings', loadComponent: () => import('./strings/notes.component').then(m => m.NotesComponent) },
  { path: 'linked-lists', loadComponent: () => import('./linked-lists/notes.component').then(m => m.NotesComponent) },
  { path: 'stacks-queues', loadComponent: () => import('./stacks-queues/notes.component').then(m => m.NotesComponent) },
  { path: 'trees', loadComponent: () => import('./trees/notes.component').then(m => m.NotesComponent) }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PythonDsaModule { }