import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../model/article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];
  public editArticle: Article;
  public deleteArticle: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticle();
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

  public onAddArticle(addForm: NgForm): void {
    document.getElementById('add-article-form').click();
    this.articleService.addArticle(addForm.value).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticle();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public onUpdateArticle(article: Article): void {
    this.articleService.updateArticle(article).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticle();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
    OndeleteArticle(articleID: String): void {
      this.articleService.deleteArticle(articleID).subscribe(
        (response: void) => {
          console.log(response);
          this.getArticle();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  
    public searchArticle(key: string): void {
      console.log(key);
      const results: Article[] = [];
      for (const article of this.articles) {
        if (article.libelle.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || article.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          results.push(article);
        }
      }
      this.articles = results;
      if (results.length === 0 || !key) {
        this.getArticle();
      }
    }
  
    public onOpenModal(article: Article, mode: string): void {
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');
      if (mode === 'add') {
        button.setAttribute('data-target', '#addArticleModal');
      }
      if (mode === 'edit') {
        this.editArticle = article;
        button.setAttribute('data-target', '#updateArticleModal');
      }
      if (mode === 'delete') {
        this.deleteArticle = article;
        button.setAttribute('data-target', '#deleteArticleModal');
      }
      container.appendChild(button);
      button.click();
    }
 }
