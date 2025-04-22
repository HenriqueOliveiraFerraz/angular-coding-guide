import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskManagementApiService } from '@task-management-api';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  private route = inject(ActivatedRoute);
  readonly taskService = inject(TaskManagementApiService);

  taskObs = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get('id');
      return id ? this.taskService.getTaskById(parseInt(id)) : of(null);
    }),
  );
}
