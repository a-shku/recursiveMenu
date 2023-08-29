import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveMenuComponent } from './recursive-menu.component';

describe('RecursiveMenuComponent', () => {
  let component: RecursiveMenuComponent;
  let fixture: ComponentFixture<RecursiveMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursiveMenuComponent]
    });
    fixture = TestBed.createComponent(RecursiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
