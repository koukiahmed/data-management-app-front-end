import { Observable, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../shared/email';
import { Response } from '../shared/response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  sendEmail(email: Email): Observable<Response>{
    return this.http.post<Response>(`${this.apiUrl}/email/send`,email).pipe(delay(1000));
  }
}
