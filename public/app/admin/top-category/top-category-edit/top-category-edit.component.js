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
const forms_1 = require("@angular/forms");
const top_category_service_service_1 = require("../../services/top-category-service.service");
const router_1 = require("@angular/router");
const topCategoryValidator_1 = require("../../validators/topCategoryValidator");
let TopCategoryEditComponent = class TopCategoryEditComponent {
    constructor(formBuilder, topCategoryService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.topCategoryService = topCategoryService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe((param) => {
            this.topCategoryId = param['id'];
            this.topCategoryService.getTopCategory(this.topCategoryId).subscribe((data) => {
                this.name.setValue(data.name);
            });
        });
        this.initForm();
    }
    //initial the form
    initForm() {
        this.name = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(4),
            forms_1.Validators.maxLength(24),
            topCategoryValidator_1.TopCategoryValidator.checkForbiddenNameValidator(/bob/i),
        ], [topCategoryValidator_1.TopCategoryValidator.usernameTaken(this.topCategoryId)]);
        this.editForm = this.formBuilder.group({
            name: this.name
        });
    }
    onSubmit() {
        const newTopCategory = this.editForm.value;
        newTopCategory.id = this.topCategoryId;
        this.topCategoryService.update(newTopCategory).subscribe((data) => {
            this.router.navigate(['../../list'], { relativeTo: this.activatedRoute });
        }, (error) => {
            console.error(error);
        });
    }
};
TopCategoryEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-top-category-edit',
        templateUrl: './top-category-edit.component.html',
        styleUrls: ['./top-category-edit.component.css']
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, top_category_service_service_1.TopCategoryService, router_1.Router, router_1.ActivatedRoute])
], TopCategoryEditComponent);
exports.TopCategoryEditComponent = TopCategoryEditComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktZWRpdC90b3AtY2F0ZWdvcnktZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx3QkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRSwrQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSx5QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCx1Q0FBbUMsdUNBQXVDLENBQUMsQ0FBQTtBQVEzRTtJQWFFLFlBQW9CLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsY0FBOEI7UUFIOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFoQkQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQWdCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3RELENBQUMsS0FBVTtZQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FDbEUsQ0FBQyxJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRTtZQUM5QixrQkFBVSxDQUFDLFFBQVE7WUFDbkIsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUN4QiwyQ0FBb0IsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUM7U0FDekQsRUFBRSxDQUFDLDJDQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDM0MsY0FBYyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUN0RCxDQUFDLElBQUk7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFDRCxDQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUEvREQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNqRCxDQUFDOzs0QkFBQTtBQUNXLGdDQUF3QiwyQkF5RHBDLENBQUEiLCJmaWxlIjoiYWRtaW4vdG9wLWNhdGVnb3J5L3RvcC1jYXRlZ29yeS1lZGl0L3RvcC1jYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtUb3BDYXRlZ29yeVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90b3AtY2F0ZWdvcnktc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtUb3BDYXRlZ29yeVZhbGlkYXRvcn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvcnMvdG9wQ2F0ZWdvcnlWYWxpZGF0b3JcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXRvcC1jYXRlZ29yeS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvcC1jYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLWNhdGVnb3J5LWVkaXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvcENhdGVnb3J5RWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkRlc3Ryb3kge1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy9mb3JtIGVsZW1lbnRcbiAgZWRpdEZvcm06IEZvcm1Hcm91cDtcbiAgbmFtZTogRm9ybUNvbnRyb2w7XG5cbiAgLy9cbiAgdG9wQ2F0ZWdvcnlJZDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b3BDYXRlZ29yeVNlcnZpY2U6IFRvcENhdGVnb3J5U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgKHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy50b3BDYXRlZ29yeUlkID0gcGFyYW1bJ2lkJ107XG4gICAgICAgIHRoaXMudG9wQ2F0ZWdvcnlTZXJ2aWNlLmdldFRvcENhdGVnb3J5KHRoaXMudG9wQ2F0ZWdvcnlJZCkuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKT0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZS5zZXRWYWx1ZShkYXRhLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuaW5pdEZvcm0oKTtcbiAgfVxuXG4gIC8vaW5pdGlhbCB0aGUgZm9ybVxuICBpbml0Rm9ybSgpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxcbiAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI0KSxcbiAgICAgIFRvcENhdGVnb3J5VmFsaWRhdG9yLmNoZWNrRm9yYmlkZGVuTmFtZVZhbGlkYXRvcigvYm9iL2kpLFxuICAgIF0sIFtUb3BDYXRlZ29yeVZhbGlkYXRvci51c2VybmFtZVRha2VuKHRoaXMudG9wQ2F0ZWdvcnlJZCldKTtcbiAgICB0aGlzLmVkaXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IG5ld1RvcENhdGVnb3J5ID0gdGhpcy5lZGl0Rm9ybS52YWx1ZTtcbiAgICBuZXdUb3BDYXRlZ29yeS5pZCA9IHRoaXMudG9wQ2F0ZWdvcnlJZDtcbiAgICB0aGlzLnRvcENhdGVnb3J5U2VydmljZS51cGRhdGUobmV3VG9wQ2F0ZWdvcnkpLnN1YnNjcmliZShcbiAgICAgIChkYXRhKT0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi8uLi9saXN0J10sIHtyZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlfSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKT0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19
