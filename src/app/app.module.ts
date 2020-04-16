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
import { MatGridListModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { UserLoggedInGuard } from './app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import {LoaderService} from './loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoaderInterceptor} from './loader/loader.interceptor';



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
    ProductDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
	  MatGridListModule,
    MatCardModule, MatButtonModule, BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [UserLoggedInGuard, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
