import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapLoaderService } from '../services/map-loader.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.loader.loadMap().then( res => {

      var mapEl = document.getElementById('map');
      
      var map = new Microsoft.Maps.Map(mapEl,{});
    })
  }


  constructor(private loader:MapLoaderService) { }

  ngOnInit() {
  }

}
