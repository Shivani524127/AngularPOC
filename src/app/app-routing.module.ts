import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserLoggedInGuard } from './app.guard';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', redirectTo:'/signUp', pathMatch:'full'},
  {path: 'signUp', component: SignupComponent},
  {path: 'signIn', component: LoginComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'home', component: ProductListComponent,  canActivate: [UserLoggedInGuard]},
  {path: 'home/:id', component: ProductDetailsComponent},
  {
    path: '',
    component: SignupComponent,
    children: [
        {
            // User Homepage
            path: '**',
            component: SignupComponent
        }
    ]
}
  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginComponent, SignupComponent, ContactUsComponent]