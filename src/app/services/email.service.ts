import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../shared/email';
import { Response } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<Response>{
    return this.http.post<Response>(`api/email/send`,email);
  }
}
