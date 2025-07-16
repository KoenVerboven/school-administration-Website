import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFormComponent } from './school-form.component';

describe('SchoolFormComponent', () => {
  let component: SchoolFormComponent;
  let fixture: ComponentFixture<SchoolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
