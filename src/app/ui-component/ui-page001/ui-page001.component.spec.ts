import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPage001Component } from './ui-page001.component';

describe('UiPage001Component', () => {
  let component: UiPage001Component;
  let fixture: ComponentFixture<UiPage001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPage001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPage001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
