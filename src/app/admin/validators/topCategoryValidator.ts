import {ValidatorFn, AbstractControl, FormControl, AsyncValidatorFn} from "@angular/forms";
import {TopCategoryService} from "../services/top-category-service.service";
import {Observable} from "rxjs";
import {Injector, ReflectiveInjector} from "@angular/core";
import {
  Http, HttpModule, XHRBackend, RequestOptions, BrowserXhr, BaseRequestOptions,
  ResponseOptions, XSRFStrategy, BaseResponseOptions, CookieXSRFStrategy
} from "@angular/http";
/**
 * Created by nqnha on 11/17/2016.
 */
//TODO:http://stackoverflow.com/questions/39491647/angular2-resolveandcreate-http-missing-http-providers-in-rc7//
const HTTP_PROVIDERS = [
  {provide: Http, useFactory:
    (xhrBackend: XHRBackend, requestOptions: RequestOptions): Http =>
      new Http(xhrBackend, requestOptions),
    deps: [XHRBackend, RequestOptions]},
  BrowserXhr,
  {provide: RequestOptions, useClass: BaseRequestOptions},
  {provide: ResponseOptions, useClass: BaseResponseOptions},
  XHRBackend,
  {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
];

export class TopCategoryValidator {
  constructor(private topCategoryService: TopCategoryService) {

  }

  static checkForbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = nameRe.test(name);
      return no ? {'forbiddenName': {name}} : null;
    };
  }

  //noinspection JSAnnotator
  static usernameTaken(id:any):AsyncValidatorFn{
    let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
    let http = injector.get(Http);
    return (c: AbstractControl): any =>{
      let topCategoryService = new TopCategoryService(http);
      let q = new Promise((resolve, reject) => {
        topCategoryService.checkNameExist(id,c.value).subscribe(
          (exist)=>{
            if(exist){
              resolve({usernameTaken:true});
            }else{
              resolve(null);
            }
          },
          ()=>{
            resolve(null);
          }
        );
      });
      return q;
    }
  }
}
