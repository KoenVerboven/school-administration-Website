import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPresenceComponent } from './teacher-presence.component';

describe('TeacherPresenceComponent', () => {
  let component: TeacherPresenceComponent;
  let fixture: ComponentFixture<TeacherPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherPresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
