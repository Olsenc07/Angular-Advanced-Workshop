import { Component } from '@angular/core';
import {CountryService} from './country.service';
import {Observable} from 'rxjs';
import {Country} from './types';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.css']
})
export class Solution1Component {

  countries$: Observable<Country[]> = this.service.getCountries();
  country: string;

  constructor(private service: CountryService) { }

}
