import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task-management-api.types';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementApiService {
  private readonly baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
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
