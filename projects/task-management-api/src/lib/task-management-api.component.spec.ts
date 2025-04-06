import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementApiComponent } from './task-management-api.component';

describe('TaskManagementApiComponent', () => {
  let component: TaskManagementApiComponent;
  let fixture: ComponentFixture<TaskManagementApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagementApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskManagementApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
