import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tasks',
    loadChildren: () => import('./features/tasks/tasks.routes').then((mod) => mod.tasksRoutes),
  },
];
