import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponents } from './form.component';

describe('FormComponent', () => {
  let component: FormComponents;
  let fixture: ComponentFixture<FormComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponents]
    });
    fixture = TestBed.createComponent(FormComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
