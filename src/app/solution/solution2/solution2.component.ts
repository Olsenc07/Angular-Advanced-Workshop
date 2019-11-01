import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Country} from './types';
import {CountryService} from './country.service';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component {

  countries$: Observable<Country[]> = this.service.getCountries();

  constructor(private service: CountryService) { }

}
