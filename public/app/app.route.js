"use strict";
const router_1 = require("@angular/router");
const login_component_1 = require("./login/login.component");
const portfolio_component_1 = require("./portfolio/portfolio.component");
const about_component_1 = require("./about/about.component");
const contact_component_1 = require("./contact/contact.component");
const blog_component_1 = require("./blog/blog.component");
const home_component_1 = require("./home/home.component");
const item_component_1 = require("./item/item.component");
const admin_component_1 = require("./admin/admin.component");
const settings_component_1 = require("./admin/settings/settings.component");
const category_component_1 = require("./admin/category/category.component");
const top_category_component_1 = require("./admin/top-category/top-category.component");
const product_component_1 = require("./admin/product/product.component");
const top_category_list_component_1 = require("./admin/top-category/top-category-list/top-category-list.component");
const top_category_detail_component_1 = require("./admin/top-category/top-category-detail/top-category-detail.component");
const top_category_edit_component_1 = require("./admin/top-category/top-category-edit/top-category-edit.component");
/**
 * Created by My-PC on 10/12/2016.
 */
const routes = [
    {
        path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'item/:id',
        component: item_component_1.ItemComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            { path: '', redirectTo: 'settings', terminal: 'true' },
            { path: 'settings', component: settings_component_1.SettingsComponent, caseInsensitiveMatch: true },
            //For top category route
            { path: 'topcategory',
                component: top_category_component_1.TopCategoryComponent,
                children: [
                    { path: 'list', component: top_category_list_component_1.TopCategoryListComponent },
                    { path: ':id/edit', component: top_category_edit_component_1.TopCategoryEditComponent },
                    { path: ':id/detail', component: top_category_detail_component_1.TopCategoryDetailComponent }
                ]
            },
            { path: 'category', component: category_component_1.CategoryComponent, caseInsensitiveMatch: true },
            //For product route
            { path: 'product', component: product_component_1.ProductComponent, caseInsensitiveMatch: true },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsa0NBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsc0NBQWlDLGlDQUFpQyxDQUFDLENBQUE7QUFDbkUsa0NBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsb0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsaUNBQTRCLHVCQUF1QixDQUFDLENBQUE7QUFDcEQsaUNBQTRCLHVCQUF1QixDQUFDLENBQUE7QUFDcEQsaUNBQTRCLHVCQUF1QixDQUFDLENBQUE7QUFDcEQsa0NBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQscUNBQWdDLHFDQUFxQyxDQUFDLENBQUE7QUFDdEUscUNBQWdDLHFDQUFxQyxDQUFDLENBQUE7QUFDdEUseUNBQW1DLDZDQUE2QyxDQUFDLENBQUE7QUFDakYsb0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQXVDLG9FQUFvRSxDQUFDLENBQUE7QUFDNUcsZ0RBQXlDLHdFQUF3RSxDQUFDLENBQUE7QUFDbEgsOENBQXVDLG9FQUFvRSxDQUFDLENBQUE7QUFDNUc7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBVTtJQUNwQjtRQUNFLElBQUksRUFBQyxXQUFXO1FBQ2hCLFNBQVMsRUFBQyx3Q0FBa0I7S0FDN0I7SUFDRDtRQUNFLElBQUksRUFBQyxNQUFNO1FBQ1gsU0FBUyxFQUFDLDhCQUFhO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsT0FBTztRQUNaLFNBQVMsRUFBQyxnQ0FBYztLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFDLFNBQVM7UUFDZCxTQUFTLEVBQUMsb0NBQWdCO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsT0FBTztRQUNaLFNBQVMsRUFBQyxnQ0FBYztLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFDLE1BQU07UUFDWCxTQUFTLEVBQUMsOEJBQWE7S0FFeEI7SUFDRDtRQUNFLElBQUksRUFBQyxVQUFVO1FBQ2YsU0FBUyxFQUFDLDhCQUFhO0tBQ3hCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsRUFBRTtRQUNQLFNBQVMsRUFBQyw4QkFBYTtLQUV4QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsZ0NBQWM7UUFDekIsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtZQUN0RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRTtZQUU3RSx3QkFBd0I7WUFDeEIsRUFBRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLDZDQUFvQjtnQkFDL0IsUUFBUSxFQUFDO29CQUNQLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsc0RBQXdCLEVBQUM7b0JBQ2hELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsc0RBQXdCLEVBQUM7b0JBQ3BELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsMERBQTBCLEVBQUM7aUJBQ3pEO2FBQ0Y7WUFDRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRTtZQUU3RSxtQkFBbUI7WUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7U0FDNUU7S0FDRjtDQUNGLENBQUM7QUFDVyxlQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1BvcnRmb2xpb0NvbXBvbmVudH0gZnJvbSBcIi4vcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnRcIjtcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuL2Fib3V0L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jsb2dDb21wb25lbnR9IGZyb20gXCIuL2Jsb2cvYmxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtL2l0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2V0dGluZ3NDb21wb25lbnR9IGZyb20gXCIuL2FkbWluL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDYXRlZ29yeUNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50XCI7XG5pbXBvcnQge1RvcENhdGVnb3J5Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1RvcENhdGVnb3J5TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vdG9wLWNhdGVnb3J5L3RvcC1jYXRlZ29yeS1saXN0L3RvcC1jYXRlZ29yeS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUb3BDYXRlZ29yeURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vdG9wLWNhdGVnb3J5L3RvcC1jYXRlZ29yeS1kZXRhaWwvdG9wLWNhdGVnb3J5LWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7VG9wQ2F0ZWdvcnlFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LWVkaXQvdG9wLWNhdGVnb3J5LWVkaXQuY29tcG9uZW50XCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgTXktUEMgb24gMTAvMTIvMjAxNi5cbiAqL1xuY29uc3Qgcm91dGVzOlJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6J3BvcnRmb2xpbycsXG4gICAgY29tcG9uZW50OlBvcnRmb2xpb0NvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDonYmxvZycsXG4gICAgY29tcG9uZW50OkJsb2dDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6J2Fib3V0JyxcbiAgICBjb21wb25lbnQ6QWJvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6J2NvbnRhY3QnLFxuICAgIGNvbXBvbmVudDpDb250YWN0Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidsb2dpbicsXG4gICAgY29tcG9uZW50OkxvZ2luQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidob21lJyxcbiAgICBjb21wb25lbnQ6SG9tZUNvbXBvbmVudFxuXG4gIH0sXG4gIHtcbiAgICBwYXRoOidpdGVtLzppZCcsXG4gICAgY29tcG9uZW50Okl0ZW1Db21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6JycsXG4gICAgY29tcG9uZW50OkhvbWVDb21wb25lbnRcblxuICB9LFxuICB7XG4gICAgcGF0aDogJ2FkbWluJyxcbiAgICBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnc2V0dGluZ3MnLCB0ZXJtaW5hbDogJ3RydWUnIH0sXG4gICAgICB7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsY2FzZUluc2Vuc2l0aXZlTWF0Y2g6IHRydWUgfSxcblxuICAgICAgLy9Gb3IgdG9wIGNhdGVnb3J5IHJvdXRlXG4gICAgICB7IHBhdGg6ICd0b3BjYXRlZ29yeScsXG4gICAgICAgIGNvbXBvbmVudDogVG9wQ2F0ZWdvcnlDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOltcbiAgICAgICAgICB7cGF0aDonbGlzdCcsY29tcG9uZW50OlRvcENhdGVnb3J5TGlzdENvbXBvbmVudH0sXG4gICAgICAgICAge3BhdGg6JzppZC9lZGl0Jyxjb21wb25lbnQ6VG9wQ2F0ZWdvcnlFZGl0Q29tcG9uZW50fSxcbiAgICAgICAgICB7cGF0aDonOmlkL2RldGFpbCcsY29tcG9uZW50OlRvcENhdGVnb3J5RGV0YWlsQ29tcG9uZW50fVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAnY2F0ZWdvcnknLCBjb21wb25lbnQ6IENhdGVnb3J5Q29tcG9uZW50LGNhc2VJbnNlbnNpdGl2ZU1hdGNoOiB0cnVlIH0sXG5cbiAgICAgIC8vRm9yIHByb2R1Y3Qgcm91dGVcbiAgICAgIHsgcGF0aDogJ3Byb2R1Y3QnLCBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQsY2FzZUluc2Vuc2l0aXZlTWF0Y2g6IHRydWUgfSxcbiAgICBdXG4gIH1cbl07XG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG4iXX0=
