import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBackgroundComponent } from './green-background.component';

describe('GreenBackgroundComponent', () => {
  let component: GreenBackgroundComponent;
  let fixture: ComponentFixture<GreenBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenBackgroundComponent]
    });
    fixture = TestBed.createComponent(GreenBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
