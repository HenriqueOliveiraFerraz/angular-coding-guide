import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  readonly taskManagementApiBaseUrl: string;

  constructor() {
    this.taskManagementApiBaseUrl = import.meta.env.TASK_MANAGEMENT_API_BASE_URL;
  }
}
