import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../shared/link';
import { Response } from '../shared/response';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  addLink(link: Link): Observable<Response>{
    return this.http.post<Response>('api/links/add', link);
  }

  getAllLinks(): Observable<Link[]>{
    return this.http.get<Link[]>('api/links/get');
  }

  getOneLink(id: number): Observable<Link>{
    return this.http.get<Link>(`api/links/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateLink(link: Link): Observable<Response>{
    return this.http.put<Response>(`api/links/update/${link.id}`, link).pipe(
      catchError(this.handleError)
    );
  }

  deleteLink(id: number): Observable<Response>{
    return this.http.delete<Response>(`api/links/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }
}
