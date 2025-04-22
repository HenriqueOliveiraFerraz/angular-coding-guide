import { DateTime } from 'luxon';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: DateTime;
  dueDate: DateTime;
  userId: number;
}

export enum TaskStatus {
  Todo = 'todo',
  InProgress = 'in-progress',
  Done = 'done',
}

export enum TaskPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'High',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface TaskManagementApiConfig {
  baseUrl: string;
}
