import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  Layout:any;
  constructor() { }

  ngOnInit() {
    Layout.init();
    Layout.initOWL();
    Layout.initTwitter();
    Layout.initImageZoom();
    Layout.initTouchspin();
    Layout.initUniform();
    Layout.initRateIt();

  }

}
