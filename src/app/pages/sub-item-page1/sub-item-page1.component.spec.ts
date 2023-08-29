import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemPage1Component } from './sub-item-page1.component';

describe('SubItemPage1Component', () => {
  let component: SubItemPage1Component;
  let fixture: ComponentFixture<SubItemPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubItemPage1Component]
    });
    fixture = TestBed.createComponent(SubItemPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
