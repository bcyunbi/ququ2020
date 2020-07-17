import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    '簡歷保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統保險業業務員系統', '保險業業務員系統', '醫院掛號系統', '銀行業官網維護', '大學線上作品集', '大學線上作品集', '大學線上作品集'
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
