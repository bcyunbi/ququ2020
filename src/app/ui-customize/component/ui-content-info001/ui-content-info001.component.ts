import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-content-info001',
  templateUrl: './ui-content-info001.component.html',
  styleUrls: ['./ui-content-info001.component.scss']
})
export class UiContentInfo001Component implements OnInit {
  @Input() imgSrc:string;
  @Input() webSrc:string;
  @Input() textTitle:string;
  @Input() textInfo:string;
  
  constructor() { }

  ngOnInit() {
  }

}
