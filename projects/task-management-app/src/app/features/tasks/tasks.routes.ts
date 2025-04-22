import { Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: ':id',
    component: TaskDetailComponent,
  },
];
