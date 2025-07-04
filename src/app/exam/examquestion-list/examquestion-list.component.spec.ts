import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamquestionListComponent } from './examquestion-list.component';

describe('ExamquestionListComponent', () => {
  let component: ExamquestionListComponent;
  let fixture: ComponentFixture<ExamquestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamquestionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamquestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
