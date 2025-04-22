import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagementApiService } from '@task-management-api';
import { SharedModule } from '@task-management-app/shared/modules/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-management-app';
  taskManagementApiService = inject(TaskManagementApiService);
  tasksObs = this.taskManagementApiService.getTasks();
}
