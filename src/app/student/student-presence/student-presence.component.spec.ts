import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPresenceComponent } from './student-presence.component';

describe('StudentPresenceComponent', () => {
  let component: StudentPresenceComponent;
  let fixture: ComponentFixture<StudentPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
