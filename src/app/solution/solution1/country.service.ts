import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Country} from './types';

import {DATA} from "../../../../json/db";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countries$: Observable<Country[]>;

  constructor(private http: HttpClient) {
    //this.countries$ = http.get<Country[]>('http://localhost:3000/countries');
    this.countries$ = of(DATA.countries);
  }

  getCountries(): Observable<Country[]> {
    return this.countries$;
  }
}
