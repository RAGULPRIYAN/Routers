import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailed1Component } from './detailed1.component';

describe('Detailed1Component', () => {
  let component: Detailed1Component;
  let fixture: ComponentFixture<Detailed1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detailed1Component]
    });
    fixture = TestBed.createComponent(Detailed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
