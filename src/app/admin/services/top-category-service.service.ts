import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import {staticString} from "../../utilities/staticString";

@Injectable()
export class TopCategoryService {

  constructor(private http:Http) { }
  getTopCategories(){
    return this.http.get(staticString.apiAdminUrl + "topCategories")
      .map(
        (data:Response) => data.json()
      );
  }

  delete(id) {
    return this.http.delete(staticString.apiAdminUrl + "topCategories/" + id);
  }
}
