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
const top_category_edit_component_1 = require('./admin/top-category/top-category-edit/top-category-edit.component');
const top_category_create_component_1 = require('./admin/top-category/top-category-create/top-category-create.component');
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
            top_category_edit_component_1.TopCategoryEditComponent,
            top_category_create_component_1.TopCategoryCreateComponent,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG1DQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx3QkFBK0MsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRSx1QkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsZ0NBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsNEJBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBQ3BDLG1DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLG1DQUFnQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25FLHNDQUFtQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3JFLGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELG9DQUFpQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9ELGdDQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELHlCQUFxQixvQkFBb0IsQ0FBQyxDQUFBO0FBQzFDLGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGlDQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHlDQUFxQyxvREFBb0QsQ0FBQyxDQUFBO0FBQzFGLHlDQUFxQyxvREFBb0QsQ0FBQyxDQUFBO0FBQzFGLDBDQUFzQyxzREFBc0QsQ0FBQyxDQUFBO0FBQzdGLHlDQUFxQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ25GLHFDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLG9DQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLCtDQUFpQywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ2pGLDhDQUF5QyxvRUFBb0UsQ0FBQyxDQUFBO0FBQzlHLDhDQUF5QyxvRUFBb0UsQ0FBQyxDQUFBO0FBQzlHLGdEQUEyQyx3RUFBd0UsQ0FBQyxDQUFBO0FBbUNwSDtBQUF5QixDQUFDO0FBbEMxQjtJQUFDLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxrQ0FBZTtZQUNmLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDaEIsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLGdDQUFjO1lBQ2Qsc0NBQWlCO1lBQ2pCLDZDQUFvQjtZQUNwQiw2Q0FBb0I7WUFDcEIsK0NBQXFCO1lBQ3JCLDZDQUFvQjtZQUNwQixzQ0FBaUI7WUFDakIsb0NBQWdCO1lBQ2hCLHNEQUF3QjtZQUN4QixzREFBd0I7WUFDeEIsMERBQTBCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixtQkFBVztZQUNYLGlCQUFVO1lBQ1YsbUJBQU87WUFDUCwyQkFBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFDLGVBQU0sRUFBQyxpREFBa0IsQ0FBQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0h0dHBNb2R1bGUsIEh0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHtyb3V0aW5nfSBmcm9tIFwiLi9hcHAucm91dGVcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcnRmb2xpb0NvbXBvbmVudCB9IGZyb20gJy4vcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYmxvZy9ibG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFzZTY0fSBmcm9tIFwiLi91dGlsaXRpZXMvYmFzZTY0XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9zaGFyZWQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5Gb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3NoYXJlZC9hZG1pbi1mb290ZXIvYWRtaW4tZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pblNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3NoYXJlZC9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BDYXRlZ29yeVNlcnZpY2V9IGZyb20gXCIuL2FkbWluL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRvcENhdGVnb3J5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vdG9wLWNhdGVnb3J5L3RvcC1jYXRlZ29yeS1saXN0L3RvcC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3BDYXRlZ29yeUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktZWRpdC90b3AtY2F0ZWdvcnktZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9wQ2F0ZWdvcnlDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2FkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktY3JlYXRlL3RvcC1jYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFBvcnRmb2xpb0NvbXBvbmVudCxcbiAgICBCbG9nQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIENvbnRhY3RDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBJdGVtQ29tcG9uZW50LFxuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgIEFkbWluSGVhZGVyQ29tcG9uZW50LFxuICAgIEFkbWluRm9vdGVyQ29tcG9uZW50LFxuICAgIEFkbWluU2lkZWJhckNvbXBvbmVudCxcbiAgICBUb3BDYXRlZ29yeUNvbXBvbmVudCxcbiAgICBDYXRlZ29yeUNvbXBvbmVudCxcbiAgICBQcm9kdWN0Q29tcG9uZW50LFxuICAgIFRvcENhdGVnb3J5TGlzdENvbXBvbmVudCxcbiAgICBUb3BDYXRlZ29yeUVkaXRDb21wb25lbnQsXG4gICAgVG9wQ2F0ZWdvcnlDcmVhdGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgcm91dGluZyxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW0xvZ2luU2VydmljZSxCYXNlNjQsVG9wQ2F0ZWdvcnlTZXJ2aWNlXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
