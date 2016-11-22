import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {BlogComponent} from "./blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {AdminComponent} from "./admin/admin.component";
import {SettingsComponent} from "./admin/settings/settings.component";
import {CategoryComponent} from "./admin/category/category.component";
import {TopCategoryComponent} from "./admin/top-category/top-category.component";
import {ProductComponent} from "./admin/product/product.component";
import {TopCategoryListComponent} from "./admin/top-category/top-category-list/top-category-list.component";
import {TopCategoryDetailComponent} from "./admin/top-category/top-category-detail/top-category-detail.component";
import {TopCategoryEditComponent} from "./admin/top-category/top-category-edit/top-category-edit.component";
import {TopCategoryCreateComponent} from "./admin/top-category/top-category-create/top-category-create.component";
/**
 * Created by My-PC on 10/12/2016.
 */
const routes:Routes = [
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'item/:id',
    component:ItemComponent
  },
  {
    path:'',
    component:HomeComponent

  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'settings', terminal: 'true' },
      { path: 'settings', component: SettingsComponent,caseInsensitiveMatch: true },

      //For top category route
      { path: 'topcategory',
        component: TopCategoryComponent,
        children:[
          {path:'',component:TopCategoryListComponent},
          {path:'list',name:'List',component:TopCategoryListComponent},
          {path:'create',component:TopCategoryCreateComponent},
          {path:':id/edit',component:TopCategoryEditComponent},
        ]
      },
      { path: 'category', component: CategoryComponent,caseInsensitiveMatch: true },

      //For product route
      { path: 'product', component: ProductComponent,caseInsensitiveMatch: true },
    ]
  }
];
export const routing = RouterModule.forRoot(routes);
