import { Document } from './../shared/document';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Response } from '../shared/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;


  uploadDocument(folder: String, file: FormData): Observable<Response>{
    return this.http.post<Response>(`${this.apiUrl}/documents/upload/${folder}`, file).pipe(
      catchError(this.handleError)
    );
  }

  getAllDocuments(): Observable<Document[]>{
    return this.http.get<Document[]>(`${this.apiUrl}/documents/get`);
  }

  updateDocument(document: Document): Observable<Response>{
    return this.http.put<Response>(`${this.apiUrl}/documents/update/${document.id}`, document).pipe(
      catchError(this.handleError)
    );
  }

  deleteDocument(id: number): Observable<Response>{
    return this.http.delete<Response>(`${this.apiUrl}/documents/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }
}
