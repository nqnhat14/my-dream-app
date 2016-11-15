import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  moduleId:module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  Layout:any;
  constructor() { }
  ngOnInit() {
    Layout.initOWL();
    Layout.initImageZoom();
    Layout.initTouchspin();
    Layout.initTwitter();
  }
  ngOnDestroy(): void {
  }

}
