import { Component } from '@angular/core';
import { Observable, Subject, switchMap} from 'rxjs';
import {Country, State, CombinedOption} from './types';

import {CountryService} from './country.service';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.css']
})
export class Exercise5Component {
  country: Country;
  countries$: Observable<Country[]>;
  private countrySubject$ = new Subject<Country>();

  statesForCountry$: Observable<State[]>;
  states: State;


  constructor(private service: CountryService) {
  this.countries$ = this.service.getCountries()
  this.statesForCountry$ = this.countrySubject$.asObservable().pipe(
    switchMap(country => this.service.getStatesFor(country.id))
   )
  }

  newSelected(selectionObject: Country): void {
    this.country = selectionObject;
    this.states = null;
    this.countrySubject$.next(selectionObject)
  }

}
