import { Document } from './../shared/document';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Response } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }


  uploadDocument(folder: String, file: FormData): Observable<Response>{
    return this.http.post<Response>(`api/documents/upload/${folder}`, file).pipe(
      catchError(this.handleError)
    );
  }

  downloadDocument(id: number){
    return this.http.get(`api/documents/download/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllDocuments(): Observable<Document[]>{
    return this.http.get<Document[]>('api/documents/get');
  }

  updateDocument(document: Document): Observable<Response>{
    return this.http.put<Response>(`api/documents/update/${document.id}`, document).pipe(
      catchError(this.handleError)
    );
  }

  deleteDocument(id: number): Observable<Response>{
    return this.http.delete<Response>(`api/documents/delete/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }
}
