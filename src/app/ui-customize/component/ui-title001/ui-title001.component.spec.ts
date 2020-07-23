import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTitle001Component } from './ui-title001.component';

describe('UiTitle001Component', () => {
  let component: UiTitle001Component;
  let fixture: ComponentFixture<UiTitle001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTitle001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTitle001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
