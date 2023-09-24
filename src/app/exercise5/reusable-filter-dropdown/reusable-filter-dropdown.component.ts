import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {combineLatest, Observable, of, Subject} from 'rxjs';
import type {CombinedOption} from '../types';
import {FormControl} from '@angular/forms';
import {CountryService} from '../country.service';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-reusable-filter-dropdown',
  templateUrl: './reusable-filter-dropdown.component.html',
  styleUrls: ['./reusable-filter-dropdown.component.css']
})
// generics in ts
// Generic Type Parameter <T extends CombinedOption>:
// This is a generic type parameter declaration. 
// It allows you to create functions or components that can work with different types of objects as long as those types extend or match the structure defined in the CombinedOption interface.
// For example, you can use this generic type parameter to create a function that operates 
// on objects with a description property, whether those objects are of type Country, State, or any other type that matches the structure defined in CombinedOption. Here's an example of how you might use it:
export class ReusableFilterDropdownComponent<T extends CombinedOption> implements OnInit{
  input = new FormControl<string>('');
  inputs$: Observable<T[]>;

  // From parent
  @Input() List$: Observable<T[]>;
  // connected from [(selected)]="states" 
  @Input() set selected(value: T){
  if (value) {
    this.input.setValue(value.description);
  } else {
    this.input.setValue('');
  }
}
  @Input() placeholder: string;
  // Child to Parent
  @Output() selectedChange: EventEmitter<T> = new EventEmitter<T>();


  ngOnInit() {
    // assign inputs$ from parent import
    this.inputs$ = combineLatest([
      this.input.valueChanges.pipe(debounceTime(500), distinctUntilChanged()),
      this.List$]).pipe(
        map(([input, options]) =>
        options.filter((option: T) =>
          option.description.toLowerCase().indexOf(input.toLowerCase()) !== -1
        )
      )
       )
  }

  update(list: T) {
    this.input.setValue(list.description);
    this.selectedChange.emit(list);
  }

}
