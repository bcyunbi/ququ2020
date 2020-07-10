import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  public isClickMenu: boolean = false;
  constructor() { }
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
  ngOnInit() {

  }
  handleMenu() {
    this.isClickMenu = !this.isClickMenu;
  }
}
