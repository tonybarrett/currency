import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_KEY = 'B3VYJ8elkheLKQZvV9rxSBhwY31hYruG';

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<any> {
    return this.http.get('https://api.currencybeacon.com/v1/currencies?api_key=' + this.API_KEY );
  }
  
  public convertAmount(from: string, to: string, amount: number): Observable<any> {
    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('from', from)
    .set('to', to)
    .set('amount', amount);

  return this.http.get('https://api.currencybeacon.com/v1/convert', {params});
  }
}
