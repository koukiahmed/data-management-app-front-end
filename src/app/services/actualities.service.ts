import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actuality } from '../shared/actuality';
import { Observable, catchError, throwError } from 'rxjs';
import { Response } from '../shared/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActualitiesService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  addActuality(actuality: Actuality): Observable<Response>{
    return this.http.post<Response>(`${this.apiUrl}/actualities/add`, actuality);
  }

  getAllActualities(): Observable<Actuality[]>{
    return this.http.get<Actuality[]>(`${this.apiUrl}/actualities/get`);
  }

  getOneActuality(id: number): Observable<Actuality>{
    return this.http.get<Actuality>(`${this.apiUrl}/actualities/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateActuality(actuality: Actuality): Observable<Response>{
    return this.http.put<Response>(`${this.apiUrl}/actualities/update/${actuality.id}`, actuality).pipe(
      catchError(this.handleError)
    );
  }

  deleteActuality(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.apiUrl}/actualities/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }

}
