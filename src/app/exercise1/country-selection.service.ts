import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryList } from './country-list.interface';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CountrySelectionService {
    constructor(private http: HttpClient) {}
    // first test
    getCountryList(): Observable<CountryList[]> {
       return this.http.get<CountryList[]>('/api/countries')
    }
 }