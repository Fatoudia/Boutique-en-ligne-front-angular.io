import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../../model/article';
import { HttpErrorResponse } from '@angular/common/http';
import {ArticleService} from '../../../services/article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  articles: Article[];
 
  constructor(
    private articleService: ArticleService

  ) { }

 
    
  ngOnInit(): void {
    this.getArticle()

  }

  public getArticle(): void {
    this.articleService.getArticle().subscribe(
      (response: Article[]) => {
       this.articles = response;
      console.log(this.articles);
  },
      (error: HttpErrorResponse) => {
  //   alert(error.message);
  }
  );
  }

}
