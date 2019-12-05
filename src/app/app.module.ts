import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import {HttpClientModule} from '@angular/common/http';
import {Solution1Component} from './solution/solution1/solution1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Solution2Component } from './solution/solution2/solution2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { Solution3Component } from './solution/solution3/solution3.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HighlightPipe } from './solution/solution3/highlight.pipe';
import { Exercise4Component } from './exercise4/exercise4.component';
import {Solution4Component} from './solution/solution4/solution4.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Exercise5Component } from './exercise5/exercise5.component';
import { Solution5Component } from './solution/solution5/solution5.component';
import { AutofilterDropdownComponent } from './solution/solution5/autofilter-dropdown/autofilter-dropdown.component';
import { Solution6Component } from './solution/solution6/solution6.component';
import { StateButtonDirective } from './solution/solution6/state-button.directive';
import { Exercise6Component } from './exercise6/exercise6.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component, Solution1Component, Exercise2Component, Solution2Component, Exercise3Component, Solution3Component, HighlightPipe,
    Exercise4Component, Solution4Component, MainPageComponent, Exercise5Component, Solution5Component, AutofilterDropdownComponent, Solution6Component, StateButtonDirective, Exercise6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
