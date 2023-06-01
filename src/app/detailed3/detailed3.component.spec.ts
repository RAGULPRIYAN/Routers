import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailed3Component } from './detailed3.component';

describe('Detailed3Component', () => {
  let component: Detailed3Component;
  let fixture: ComponentFixture<Detailed3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detailed3Component]
    });
    fixture = TestBed.createComponent(Detailed3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
