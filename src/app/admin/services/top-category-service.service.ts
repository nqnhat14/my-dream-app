import {Injectable, Inject} from "@angular/core";
import {Response, Http, Headers, URLSearchParams} from "@angular/http";
import {staticString} from "../../utilities/staticString";

@Injectable()
export class TopCategoryService {
  constructor(private http: Http) {
  }

  getTopCategories() {
    return this.http.get(staticString.apiAdminUrl + "topCategories")
      .map(
        (data: Response) => data.json()
      );
  }

  delete(id) {
    return this.http.delete(staticString.apiAdminUrl + "topCategories/" + id);
  }

  create(topCategory) {
    const body = JSON.stringify(topCategory);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(staticString.apiAdminUrl + "topCategories", body, {headers: headers})
      .map(
        (data: Response) => data.json()
      )
      ;

  }

  getTopCategory(topCategoryId: any) {
    return this.http.get(staticString.apiAdminUrl + "topCategories/" + topCategoryId)
      .map(
        (data: Response) => data.json()
      );
  }

  update(topCategory: any) {
    const body = JSON.stringify(topCategory);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(staticString.apiAdminUrl + "topCategories", body, {headers: headers})
      .map(
        (data: Response) => data.json()
      )
      ;
  }

  checkNameExist(id:any, name: any) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', name);
    params.set('id', id);
    return this.http.get(staticString.apiAdminUrl + "topCategories/" + "checkNameExist",{search: params})
      .map(
        (data:Response) => data.json()
      );
  }
}
