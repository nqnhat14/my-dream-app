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
const core_1 = require('@angular/core');
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
};
TopCategoryService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], TopCategoryService);
exports.TopCategoryService = TopCategoryService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0MsK0JBQTJCLDhCQUE4QixDQUFDLENBQUE7QUFHMUQ7SUFFRSxZQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7SUFDbEMsZ0JBQWdCO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQzthQUM3RCxHQUFHLENBQ0YsQ0FBQyxJQUFhLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUMvQixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsV0FBVyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7QUFDSCxDQUFDO0FBZEQ7SUFBQyxpQkFBVSxFQUFFOztzQkFBQTtBQUNBLDBCQUFrQixxQkFhOUIsQ0FBQSIsImZpbGUiOiJhZG1pbi9zZXJ2aWNlcy90b3AtY2F0ZWdvcnktc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZXNwb25zZSwgSHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7c3RhdGljU3RyaW5nfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRpY1N0cmluZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9wQ2F0ZWdvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkgeyB9XG4gIGdldFRvcENhdGVnb3JpZXMoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChzdGF0aWNTdHJpbmcuYXBpQWRtaW5VcmwgKyBcInRvcENhdGVnb3JpZXNcIilcbiAgICAgIC5tYXAoXG4gICAgICAgIChkYXRhOlJlc3BvbnNlKSA9PiBkYXRhLmpzb24oKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHN0YXRpY1N0cmluZy5hcGlBZG1pblVybCArIFwidG9wQ2F0ZWdvcmllcy9cIiArIGlkKTtcbiAgfVxufVxuIl19
