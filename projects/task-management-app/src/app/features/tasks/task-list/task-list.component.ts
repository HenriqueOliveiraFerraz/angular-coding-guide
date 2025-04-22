import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskManagementApiService, TaskPriority, TaskStatus } from '@task-management-api';
import { combineLatest, map, startWith } from 'rxjs';
import { SearchTaskFormControls } from './task-list.types';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  formBuilder = inject(FormBuilder);
  taskService = inject(TaskManagementApiService);
  searchTaskForm: FormGroup<SearchTaskFormControls> = this.formBuilder.group({
    search: this.formBuilder.nonNullable.control(''),
    status: this.formBuilder.nonNullable.control<TaskStatus | 'all'>('all'),
    priority: this.formBuilder.nonNullable.control<TaskPriority | 'all'>('all'),
  });
  tasksObs = combineLatest([
    this.taskService.getTasks().pipe(startWith([])),
    this.searchTaskForm.valueChanges.pipe(startWith(this.searchTaskForm.getRawValue())),
  ]).pipe(
    map(([tasks, filter]) =>
      tasks.filter((task) => {
        const matchesStatus = !filter.status || task.status === filter.status || filter.status === 'all';
        const matchesPriority = !filter.priority || task.priority === filter.priority || filter.priority === 'all';
        const search = filter.search?.toLowerCase() ?? '';
        const matchesSearch =
          !search || task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search);

        return matchesStatus && matchesPriority && matchesSearch;
      }),
    ),
    takeUntilDestroyed(),
  );
}
