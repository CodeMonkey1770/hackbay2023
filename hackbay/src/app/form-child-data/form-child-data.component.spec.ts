import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChildDataComponent } from './form-child-data.component';

describe('FormChildDataComponent', () => {
  let component: FormChildDataComponent;
  let fixture: ComponentFixture<FormChildDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormChildDataComponent]
    });
    fixture = TestBed.createComponent(FormChildDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
