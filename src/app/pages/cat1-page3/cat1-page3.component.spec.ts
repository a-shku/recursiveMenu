import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1Page3Component } from './cat1-page3.component';

describe('Cat1Page3Component', () => {
  let component: Cat1Page3Component;
  let fixture: ComponentFixture<Cat1Page3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cat1Page3Component]
    });
    fixture = TestBed.createComponent(Cat1Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
