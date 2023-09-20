import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './country-list.interface';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CountrySelectionService {
    constructor(private http: HttpClient) {}
    // first test
    getCountryList(): Observable<Country[]> {
       return this.http.get<Country[]>('http://localhost:3000/countries')
    }
 }