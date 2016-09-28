import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {App} from './app.component';

import {ArtistsComponent} from './../artists/artists.component';
import {ArtistDetailComponent} from './../artists/artist-detail.component';
import {ArtistsService} from './../artists/artists.service';

import {SpotifyPlayerComponent} from './../spotify/spotify-player.component';
import {SpotifyService} from './../spotify/spotify.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [App, ArtistsComponent, ArtistDetailComponent, SpotifyPlayerComponent],
  providers: [SpotifyService, ArtistsService],
  bootstrap: [App]
})
export class AppModule { }