import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBindnindComponent } from './host-bindnind.component';

describe('HostBindnindComponent', () => {
  let component: HostBindnindComponent;
  let fixture: ComponentFixture<HostBindnindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostBindnindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostBindnindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
