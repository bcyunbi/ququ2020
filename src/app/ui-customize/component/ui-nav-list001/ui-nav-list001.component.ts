import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { trigger, query, style, animate, transition, stagger, keyframes, group, state } from '@angular/animations';

@Component({
  selector: 'app-ui-nav-list001',
  templateUrl: './ui-nav-list001.component.html',
  styleUrls: ['./ui-nav-list001.component.scss'], encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      // state('*', style({
      //   opacity: 0,
      //   visibility: 'hidden',
      // })),
      state('open', style({
        visibility: 'visible',
        transform: '*',
        background: 'white'
      })),
      state('closed', style({
        visibility: 'hidden',
        transform: '*',
        // background: 'transparent'
      })),
      transition('open => closed', [
        group([query('.card_content', stagger('.1s', [
          animate('.3s linear', keyframes([
            style({ opacity: 1 }),
            style({ opacity: .5 }),
            style({ opacity: 0 }),
          ]))])),
        ]),
      ]),
      transition('closed => open', [
        style({ visibility: 'visible', opacity: 1 ,background: 'white' }),
        query('.card_content', style({ opacity: 0 })),
        group([query('.card_content', stagger('.1s', [
          animate('.3s linear', keyframes([
            style({ opacity: 0 }),
            style({ opacity: .5, transform: 'translate3d(0,10px,0)' }),
            style({ opacity: 1, transform: 'translate3d(0,0,0)' }),
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
    // console.log('component say:',i)
    this.clickMenuPage.emit(i);
  }
}
