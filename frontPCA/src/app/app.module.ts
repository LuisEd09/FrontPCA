import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './components/atoms/button-component/button-component.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ListOfNumbersComponent } from './components/atoms/list-of-numbers/list-of-numbers.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { CarouselComponent } from './components/organisms/carousel/carousel.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { MenuListComponent } from './components/molecules/menu-list/menu-list.component';
import { TittleSideBarComponent } from './components/atoms/tittle-side-bar/tittle-side-bar.component';
import { CategoryComponent } from './components/atoms/category/category.component';
import { SubcategoryComponent } from './components/atoms/subcategory/subcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    CardComponent,
    ListOfNumbersComponent,
    DashboardComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    MenuListComponent,
    TittleSideBarComponent,
    CategoryComponent,
    SubcategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
