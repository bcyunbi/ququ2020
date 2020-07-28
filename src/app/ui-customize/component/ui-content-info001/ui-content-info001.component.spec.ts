import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContentInfo001Component } from './ui-content-info001.component';

describe('UiContentInfo001Component', () => {
  let component: UiContentInfo001Component;
  let fixture: ComponentFixture<UiContentInfo001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiContentInfo001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContentInfo001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
