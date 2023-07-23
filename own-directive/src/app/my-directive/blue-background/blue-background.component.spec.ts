import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBackgroundComponent } from './blue-background.component';

describe('BlueBackgroundComponent', () => {
  let component: BlueBackgroundComponent;
  let fixture: ComponentFixture<BlueBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueBackgroundComponent]
    });
    fixture = TestBed.createComponent(BlueBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
