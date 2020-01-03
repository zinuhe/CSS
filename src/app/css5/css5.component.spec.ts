import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css5Component } from './css5.component';

describe('Css5Component', () => {
  let component: Css5Component;
  let fixture: ComponentFixture<Css5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
