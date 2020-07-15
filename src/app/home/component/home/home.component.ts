import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, query, style, animate, transition, stagger, keyframes, group, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state('open', style({
        visibility: 'visible',
        transform: '*'
      })),
      state('closed', style({
        visibility: 'hidden',
        transform: '*'
      })),
      transition('open => closed', [
        group([query('.card_a', stagger('.1s', [
          animate('1s cubic-bezier(0.29, 0.37, 0.32, 1.275)', keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: .5, offset: 0.3 }),
            style({ opacity: 0, offset: 1 }),
          ]))])),
        ]),
      ]),
      transition('closed => open', [
        style({ visibility: 'visible', }),
        group([query('.card_a', stagger('.1s', [
          animate('1s cubic-bezier(0.29, 0.37, 0.32, 1.275)', keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: .5, transform: 'translateY(30px) scaleX(1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))])),
        ]),
      ])])]
})
export class HomeComponent implements OnInit {
  public isClickMenu: boolean = false;
  constructor() { }
  public menuChars=['M','e','n','u']
  public bannerList = [
    {
      "img": "assets/img/img01.jpg"
    },
    {
      "img": "assets/img/img02.jpg"
    },
    {
      "img": "assets/img/img03.jpg"
    },
    {
      "img": "assets/img/img04.jpg"
    }
  ];
  public menuList = [
    '簡歷保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統', '保險業業務員系統', '醫院掛號系統', '銀行業官網維護', '大學線上作品集'
  ]
  ngOnInit() {

  }
  handleMenu() {
    this.isClickMenu = !this.isClickMenu;
  }
  public currentPage: number = 0;
  clickMenuCard(index) {
    this.currentPage = index;
    console.log("hiiiiiii", this.currentPage)
  }
  // onAnimationEvent(event: AnimationEvent) {
  //   console.log({ event.toState });
  // }


}
