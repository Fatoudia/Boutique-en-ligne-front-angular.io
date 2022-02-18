import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './services/login/auth.service';
import { Article } from './model/article';
import { HttpErrorResponse } from '@angular/common/http';
import {ArticleService} from './services/article.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title: String = 'boutiqueInLine';
  isAuth : boolean = false;

 
constructor(
  private AuthService: AuthService,
){
  
}

ngOnInit() {
  this.AuthService.$isLoggedIn.subscribe((state)=>{this.isAuth=state;}); 
  
}





}
