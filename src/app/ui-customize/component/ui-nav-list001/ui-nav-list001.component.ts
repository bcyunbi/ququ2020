import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { trigger, query, style, animate, transition, stagger, keyframes, group, state } from '@angular/animations';

@Component({
  selector: 'app-ui-nav-list001',
  templateUrl: './ui-nav-list001.component.html',
  styleUrls: ['./ui-nav-list001.component.scss'], encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state('open', style({
        // visibility: 'visible',
        display: 'flex',
        transform: '*'
      })),
      state('closed', style({
        // visibility: 'hidden',
        transform: '*',
        display: 'none',
      })),
      transition('open => closed', [
        group([query('.card_content', stagger('.1s', [
          animate('1s cubic-bezier(0.29, 0.37, 0.32, 1.275)', keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: .5, offset: 0.3 }),
            style({ opacity: 0, offset: 1 }),
          ]))])),
        ]),
      ]),
      transition('closed => open', [
        style({   display: 'flex', }),
        group([query('.card_content', stagger('.1s', [
          animate('1s cubic-bezier(0.29, 0.37, 0.32, 1.275)', keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: .5, transform: 'translateY(30px) scaleX(1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))])),
        ]),
      ])])]
})
export class UiNavList001Component implements OnInit {

  constructor() { }
  private _isClickMenu;
  @Input()
  set isClickMenu(isClickMenu: boolean) {
    this._isClickMenu = isClickMenu;
  }
  get isClickMenu(): boolean {
    return this._isClickMenu;
  }

  private _menuList;
  @Input()
  set menuList(menuList: string) {
    this._menuList = menuList;
  }
  get menuList(): string {
    return this._menuList;
  }
  @Output() clickMenuPage = new EventEmitter();
  ngOnInit() {
  }
  clickMenuCard(i) {
    this.clickMenuPage.emit(i);
  }
}
