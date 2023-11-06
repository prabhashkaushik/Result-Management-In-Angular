import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentPageComponent } from './add-student-page.component';

describe('AddStudentPageComponent', () => {
  let component: AddStudentPageComponent;
  let fixture: ComponentFixture<AddStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
