import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../shared/link';
import { Response } from '../shared/response';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  addLink(link: Link): Observable<Response>{
    return this.http.post<Response>(`${this.apiUrl}/links/add`, link);
  }

  getAllLinks(): Observable<Link[]>{
    return this.http.get<Link[]>(`${this.apiUrl}/links/get`);
  }

  getOneLink(id: number): Observable<Link>{
    return this.http.get<Link>(`${this.apiUrl}/links/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateLink(link: Link): Observable<Response>{
    return this.http.put<Response>(`${this.apiUrl}/links/update/${link.id}`, link).pipe(
      catchError(this.handleError)
    );
  }

  deleteLink(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.apiUrl}/links/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }
}
