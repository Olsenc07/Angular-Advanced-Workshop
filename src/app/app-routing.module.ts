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
import {MainPageComponent} from './main-page/main-page.component';
import {Exercise5Component} from './exercise5/exercise5.component';
import {Solution5Component} from './solution/solution5/solution5.component';
import {Solution6Component} from './solution/solution6/solution6.component';
import {Exercise6Component} from './exercise6/exercise6.component';
import {Solution7Component} from './solution/solution7/solution7.component';
import {Exercise7Component} from './exercise7/exercise7.component';



const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'exercise1', component: Exercise1Component},
  {path: 'exercise2', component: Exercise2Component},
  {path: 'exercise3', component: Exercise3Component},
  {path: 'exercise4', component: Exercise4Component},
  {path: 'exercise5', component: Exercise5Component},
  {path: 'exercise6', component: Exercise6Component},
  {path: 'exercise7', component: Exercise7Component},
  { path: 'solution',
    children : [
      {path: '1', component: Solution1Component},
      {path: '2', component: Solution2Component},
      {path: '3', component: Solution3Component},
      {path: '4', component: Solution4Component},
      {path: '5', component: Solution5Component},
      {path: '6', component: Solution6Component},
      {path: '7', component: Solution7Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
