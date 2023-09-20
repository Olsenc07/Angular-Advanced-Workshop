import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountrySelectionService } from './country-selection.service';
import { type Country } from './country-list.interface';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit, OnDestroy {
countries: Country[] = [];
countryChoice: FormControl<string | null> = new FormControl<string | null>(null);
countryAmount: number;
countrySub$: Subscription;
  constructor(private countrySelectionService: CountrySelectionService) { }

  ngOnInit(): void {
    this.countries = [];
    // request country list
  this.countrySub$ = this.countrySelectionService.getCountryList()
   .subscribe((data: Country[]) => {
    this.countryAmount = data.length;
    this.countries = data;
   })
  }

  ngOnDestroy(): void {
    this.countrySub$?.unsubscribe();
  }

}

