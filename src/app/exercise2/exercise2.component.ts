import { Component } from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {Country, States} from './types';
import {CountryService} from './country.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component {

  countries$: Observable<Country[]> = this.service.getCountries();
  countryDropdown = new FormControl<Country['id']>(null);
  states$: Observable<States[]>;
  statesDropdown = new FormControl<States['description']>(null);

  constructor(private service: CountryService) { 
    // Switch Map emitting values only from the most recently projected Observable.
    // HTTP Requests: When you make multiple HTTP requests based 
    // on some user interactions, you often want to ignore the responses from previous requests if new interactions occur. 
    // switchMap is used to cancel the ongoing HTTP request and switch to a new one when a new interaction happens.
    this.states$ = this.countryDropdown.valueChanges.pipe(
      switchMap((countryDropdown) => service.getCountryStates(countryDropdown))
    )
  }

}
