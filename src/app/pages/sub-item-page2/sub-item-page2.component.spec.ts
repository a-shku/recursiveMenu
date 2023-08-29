import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItemPage2Component } from './sub-item-page2.component';

describe('SubItemPage2Component', () => {
  let component: SubItemPage2Component;
  let fixture: ComponentFixture<SubItemPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubItemPage2Component]
    });
    fixture = TestBed.createComponent(SubItemPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
