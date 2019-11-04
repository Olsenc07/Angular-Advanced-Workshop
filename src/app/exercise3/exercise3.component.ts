import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Country, State} from './types';
import {CountryService} from './country.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component {

  countries$: Observable<Country[]> = this.service.getCountries();
  states$: Observable<State[]>;
  country: Country;
  state: State;

  constructor(private service: CountryService) { }

  updateStates(country: Country) {
    this.country = country;
    this.states$ = this.service.getStatesFor(country.id);
  }
}
