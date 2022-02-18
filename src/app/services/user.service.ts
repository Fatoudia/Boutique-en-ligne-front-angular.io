import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {

   // let headers : HttpHeaders = new HttpHeaders().set("Authorization",'Basic ' + btoa('MARY:1234')).set('Content-Type',  'application/json')
   // return this.http.get<User[]>(this.apiUrl,{headers:headers});
      return this.http.get<User[]>(`${this.apiUrl}/user/all`);
    }

  deleteUser(userID: String): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/user/delete/${userID}`);

}

public addUser(user: User): Observable<User> {
  return this.http.post<User>(`${this.apiUrl}/user/add`, user);
}

public updateUser(user: User): Observable<User> {
  return this.http.put<User>(`${this.apiUrl}/user/update`, user);
}
}


