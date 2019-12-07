import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-solution7',
  templateUrl: './solution7.component.html',
  styleUrls: ['./solution7.component.css']
})
export class Solution7Component {

  action$ = timer(2000);

}
