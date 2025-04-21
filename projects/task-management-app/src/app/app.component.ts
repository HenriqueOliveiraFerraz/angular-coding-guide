import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagementApiService } from '@task-management-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'task-management-app';
  api = inject(TaskManagementApiService);

  ngOnInit(): void {
    this.api.getAll().subscribe({
      next: (value) => console.log(value),
    });
  }
}
