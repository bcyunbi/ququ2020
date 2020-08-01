import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  @ViewChild('cardScroll', { static: false }) cardScroll: ElementRef;
  // public vh = window.innerHeight * 0.01;
  tableImg: Observable<any[]>;
  mobileImg: Observable<any[]>;
  skhTableImg: Observable<any[]>;
  skhMobileImg: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.tableImg = db.collection('tableImg').valueChanges();
    this.mobileImg = db.collection('mobileImg').valueChanges();
    this.skhTableImg = db.collection('skhTable').valueChanges();
    this.skhMobileImg = db.collection('skhMobile').valueChanges();
  }
  public isClickMenu: boolean = false;
  public menuChars = ['M', 'E', 'N', 'U']
  public menuList = ['簡歷', '保險專員系統', '醫院掛號系統', '銀行業官網維護', '大學線上作品集']
  public infoList = [
    {
      'imgSrc': 'assets/img/fixweb001.png',
      'webSrc': 'https://garden.decoder.com.tw/portal/demo/QuQu/megabank_event_2019/',
      'textTitle': '理財e把兆 - 豐享退活動',
      'textInfo': ' GA埋code、更改活動內容'
    }, {
      'imgSrc': 'assets/img/fixweb002.png',
      'webSrc': 'https://www.bankchb.com/frontend/taiwanpay/chbtp-1-1-1-1.html',
      'textTitle': '彰化銀行-台灣pay',
      'textInfo': '解決includehtml切換頁面時，Dom長出造成的抖動問題'
    }, {
      'imgSrc': 'assets/img/fixweb003.png',
      'webSrc': 'https://www.skbank.com.tw/index.html#!Loan',
      'textTitle': '新光銀行個金首頁',
      'textInfo': ' 修改＆新增功能'
    },
  ]

  ngOnInit() {
    this.windowSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowSize();
  }
  windowSize(){
    // let vh = window.innerHeight * 0.01;
    // document.body.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vh', window.innerHeight/100 + 'px');
    document.body.style.height = window.innerHeight + "px";
    // console.log("vh",vh);
  }
  handleMenu() {
    this.isClickMenu = !this.isClickMenu;
  }
  public currentPage: number = 0;

  clickMenuCard(index) {
    this.currentPage = index;
    this.isClickMenu = false;
     this.cardScroll.nativeElement.scrollTo(0, 0);
  }
}
