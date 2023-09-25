import { Component } from '@angular/core';
import {Observable, timer} from 'rxjs';
import {StateDirective} from'./state.directive';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css']
})
export class Exercise6Component  {
  action$: Observable<0> = timer(2000);
  textState: string = 'Save';
  textChanged(text: string): void {
    console.log('joker', text)
    this.textState = text;
  }
}

