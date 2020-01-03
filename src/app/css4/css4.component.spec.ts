import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css4Component } from './css4.component';

describe('Css4Component', () => {
  let component: Css4Component;
  let fixture: ComponentFixture<Css4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
