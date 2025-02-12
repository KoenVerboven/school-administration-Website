import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTableComponent } from './course-table.component';

describe('CourseTableComponent', () => {
  let component: CourseTableComponent;
  let fixture: ComponentFixture<CourseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
