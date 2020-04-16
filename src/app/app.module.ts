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
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { UserLoggedInGuard } from './app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    routingComponents,
    ContactUsComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
	  MatGridListModule,
    MatCardModule, MatButtonModule, BrowserAnimationsModule
  ],
  providers: [UserLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
