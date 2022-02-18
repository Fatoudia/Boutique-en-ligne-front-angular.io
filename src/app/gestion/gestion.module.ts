import { NgModule } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { ArticleItemsComponent } from './components/article-items/article-items.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { LogoutComponent } from './components/logout/logout.component';
import {gestionRoutes} from './gestion.routing';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    ArticleComponent,
    UserComponent,
    ArticleItemsComponent,
    LoginComponent,
    HelloWorldComponent,
    LogoutComponent,
    HomeComponent,
    SignupComponent,
  ],
  imports: [
    RouterModule.forChild(gestionRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [],
 
})
export class GestionModule { }
