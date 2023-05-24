import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChildInterestsComponent } from './form-child-interests.component';

describe('FormChildInterestsComponent', () => {
  let component: FormChildInterestsComponent;
  let fixture: ComponentFixture<FormChildInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormChildInterestsComponent]
    });
    fixture = TestBed.createComponent(FormChildInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
