import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoggedInGuard } from './app.guard';
>>>>>>> b79d9f4e966eb590b729589dd03208f3c689d2ad


const routes: Routes = [
  {path: '', redirectTo:'/signUp', pathMatch:'full'},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: LoginComponent},
<<<<<<< HEAD
  {path: 'userHomePage', component: UserHomePageComponent},
  {path: 'contactUs', component: ContactUsComponent},
=======
  {path: 'home', component: ProductListComponent,  canActivate: [UserLoggedInGuard]},
>>>>>>> b79d9f4e966eb590b729589dd03208f3c689d2ad
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, SignupComponent, ContactUsComponent]