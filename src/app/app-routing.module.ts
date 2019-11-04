import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Exercise1Component} from './exercise1/exercise1.component';
import {Solution1Component} from './solution/solution1/solution1.component';
import {Exercise2Component} from './exercise2/exercise2.component';
import {Solution2Component} from './solution/solution2/solution2.component';
import {Exercise3Component} from './exercise3/exercise3.component';



const routes: Routes = [
  {path: 'exercise1', component: Exercise1Component},
  {path: 'exercise2', component: Exercise2Component},
  {path: 'exercise3', component: Exercise3Component},
  { path: 'solution',
    children : [
      {path: '1', component: Solution1Component},
      {path: '2', component: Solution2Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
