import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Login } from '../shared/login';
import { Response } from '../shared/response';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //all function have catch error handler with message to send it to component if data not ok

  loginUser(login: Login): Observable<Response>{
    return this.http.post<Response>('api/users/login', login).pipe(
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<Response>{
    return this.http.post<Response>('api/users/save', user).pipe(
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('api/users/get').pipe(
      catchError(this.handleError)
    );
  }

  getOneUser(id: number): Observable<User>{
    return this.http.get<User>(`api/users/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<Response>{
    return this.http.put<Response>(`api/users/update/${user.id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<Response>{
    return this.http.delete<Response>(`api/users/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //check if user with login or not with session storage message save there
  isLoggedIn(){
    return sessionStorage.getItem('message')!=null;
  }

  //check if user has role in session storage then get it
  getRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  //create function for handle error get from backend then send it to http request in service
  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }

}
