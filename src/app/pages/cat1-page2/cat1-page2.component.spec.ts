import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1Page2Component } from './cat1-page2.component';

describe('Cat1Page2Component', () => {
  let component: Cat1Page2Component;
  let fixture: ComponentFixture<Cat1Page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cat1Page2Component]
    });
    fixture = TestBed.createComponent(Cat1Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
