import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCalculator } from './app/models/calculate.model';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  
 
  constructor(private http: HttpClient) { }


  url = 'https://localhost:7145/Calculator/'
  getListOperations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}getListOperations`);
  }

  public executeOperation(fieldA: string, fieldB: string, operation: string): Observable<ResponseCalculator> {
    const payload = { fieldA, fieldB, operation };
    return this.http.post<ResponseCalculator>(`${this.url}execute`, payload);
  }


}

