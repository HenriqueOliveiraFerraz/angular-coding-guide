import { FormControl } from '@angular/forms';
import { TaskPriority, TaskStatus } from '@task-management-api';

export interface SearchTaskFormControls {
  search: FormControl<string>;
  status: FormControl<TaskStatus | 'all'>;
  priority: FormControl<TaskPriority | 'all'>;
}
