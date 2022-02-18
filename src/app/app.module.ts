import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ArticleComponent } from './gestion/components/article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './gestion/components/user/user.component';
import { ArticleItemsComponent } from './gestion/components/article-items/article-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './gestion/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './gestion/components/hello-world/hello-world.component';
import { LogoutComponent } from './gestion/components/logout/logout.component';
import { MenuComponent } from './gestion/components/menu/menu.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './gestion/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ArticleComponent,
    UserComponent,
    ArticleItemsComponent,
    LoginComponent,
    HelloWorldComponent,
    LogoutComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule,

  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
