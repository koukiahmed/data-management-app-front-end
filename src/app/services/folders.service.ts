import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Folder } from '../shared/folder';
import { Response } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {

  constructor(private http: HttpClient) { }

  addFolder(folder: Folder): Observable<Response>{
    return this.http.post<Response>('api/folders/add', folder);
  }

  getAllFolders(): Observable<Folder[]>{
    return this.http.get<Folder[]>('api/folders/get');
  }

  getOneFolder(id: number): Observable<Folder>{
    return this.http.get<Folder>(`api/folders/get/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.error);
  }

}
