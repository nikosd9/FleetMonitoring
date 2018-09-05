/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BingMapsLoader} from './services/map-loader.service';
import { MapComponent } from './map/map.component'

@NgModule({ 
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BingMapsLoader],
  bootstrap: [AppComponent]
})
export class AppModule { }
