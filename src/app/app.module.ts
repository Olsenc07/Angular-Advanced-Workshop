import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import {HttpClientModule} from '@angular/common/http';
import {Solution1Component} from './solution/solution1/solution1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Solution2Component } from './solution/solution2/solution2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component, Solution1Component, Exercise2Component, Solution2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
