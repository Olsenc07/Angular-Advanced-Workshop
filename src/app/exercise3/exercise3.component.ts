import { Component } from '@angular/core';
import {Observable, withLatestFrom, of, switchMap, map} from 'rxjs';
import {Country, State} from './types';
import {CountryService} from './country.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css'],
})
export class Exercise3Component  {

  countries$: Observable<Country[]> 
  countryValue = new FormControl<Country['description']>(null);
  states$: Observable<State[]>;
  stateValue = new FormControl<State['description']>(null);
  country!: Country;
  state!: State;

   constructor(private service: CountryService) {
    this.countries$ = this.countryValue.valueChanges.pipe(
      withLatestFrom(this.service.getCountries()), // Combine with latest list of countries
       // input is form control value of 'countryValue'
      // list is from the get api of this.service.getCountries()
      // felt I should add switchMap to prevent data leaks etc
      // But that may already be done with withLatestFrom so could be unneeded
      switchMap(([input, list]) =>
        of(list).pipe(
           // toLowerCase allows for case insensitive search
          // If the substring is not found, it returns -1
          map((countryList: Country[]) =>
            countryList.filter(
              (c: Country) =>
                c.description
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) !== -1)
          ) 
        )
      )
    );
  }
  

  updateStates(country: Country) {
    this.country = country;
    this.states$ = this.service.getStatesFor(country.id);
  }
}
