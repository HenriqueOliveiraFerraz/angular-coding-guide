import { TestBed } from '@angular/core/testing';

import { TaskManagementApiService } from './task-management-api.service';

describe('TaskManagementApiService', () => {
  let service: TaskManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
