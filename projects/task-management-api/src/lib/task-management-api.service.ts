import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskManagementApiConfig, User } from './task-management-api.types';

export const TASK_MANAGEMENT_API_CONFIG = new InjectionToken<TaskManagementApiConfig>('TASK_MANAGEMENT_API_CONFIG');

@Injectable({
  providedIn: 'root',
})
export class TaskManagementApiService {
  private readonly baseUrl: string;
  private readonly usersEndpoint: string;
  private readonly tasksEndpoint: string;

  constructor(
    @Inject(TASK_MANAGEMENT_API_CONFIG) private config: TaskManagementApiConfig,
    private http: HttpClient,
  ) {
    this.baseUrl = this.config.baseUrl;
    this.tasksEndpoint = `${this.baseUrl}/tasks`;
    this.usersEndpoint = `${this.baseUrl}/users`;
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksEndpoint);
  }

  getTaskByUserId(userId: number): Observable<Task[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Task[]>(this.tasksEndpoint, { params });
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksEndpoint}/${id}`);
  }

  createTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.tasksEndpoint, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.tasksEndpoint}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.tasksEndpoint}/${id}`);
  }

  getTasksWithUser(): Observable<(Task & { user: User })[]> {
    const params = new HttpParams().set('_expand', 'user');
    return this.http.get<(Task & { user: User })[]>(`${this.tasksEndpoint}`, { params });
  }
}
