import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path: '', redirectTo:'/signUp', pathMatch:'full'},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: LoginComponent},
  {path: 'userHomePage', component: UserHomePageComponent},
  {path: 'contactUs', component: ContactUsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, SignupComponent, ContactUsComponent]