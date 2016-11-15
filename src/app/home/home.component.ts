import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Layout: any;
  constructor() { }

  ngOnInit() {
    Layout.initOWL();
    Layout.initImageZoom();
    Layout.initTouchspin();
    Layout.initTwitter();
  }
}
