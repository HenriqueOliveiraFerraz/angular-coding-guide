import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task, TaskManagementApiService } from '@task-management-api';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit {
  readonly taskService = inject(TaskManagementApiService);
  readonly id = input.required<number>();
  readonly taskSignal = signal<Task | null>(null);

  ngOnInit(): void {
    this.taskService.getTaskById(this.id()).subscribe({
      next: (task) => this.taskSignal.update(() => task),
    });
  }
}
