import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementApiService {
  http = inject(HttpClient);

  getTasks() {
    return of([
      {
        id: 1,
        name: 'first',
      },
      {
        id: 2,
        name: 'second',
      },
      {
        id: 3,
        name: 'third',
      },
      {
        id: 4,
        name: 'fourth',
      },
    ]);
  }
}
