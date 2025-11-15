import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSheduleComponent } from './course-shedule.component';

describe('CourseSheduleComponent', () => {
  let component: CourseSheduleComponent;
  let fixture: ComponentFixture<CourseSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
