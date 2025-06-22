import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./main-content/main-content.component').then(m => m.MainContentComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  }
];