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
const top_category_service_service_1 = require("../../services/top-category-service.service");
let TopCategoryListComponent = class TopCategoryListComponent {
    constructor(topCategoryService) {
        this.topCategoryService = topCategoryService;
    }
    ngOnInit() {
        this.topCategoryService.getTopCategories().subscribe((data) => {
            this.topCategories = data;
        }, (error) => {
        });
    }
    delete(id, index) {
        console.log(this.topCategories);
        this.topCategoryService.delete(id).subscribe(() => {
            this.topCategories.splice(index, 1);
        });
    }
};
TopCategoryListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-top-category-list',
        templateUrl: './top-category-list.component.html',
        styleUrls: ['./top-category-list.component.css']
    }), 
    __metadata('design:paramtypes', [top_category_service_service_1.TopCategoryService])
], TopCategoryListComponent);
exports.TopCategoryListComponent = TopCategoryListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktbGlzdC90b3AtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCwrQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQVEvRTtJQUdFLFlBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzFELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUMsU0FBUyxDQUNsRCxDQUFDLElBQUk7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDLEVBQ0QsQ0FBQyxLQUFLO1FBRU4sQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzFDO1lBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUEvQkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDOzs0QkFBQTtBQUNXLGdDQUF3QiwyQkF5QnBDLENBQUEiLCJmaWxlIjoiYWRtaW4vdG9wLWNhdGVnb3J5L3RvcC1jYXRlZ29yeS1saXN0L3RvcC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RvcENhdGVnb3J5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOm1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtdG9wLWNhdGVnb3J5LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLWNhdGVnb3J5LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b3AtY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wQ2F0ZWdvcnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdG9wQ2F0ZWdvcmllcztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvcENhdGVnb3J5U2VydmljZTogVG9wQ2F0ZWdvcnlTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvcENhdGVnb3J5U2VydmljZS5nZXRUb3BDYXRlZ29yaWVzKCkuc3Vic2NyaWJlKFxuICAgICAgKGRhdGEpPT4ge1xuICAgICAgICB0aGlzLnRvcENhdGVnb3JpZXMgPSBkYXRhO1xuICAgICAgfSxcbiAgICAgIChlcnJvcik9PiB7XG5cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBkZWxldGUoaWQsIGluZGV4KSB7XG4gICAgY29uc29sZS5sb2codGhpcy50b3BDYXRlZ29yaWVzKTtcbiAgICB0aGlzLnRvcENhdGVnb3J5U2VydmljZS5kZWxldGUoaWQpLnN1YnNjcmliZShcbiAgICAgICgpPT57XG4gICAgICAgIHRoaXMudG9wQ2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIClcbiAgfVxufVxuIl19
