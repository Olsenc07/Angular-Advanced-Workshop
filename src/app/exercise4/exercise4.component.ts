import { Component } from '@angular/core';
import {Observable, Subject, combineLatest, of} from 'rxjs';
import {Country, State} from './types';
import {FormControl} from '@angular/forms';
import {CountryService} from './country.service';
import {debounceTime, distinctUntilChanged, map, switchMap, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component {
  countryControl = new FormControl<string>('');
  countries$: Observable<Country[]>;
  // subject for action stream
  private countrySubject$ = new Subject<Country>();

  statesForCountry$: Observable<State[]>;
  stateValue = new FormControl<State['description']>(null);
  states$: Observable<State[]>;
  state: State;

// Caching Values: You can use Subjects to cache and share values from API requests. 
// When you make an API request, you can store the result in a Subject and emit it to subscribers. 
// Subsequent subscribers will receive the cached value instead of making a redundant API call.
//  Improper use of Subjects can lead to unexpected behavior, 
// so it's a good practice to pair them with the takeUntil operator or unsubscribe manually in Angular components to prevent memory leaks.
  constructor(private service: CountryService) {
    // changing country
    this.countries$ =  combineLatest([this.countryControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()),
      this.service.getCountries()]).pipe(
      switchMap(([input, list]) =>
      of(list).pipe(
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
   this.statesForCountry$ = this.countrySubject$.asObservable().pipe(
    switchMap(country => this.service.getStatesFor(country.id))
   )
  // need to filter this.states$ 
  this.states$ = combineLatest([this.stateValue.valueChanges.pipe(debounceTime(500), distinctUntilChanged()),
     this.statesForCountry$]).pipe(
      map(([input, states]) =>
      states.filter((state: State) =>
        state.description.toLowerCase().indexOf(input.toLowerCase()) !== -1
      )
    )
     )
  }
 
  setValue(description: string): void{
    this.stateValue.setValue(description);
  }
  updateStates(country: Country): void {
    this.countryControl.setValue(country.description);
    this.stateValue.setValue('');
    this.countrySubject$.next(country);
  }
}
