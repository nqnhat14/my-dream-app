import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.route";
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {LoginService} from "./services/login.service";
import {Base64} from "./utilities/base64";
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { AdminHeaderComponent } from './admin/shared/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/shared/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin/shared/admin-sidebar/admin-sidebar.component';
import { TopCategoryComponent } from './admin/top-category/top-category.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import {TopCategoryService} from "./admin/services/top-category-service.service";
import { TopCategoryListComponent } from './admin/top-category/top-category-list/top-category-list.component';
import { TopCategoryEditComponent } from './admin/top-category/top-category-edit/top-category-edit.component';
import { TopCategoryCreateComponent } from './admin/top-category/top-category-create/top-category-create.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ItemComponent,
    AdminComponent,
    SettingsComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    TopCategoryComponent,
    CategoryComponent,
    ProductComponent,
    TopCategoryListComponent,
    TopCategoryEditComponent,
    TopCategoryCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [LoginService,Base64,TopCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
