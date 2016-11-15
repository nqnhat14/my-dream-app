import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})

export class AdminHeaderComponent implements OnInit {
  App:any;
  Layout:any;
  constructor() { }

  ngOnInit() {
    App.init();
    Layout.init();
  }

}
