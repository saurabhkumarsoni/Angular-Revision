import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text1Component } from './text1.component';

describe('Text1Component', () => {
  let component: Text1Component;
  let fixture: ComponentFixture<Text1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Text1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Text1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
