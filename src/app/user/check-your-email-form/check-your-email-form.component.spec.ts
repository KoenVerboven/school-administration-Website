import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckYourEmailFormComponent } from './check-your-email-form.component';

describe('CheckYourEmailFormComponent', () => {
  let component: CheckYourEmailFormComponent;
  let fixture: ComponentFixture<CheckYourEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckYourEmailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckYourEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
