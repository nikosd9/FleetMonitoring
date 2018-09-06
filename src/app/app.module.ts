/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import {BingMapsLoader} from './services/map-loader.service';
import { MapComponent } from './map/map.component';
import { NavHeaderComponent } from './nav-header/nav-header.component'
=======
import { BingMapsLoader } from './services/map-loader.service';
>>>>>>> 27036566f6f5e83301cf3a0408549c73d2330775

@NgModule({ 
  declarations: [
    AppComponent,
    MapComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BingMapsLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
