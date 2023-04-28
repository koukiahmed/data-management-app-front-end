import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actuality } from '../shared/actuality';
import { Observable, catchError, throwError } from 'rxjs';
import { Response } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class ActualitiesService {

  constructor(private http: HttpClient) { }

  addActuality(actuality: Actuality): Observable<Response>{
    return this.http.post<Response>('api/actualities/add', actuality);
  }

  getAllActualities(): Observable<Actuality[]>{
    return this.http.get<Actuality[]>('api/actualities/get');
  }

  getOneActuality(id: number): Observable<Actuality>{
    return this.http.get<Actuality>(`api/actualities/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateActuality(actuality: Actuality): Observable<Response>{
    return this.http.put<Response>(`api/actualities/update/${actuality.id}`, actuality).pipe(
      catchError(this.handleError)
    );
  }

  deleteActuality(id: number): Observable<Response>{
    return this.http.delete<Response>(`api/actualities/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }

}
