import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHireComponent } from './employee-hire.component';

describe('EmployeeHireComponent', () => {
  let component: EmployeeHireComponent;
  let fixture: ComponentFixture<EmployeeHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
