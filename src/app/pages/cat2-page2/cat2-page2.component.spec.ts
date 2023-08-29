import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat2Page2Component } from './cat2-page2.component';

describe('Cat2Page2Component', () => {
  let component: Cat2Page2Component;
  let fixture: ComponentFixture<Cat2Page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cat2Page2Component]
    });
    fixture = TestBed.createComponent(Cat2Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
