import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousSelectorsComponent } from './various-selectors.component';

describe('VariousSelectorsComponent', () => {
  let component: VariousSelectorsComponent;
  let fixture: ComponentFixture<VariousSelectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariousSelectorsComponent]
    });
    fixture = TestBed.createComponent(VariousSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
