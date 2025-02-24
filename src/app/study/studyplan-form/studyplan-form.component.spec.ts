import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyplanFormComponent } from './studyplan-form.component';

describe('StudyplanFormComponent', () => {
  let component: StudyplanFormComponent;
  let fixture: ComponentFixture<StudyplanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyplanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyplanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
