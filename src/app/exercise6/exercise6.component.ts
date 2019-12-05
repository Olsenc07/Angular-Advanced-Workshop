import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css']
})
export class Exercise6Component  {

  action$ = timer(2000);


}

