import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HttpClientModule }    from '@angular/common/http';
<<<<<<< HEAD
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { ProductListComponent } from './product-list/product-list.component';
import {MatGridListModule, MatCardModule, MatButtonModule} from '@angular/material';
import { UserLoggedInGuard } from './app.guard';
>>>>>>> b79d9f4e966eb590b729589dd03208f3c689d2ad


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    routingComponents,
<<<<<<< HEAD
    UserHomePageComponent,
    ContactUsComponent
=======
    ProductListComponent
>>>>>>> b79d9f4e966eb590b729589dd03208f3c689d2ad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
=======
	 MatGridListModule,
    MatCardModule, MatButtonModule
>>>>>>> b79d9f4e966eb590b729589dd03208f3c689d2ad
  ],
  providers: [UserLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
