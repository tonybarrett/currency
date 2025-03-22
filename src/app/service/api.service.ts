import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'B3VYJ8elkheLKQZvV9rxSBhwY31hYruG';
  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<any> {
    return this.http.get('https://api.currencybeacon.com/v1/currencies?api_key=' + this.API_KEY );
  }
  
}
