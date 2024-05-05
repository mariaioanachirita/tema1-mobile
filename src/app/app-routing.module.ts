import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoffeComponent } from './coffe/coffe.component';
import { LoginComponent } from './login/login.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coffee', component: CoffeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coffe', component: CoffeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
