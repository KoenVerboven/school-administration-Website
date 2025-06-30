import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInfoComponent } from './students-info.component';

describe('StudentsInfoComponent', () => {
  let component: StudentsInfoComponent;
  let fixture: ComponentFixture<StudentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
