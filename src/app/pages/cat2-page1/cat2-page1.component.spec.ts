import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat2Page1Component } from './cat2-page1.component';

describe('Cat2Page1Component', () => {
  let component: Cat2Page1Component;
  let fixture: ComponentFixture<Cat2Page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cat2Page1Component]
    });
    fixture = TestBed.createComponent(Cat2Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
