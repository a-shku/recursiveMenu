import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1Page1Component } from './cat1-page1.component';

describe('Cat1Page1Component', () => {
  let component: Cat1Page1Component;
  let fixture: ComponentFixture<Cat1Page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cat1Page1Component]
    });
    fixture = TestBed.createComponent(Cat1Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
