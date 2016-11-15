import { Component, OnInit } from '@angular/core';
import {TopCategoryService} from "../../services/top-category-service.service";

@Component({
  moduleId:module.id,
  selector: 'app-top-category-list',
  templateUrl: './top-category-list.component.html',
  styleUrls: ['./top-category-list.component.css']
})
export class TopCategoryListComponent implements OnInit {
  topCategories;

  constructor(private topCategoryService: TopCategoryService) {
  }

  ngOnInit() {
    this.topCategoryService.getTopCategories().subscribe(
      (data)=> {
        this.topCategories = data;
      },
      (error)=> {

      }
    )
  }

  delete(id, index) {
    console.log(this.topCategories);
    this.topCategoryService.delete(id).subscribe(
      ()=>{
        this.topCategories.splice(index, 1);
      }
    )
  }
}
