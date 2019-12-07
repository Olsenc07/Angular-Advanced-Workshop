import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css']
})
export class Exercise7Component {

  action$ = timer(2000);

}
