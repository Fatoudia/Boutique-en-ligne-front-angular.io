import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../article';
@Injectable({
  providedIn: 'root',
})
export class ServicesComponent  {

  private apiServerUrl  = 'http://localhost:5000/article';
  //title = 'Demo';
  //greeting = {};
  constructor(private http:HttpClient) { 
   // http.get('resource').subscribe(data => this.greeting = data);
  }
  
  public getGymnases():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiServerUrl }`);

  }

}
