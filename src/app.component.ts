//our root app component
import {Component} from '@angular/core'
import {ArtistInfo} from './artist-info';
@Component({
  selector: 'wmp-spotify-angular2',
  templateUrl: 'src/app.component.html',
})
export class App {
  name:string;
 
  constructor() {
    this.name = 'WMP Spotify Angular2 Demo'
  }
}