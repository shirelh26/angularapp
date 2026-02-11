import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { 
    path: 'students', 
    loadComponent: () => import('./components/student-list/student-list').then(m => m.StudentListComponent) 
  },
  { 
    path: 'student/:id', 
    loadComponent: () => import('./components/student-details/student-details').then(m => m.StudentDetailsComponent),
    children: [
      { path: 'details', loadComponent: () => import('./components/general-info/general-info').then(m => m.GeneralInfoComponent) },
      { path: 'grades', loadComponent: () => import('./components/grades/grades').then(m => m.GradesComponent) }
    ]
  }
];