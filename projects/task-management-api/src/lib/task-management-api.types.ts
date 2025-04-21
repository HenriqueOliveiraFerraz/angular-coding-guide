import { DateTime } from 'luxon';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: DateTime;
  dueDate: DateTime;
  userId: number;
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
