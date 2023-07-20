import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestserverComponent } from './testserver.component';

describe('TestserverComponent', () => {
  let component: TestserverComponent;
  let fixture: ComponentFixture<TestserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestserverComponent]
    });
    fixture = TestBed.createComponent(TestserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
