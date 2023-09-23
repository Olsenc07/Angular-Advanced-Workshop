import { Component, EventEmitter, Input, Output } from '@angular/core';
import {combineLatest, Observable, of, Subject} from 'rxjs';
import type {Country, State} from '../types';
import {FormControl} from '@angular/forms';
import {CountryService} from '../country.service';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-reusable-filter-dropdown',
  templateUrl: './reusable-filter-dropdown.component.html',
  styleUrls: ['./reusable-filter-dropdown.component.css']
})
export class ReusableFilterDropdownComponent {
  input = new FormControl('');
  inputs$: Observable<Country[] | State[]>;

  state: State;
  // From parent
  @Input() List$!: Observable<Country[] | State[]>;
  // filter these states when typing to filter state list
  @Input() select: State[]
  @Input() placeholder: string;
  // Child to Parent
  @Output() selected: EventEmitter<any> = new EventEmitter<any>()


  constructor(private service: CountryService) {

  // this.countries$ = combineLatest([this.countryControl.valueChanges, this.service.getCountries()]).pipe(
  //   map(([userInput, countries]) => countries.filter(c => c.description.toLowerCase().indexOf(userInput.toLowerCase()) !== -1))
  // );
  // this.statesForCountry$ = this.currentCountry$.asObservable().pipe(
  //   tap(console.log),
  //   switchMap(cntry => this.service.getStatesFor(cntry.id))
  // );
  // this.states$ = combineLatest([this.stateControl.valueChanges, this.statesForCountry$]).pipe(
  //   map(([userInput, states]) => states.filter(c => c.description.toLowerCase().indexOf(userInput.toLowerCase()) !== -1))
  // );
  }
  ngOnInit() {
    // assign inputs$ from parent import
    this.inputs$ = combineLatest([this.input.valueChanges.pipe(debounceTime(500), distinctUntilChanged(),
      this.List$)]).pipe(
        map(([input, options]) =>
        options.filter((option: Country | State) =>
          option.description.toLowerCase().indexOf(input.toLowerCase()) !== -1
        )
      )
       )
  }

  updateChoice(country: Country) {
    this.countryControl.setValue(country.description);
    this.stateControl.setValue('');
    this.currentCountry$.next(country);
  }

}
