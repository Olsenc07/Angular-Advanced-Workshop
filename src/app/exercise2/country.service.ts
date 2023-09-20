import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country, States} from './types';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countries$: Observable<Country[]>;

  constructor(private http: HttpClient) {
    this.countries$ = http.get<Country[]>('http://localhost:3000/countries');
  }

  getCountries(): Observable<Country[]> {
    return this.countries$;
  }

  // second test
  getCountryStates(countryCode: string): Observable<States[]> {
     return this.http.get<States[]>(`http://localhost:3000/states?countryCode=${countryCode}`)
    .pipe(
      map (choices=> choices.sort((a, b) => (a.description > b.description) ? 1 : -1))
      );
}
}
