import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultListComponent } from './examresult-list.component';

describe('ExamResultListComponent', () => {
  let component: ExamResultListComponent;
  let fixture: ComponentFixture<ExamResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamResultListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
