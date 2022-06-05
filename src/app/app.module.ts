import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './Server/server/server.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeslistComponent } from './recipes/recipeslist/recipeslist.component';
import { RecipesdetailComponent } from './recipes/recipesdetail/recipesdetail.component';
import { RecipesitemComponent } from './recipes/recipeslist/recipesitem/recipesitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { DropdownDirective } from './Shared/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeslistComponent,
    RecipesdetailComponent,
    RecipesitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    DropdownDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
