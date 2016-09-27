import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import {App} from './app.component';
import {ArtistsComponent} from './artists.component';
import {SpotifyPlayerComponent} from './spotify/spotify-player.component';
import {ArtistDetailComponent} from './artist-detail.component';
//Providers
import {SpotifyService} from './spotify/spotify.service';
import {ArtistsService} from './artists.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [App, ArtistsComponent, ArtistDetailComponent, SpotifyPlayerComponent],
  providers: [SpotifyService, ArtistsService],
  bootstrap: [App]
})
export class AppModule { }