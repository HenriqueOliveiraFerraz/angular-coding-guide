import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskManagementApiConfig } from './task-management-api.types';

export const TASK_MANAGEMENT_API_CONFIG = new InjectionToken<TaskManagementApiConfig>('TASK_MANAGEMENT_API_CONFIG');

@Injectable({
  providedIn: 'root',
})
export class TaskManagementApiService {
  private readonly baseUrl: string;
  private readonly usersEndpoint: string;

  constructor(
    @Inject(TASK_MANAGEMENT_API_CONFIG) private config: TaskManagementApiConfig,
    private http: HttpClient,
  ) {
    this.baseUrl = this.config.baseUrl;
    this.usersEndpoint = `${this.baseUrl}/users`;
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.usersEndpoint);
  }

  getByUser(userId: number): Observable<Task[]> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Task[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  create(task: Omit<Task, 'id'>): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getWithUser(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.baseUrl}?_expand=user`);
  }
}
