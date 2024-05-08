import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './components/atoms/button-component/button-component.component';
import { CardComponent } from './components/molecules/card/card.component';
import { ListOfNumbersComponent } from './components/atoms/list-of-numbers/list-of-numbers.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { CarouselComponent } from './components/organisms/carousel/carousel.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { MenuListComponent } from './components/molecules/menu-list/menu-list.component';
import { TittleSideBarComponent } from './components/atoms/tittle-side-bar/tittle-side-bar.component';
import { CategoryComponent } from './components/atoms/category/category.component';
import { SubcategoryComponent } from './components/atoms/subcategory/subcategory.component';
import { TableCategoriesComponent } from './components/atoms/table-categories/table-categories.component';
import { TableContentComponent } from './components/atoms/table-content/table-content.component';
import { TableComponent } from './components/molecules/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ActiveEmployeesComponent } from './components/pages/active-employees/active-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    CardComponent,
    ListOfNumbersComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    MenuListComponent,
    TittleSideBarComponent,
    CategoryComponent,
    SubcategoryComponent,
    TableCategoriesComponent,
    TableContentComponent,
    TableComponent,
    MainComponent,
    DashboardComponent,
    ActiveEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
