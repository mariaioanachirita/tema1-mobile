import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeniuComponent } from './meniu/meniu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoffeComponent } from './coffe/coffe.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniuComponent,
    HomeComponent,
    LoginComponent,
    CoffeComponent,
    ToolbarComponent,
    CoffeeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
