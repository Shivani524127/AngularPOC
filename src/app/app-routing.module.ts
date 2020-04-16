import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoggedInGuard } from './app.guard';


const routes: Routes = [
  {path: '', redirectTo:'/signUp', pathMatch:'full'},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: LoginComponent},
  {path: 'home', component: ProductListComponent,  canActivate: [UserLoggedInGuard]},
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, SignupComponent]