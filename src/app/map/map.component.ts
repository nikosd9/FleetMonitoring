import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapLoaderService } from '../services/map-loader.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElement:ElementRef
  map:any

  constructor(private mapLoader:MapLoaderService) { }
  
  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.mapLoader.loadMap().then(res => this.initMap())
  }

  initMap(){
    this.map = new Microsoft.Maps.Map(this.mapElement.nativeElement,{})
  }
}
