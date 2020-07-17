import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContentProject001Component } from './ui-content-project001.component';

describe('UiContentProject001Component', () => {
  let component: UiContentProject001Component;
  let fixture: ComponentFixture<UiContentProject001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiContentProject001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContentProject001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
