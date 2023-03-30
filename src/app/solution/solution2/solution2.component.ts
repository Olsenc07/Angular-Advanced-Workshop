import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Country, State} from './types';
import {CountryService} from './country.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component {

  countries$: Observable<Country[]> = this.service.getCountries();
  states$: Observable<State[]>;
  countryDropdown = new FormControl<Country['id']>(null);
  statesDropdown = new FormControl<State['code']>(null);

  constructor(private service: CountryService) { }

  updateStates(countryId: string) {
    this.statesDropdown.setValue("");
    this.states$ = this.service.getStatesFor(countryId);
  }
}
