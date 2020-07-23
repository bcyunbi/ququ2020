import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-title001',
  templateUrl: './ui-title001.component.html',
  styleUrls: ['./ui-title001.component.scss']
})
export class UiTitle001Component implements OnInit {

  @Input() mainTitle :string;
  @Input() subTitle :string;

  constructor() { }

  ngOnInit() {
  }

}
