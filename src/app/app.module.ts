import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatGridListModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule, MatMenuModule,MatSnackBarModule, MatSnackBar } from '@angular/material';
import { UserLoggedInGuard } from './app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService} from './loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor} from './loader/loader.interceptor';
import { GlobalErrorHandler } from './global-error.handler';
import { MessagesComponent } from './messages/messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function initApp(http: HttpClient) {
  return () => {
    return http.get('http://localhost:8080/hi', {responseType:'text'})
    .toPromise()
    .then(res =>{
      console.log("backend is working! res: ", res);
    })
    .catch(res =>{
      console.log(res);
      window.alert("Some Error occured!!");
      throw new Error("Backend not working");
    }
    )
  }
}    

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
    LoaderComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
	  MatGridListModule,
    MatCardModule, MatButtonModule, BrowserAnimationsModule, MatSnackBarModule,MatMenuModule, MatIconModule,
    MatProgressSpinnerModule
  ],
  
  providers: [UserLoggedInGuard, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler},
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
