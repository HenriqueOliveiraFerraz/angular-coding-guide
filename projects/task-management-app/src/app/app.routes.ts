import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./features/tasks/tasks.routes').then((mod) => mod.tasksRoutes),
  },
];
