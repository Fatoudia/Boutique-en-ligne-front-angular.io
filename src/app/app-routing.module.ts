import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './gestion/components/article/article.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from './gestion/components/user/user.component';
import { LoginComponent } from './gestion/components/login/login.component';
import { HelloWorldComponent } from './gestion/components/hello-world/hello-world.component';
import { HomeComponent } from './gestion/components/home/home.component';

const routes: Routes = [
 // {path:'home',component:LoginComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'user', component: UserComponent},
  {path:'login', component:LoginComponent},
 // {path:'', component:LoginComponent},
  {path:'', component:HomeComponent},
//  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  
 // {path:'login',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
