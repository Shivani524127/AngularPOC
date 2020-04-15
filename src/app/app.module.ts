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
import { UserHomePageComponent } from './user-home-page/user-home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    routingComponents,
    UserHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
