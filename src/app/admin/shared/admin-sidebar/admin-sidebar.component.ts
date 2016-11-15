import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  Layout:any;
  constructor() { }

  ngOnInit() {
    Layout.initSidebarToggle();
  }

}
