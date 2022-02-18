import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../model/article';
import { Observable } from 'rxjs';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:5000/article';

  constructor(private http: HttpClient) {}

  getArticle(): Observable<Article[]> {
  //  let headers : HttpHeaders = new HttpHeaders().set("Authorization",'Basic ' + btoa('MARY:1234')).set('Content-Type',  'application/json');
    return this.http.get<Article[]>(`${this.apiUrl}/all`);
  }

  deleteArticle(articleID: String): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${articleID}`);

}

public addArticle(article: Article): Observable<Article> {
  return this.http.post<Article>(`${this.apiUrl}/add`, article);
}

public updateArticle(article: Article): Observable<Article> {
  return this.http.put<Article>(`${this.apiUrl}/update`, article);
}
}