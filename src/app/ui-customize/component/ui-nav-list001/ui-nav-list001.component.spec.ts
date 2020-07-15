import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNavList001Component } from './ui-nav-list001.component';

describe('UiNavList001Component', () => {
  let component: UiNavList001Component;
  let fixture: ComponentFixture<UiNavList001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNavList001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNavList001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
