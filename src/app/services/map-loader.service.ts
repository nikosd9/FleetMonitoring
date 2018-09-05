import { Injectable } from '@angular/core';



@Injectable({providedIn: 'root'})
export class BingMapsLoader implements IMapLoader {
  promise:Promise<any>

  load() {
    if (!this.promise) {
      this.promise = new Promise((resolve,reject) => {
        var _window = window as any;
        _window['MapLoaded'] = (event:any) => resolve('Map Loaded')
        try {``
          this.addMapScript();
        }
        catch{
          reject('Map loading failed')
        }
      })
    }
    return this.promise;
  }


  addMapScript() {
    var head = document.getElementsByTagName('head')[0];

    var scriptNode = document.createElement('script');
    scriptNode.type = "text/javascript";
    scriptNode.src = "https://www.bing.com/api/maps/mapcontrol?key=QSJ56V37iKKbwpEugBDc~Vl9Jy0hBTmdWDsVEeUAadQ~AjEJdhwpQsQqJ19C1DLE5zaww9I1Yl5D3TQuafKinpYoNEFanCI8s_hA-iK_BOHj&callback=MapLoaded"
  
    head.appendChild(scriptNode);
  }
}
export interface IMapLoader {
  load():any
}

@Injectable({
  providedIn: 'root',
  
})
export class MapLoaderService {
  constructor(public mapLoader:BingMapsLoader) { }

  loadMap() {  
    return this.mapLoader.load();
  }
}


