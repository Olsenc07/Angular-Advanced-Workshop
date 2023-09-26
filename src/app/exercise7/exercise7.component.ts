import { Component } from '@angular/core';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component {
  action$: Observable<0> = timer(2000);

}
