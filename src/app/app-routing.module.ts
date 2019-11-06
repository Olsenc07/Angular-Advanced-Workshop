import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Exercise1Component} from './exercise1/exercise1.component';
import {Solution1Component} from './solution/solution1/solution1.component';
import {Exercise2Component} from './exercise2/exercise2.component';
import {Solution2Component} from './solution/solution2/solution2.component';
import {Exercise3Component} from './exercise3/exercise3.component';
import {Solution3Component} from './solution/solution3/solution3.component';
import {Exercise4Component} from './exercise4/exercise4.component';
import {Solution4Component} from './solution/solution4/solution4.component';



const routes: Routes = [
  {path: 'exercise1', component: Exercise1Component},
  {path: 'exercise2', component: Exercise2Component},
  {path: 'exercise3', component: Exercise3Component},
  {path: 'exercise4', component: Exercise4Component},
  { path: 'solution',
    children : [
      {path: '1', component: Solution1Component},
      {path: '2', component: Solution2Component},
      {path: '3', component: Solution3Component},
      {path: '4', component: Solution4Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
