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
const platform_browser_1 = require('@angular/platform-browser');
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const login_component_1 = require('./login/login.component');
const app_route_1 = require("./app.route");
const header_component_1 = require('./shared/header/header.component');
const footer_component_1 = require('./shared/footer/footer.component');
const portfolio_component_1 = require('./portfolio/portfolio.component');
const blog_component_1 = require('./blog/blog.component');
const about_component_1 = require('./about/about.component');
const contact_component_1 = require('./contact/contact.component');
const login_service_1 = require("./services/login.service");
const base64_1 = require("./utilities/base64");
const home_component_1 = require('./home/home.component');
const item_component_1 = require('./item/item.component');
const admin_component_1 = require('./admin/admin.component');
const settings_component_1 = require('./admin/settings/settings.component');
const admin_header_component_1 = require('./admin/shared/admin-header/admin-header.component');
const admin_footer_component_1 = require('./admin/shared/admin-footer/admin-footer.component');
const admin_sidebar_component_1 = require('./admin/shared/admin-sidebar/admin-sidebar.component');
const top_category_component_1 = require('./admin/top-category/top-category.component');
const category_component_1 = require('./admin/category/category.component');
const product_component_1 = require('./admin/product/product.component');
const top_category_service_service_1 = require("./admin/services/top-category-service.service");
const top_category_list_component_1 = require('./admin/top-category/top-category-list/top-category-list.component');
const top_category_detail_component_1 = require('./admin/top-category/top-category-detail/top-category-detail.component');
const top_category_edit_component_1 = require('./admin/top-category/top-category-edit/top-category-edit.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            portfolio_component_1.PortfolioComponent,
            blog_component_1.BlogComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            home_component_1.HomeComponent,
            item_component_1.ItemComponent,
            admin_component_1.AdminComponent,
            settings_component_1.SettingsComponent,
            admin_header_component_1.AdminHeaderComponent,
            admin_footer_component_1.AdminFooterComponent,
            admin_sidebar_component_1.AdminSidebarComponent,
            top_category_component_1.TopCategoryComponent,
            category_component_1.CategoryComponent,
            product_component_1.ProductComponent,
            top_category_list_component_1.TopCategoryListComponent,
            top_category_detail_component_1.TopCategoryDetailComponent,
            top_category_edit_component_1.TopCategoryEditComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_route_1.routing,
            forms_1.ReactiveFormsModule
        ],
        providers: [login_service_1.LoginService, base64_1.Base64, top_category_service_service_1.TopCategoryService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx3QkFBK0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsNEJBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBQ3BDLG1DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLG1DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHNDQUFtQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JFLGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELG9DQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELGdDQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELHlCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHlDQUFxQyxvREFBb0QsQ0FBQyxDQUFBO0FBQzFGLHlDQUFxQyxvREFBb0QsQ0FBQyxDQUFBO0FBQzFGLDBDQUFzQyxzREFBc0QsQ0FBQyxDQUFBO0FBQzdGLHlDQUFxQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ25GLHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLG9DQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLCtDQUFpQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ2pGLDhDQUF5QyxvRUFBb0UsQ0FBQyxDQUFBO0FBQzlHLGdEQUEyQyx3RUFBd0UsQ0FBQyxDQUFBO0FBQ3BILDhDQUF5QyxvRUFBb0UsQ0FBQyxDQUFBO0FBbUM5RztBQUF5QixDQUFDO0FBbEMxQjtJQUFDLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxrQ0FBZTtZQUNmLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDaEIsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2Qsc0NBQWlCO1lBQ2pCLDZDQUFvQjtZQUNwQiw2Q0FBb0I7WUFDcEIsK0NBQXFCO1lBQ3JCLDZDQUFvQjtZQUNwQixzQ0FBaUI7WUFDakIsb0NBQWdCO1lBQ2hCLHNEQUF3QjtZQUN4QiwwREFBMEI7WUFDMUIsc0RBQXdCO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixtQkFBVztZQUNYLGlCQUFVO1lBQ1YsbUJBQU87WUFDUCwyQkFBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFDLGVBQU0sRUFBQyxpREFBa0IsQ0FBQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQge3JvdXRpbmd9IGZyb20gXCIuL2FwcC5yb3V0ZVwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9ydGZvbGlvQ29tcG9uZW50IH0gZnJvbSAnLi9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9nL2Jsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtCYXNlNjR9IGZyb20gXCIuL3V0aWxpdGllcy9iYXNlNjRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vYWRtaW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5IZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3NoYXJlZC9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vc2hhcmVkL2FkbWluLWZvb3Rlci9hZG1pbi1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vc2hhcmVkL2FkbWluLXNpZGViYXIvYWRtaW4tc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9wQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcENhdGVnb3J5U2VydmljZX0gZnJvbSBcIi4vYWRtaW4vc2VydmljZXMvdG9wLWNhdGVnb3J5LXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgVG9wQ2F0ZWdvcnlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LWxpc3QvdG9wLWNhdGVnb3J5LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcENhdGVnb3J5RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LWRldGFpbC90b3AtY2F0ZWdvcnktZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3BDYXRlZ29yeUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktZWRpdC90b3AtY2F0ZWdvcnktZWRpdC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgUG9ydGZvbGlvQ29tcG9uZW50LFxuICAgIEJsb2dDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIEl0ZW1Db21wb25lbnQsXG4gICAgQWRtaW5Db21wb25lbnQsXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgQWRtaW5IZWFkZXJDb21wb25lbnQsXG4gICAgQWRtaW5Gb290ZXJDb21wb25lbnQsXG4gICAgQWRtaW5TaWRlYmFyQ29tcG9uZW50LFxuICAgIFRvcENhdGVnb3J5Q29tcG9uZW50LFxuICAgIENhdGVnb3J5Q29tcG9uZW50LFxuICAgIFByb2R1Y3RDb21wb25lbnQsXG4gICAgVG9wQ2F0ZWdvcnlMaXN0Q29tcG9uZW50LFxuICAgIFRvcENhdGVnb3J5RGV0YWlsQ29tcG9uZW50LFxuICAgIFRvcENhdGVnb3J5RWRpdENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICByb3V0aW5nLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTG9naW5TZXJ2aWNlLEJhc2U2NCxUb3BDYXRlZ29yeVNlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
