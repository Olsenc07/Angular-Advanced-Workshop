import { Component } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-solution6',
  templateUrl: './solution6.component.html',
  styleUrls: ['./solution6.component.css']
})
export class Solution6Component {

  action$ = timer(2000);


}
