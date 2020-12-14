import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-ui-nav001',
  templateUrl: './ui-nav001.component.html',
  styleUrls: ['./ui-nav001.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiNav001Component implements OnInit {

  constructor() { }
  private _isClickMenu;
  @Input()
  set isClickMenu(isClickMenu: boolean) {
    this._isClickMenu = isClickMenu;
  }
  get isClickMenu(): boolean {
    return this._isClickMenu;
  }

  private _menuChars;
  @Input()
  set menuChars(menuChars: string) {
    this._menuChars = menuChars;
  }
  get menuChars(): string {
    return this._menuChars;
  }
  ngOnInit() {
  }
  handelHambuger() {
    // console.log("ClickMenu", this._isClickMenu)
  }
}
