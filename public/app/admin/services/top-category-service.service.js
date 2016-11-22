"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const staticString_1 = require("../../utilities/staticString");
let TopCategoryService = class TopCategoryService {
    constructor(http) {
        this.http = http;
    }
    getTopCategories() {
        return this.http.get(staticString_1.staticString.apiAdminUrl + "topCategories")
            .map((data) => data.json());
    }
    delete(id) {
        return this.http.delete(staticString_1.staticString.apiAdminUrl + "topCategories/" + id);
    }
    create(topCategory) {
        const body = JSON.stringify(topCategory);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(staticString_1.staticString.apiAdminUrl + "topCategories", body, { headers: headers })
            .map((data) => data.json());
    }
    getTopCategory(topCategoryId) {
        return this.http.get(staticString_1.staticString.apiAdminUrl + "topCategories/" + topCategoryId)
            .map((data) => data.json());
    }
    update(topCategory) {
        const body = JSON.stringify(topCategory);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(staticString_1.staticString.apiAdminUrl + "topCategories", body, { headers: headers })
            .map((data) => data.json());
    }
    checkNameExist(id, name) {
        let params = new http_1.URLSearchParams();
        params.set('name', name);
        params.set('id', id);
        return this.http.get(staticString_1.staticString.apiAdminUrl + "topCategories/" + "checkNameExist", { search: params })
            .map((data) => data.json());
    }
};
TopCategoryService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], TopCategoryService);
exports.TopCategoryService = TopCategoryService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsK0JBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFHMUQ7SUFDRSxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQzthQUM3RCxHQUFHLENBQ0YsQ0FBQyxJQUFjLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsV0FBVyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBVztRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxXQUFXLEdBQUcsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RixHQUFHLENBQ0YsQ0FBQyxJQUFjLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUNoQyxDQUNBO0lBRUwsQ0FBQztJQUVELGNBQWMsQ0FBQyxhQUFrQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDO2FBQzlFLEdBQUcsQ0FDRixDQUFDLElBQWMsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQ2hDLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQWdCO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFdBQVcsR0FBRyxlQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3ZGLEdBQUcsQ0FDRixDQUFDLElBQWMsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQ2hDLENBQ0E7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQU0sRUFBRSxJQUFTO1FBQzlCLElBQUksTUFBTSxHQUFvQixJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDbEcsR0FBRyxDQUNGLENBQUMsSUFBYSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FDL0IsQ0FBQztJQUNOLENBQUM7QUFDSCxDQUFDO0FBckREO0lBQUMsaUJBQVUsRUFBRTs7c0JBQUE7QUFDQSwwQkFBa0IscUJBb0Q5QixDQUFBIiwiZmlsZSI6ImFkbWluL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVzcG9uc2UsIEh0dHAsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7c3RhdGljU3RyaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRpY1N0cmluZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9wQ2F0ZWdvcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gIH1cblxuICBnZXRUb3BDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllc1wiKVxuICAgICAgLm1hcChcbiAgICAgICAgKGRhdGE6IFJlc3BvbnNlKSA9PiBkYXRhLmpzb24oKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllcy9cIiArIGlkKTtcbiAgfVxuXG4gIGNyZWF0ZSh0b3BDYXRlZ29yeSkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0b3BDYXRlZ29yeSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllc1wiLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAubWFwKFxuICAgICAgICAoZGF0YTogUmVzcG9uc2UpID0+IGRhdGEuanNvbigpXG4gICAgICApXG4gICAgICA7XG5cbiAgfVxuXG4gIGdldFRvcENhdGVnb3J5KHRvcENhdGVnb3J5SWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllcy9cIiArIHRvcENhdGVnb3J5SWQpXG4gICAgICAubWFwKFxuICAgICAgICAoZGF0YTogUmVzcG9uc2UpID0+IGRhdGEuanNvbigpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKHRvcENhdGVnb3J5OiBhbnkpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodG9wQ2F0ZWdvcnkpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllc1wiLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAubWFwKFxuICAgICAgICAoZGF0YTogUmVzcG9uc2UpID0+IGRhdGEuanNvbigpXG4gICAgICApXG4gICAgICA7XG4gIH1cblxuICBjaGVja05hbWVFeGlzdChpZDphbnksIG5hbWU6IGFueSkge1xuICAgIGxldCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuc2V0KCduYW1lJywgbmFtZSk7XG4gICAgcGFyYW1zLnNldCgnaWQnLCBpZCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoc3RhdGljU3RyaW5nLmFwaUFkbWluVXJsICsgXCJ0b3BDYXRlZ29yaWVzL1wiICsgXCJjaGVja05hbWVFeGlzdFwiLHtzZWFyY2g6IHBhcmFtc30pXG4gICAgICAubWFwKFxuICAgICAgICAoZGF0YTpSZXNwb25zZSkgPT4gZGF0YS5qc29uKClcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==
