import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  url = 'http://localhost:3001/vacancy?order=quantity';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(this.url)
      .pipe(retry(2))
  }
}
