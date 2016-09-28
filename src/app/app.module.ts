import {Component, NgModule, OpaqueToken} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {App} from './app.component';
import {APP_CONFIG, APP_DI_CONFIG} from './app.config';
import {ArtistsComponent} from './../artists/artists.component';
import {ArtistDetailComponent} from './../artists/artist-detail.component';
import {ArtistsService} from './../artists/artists.service';

import {SpotifyArtistInfoComponent} from './../spotify/spotify-artist-info.component';
import {SpotifyPlayerComponent} from './../spotify/spotify-player.component';
import {SpotifyService} from './../spotify/spotify.service';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [App, ArtistsComponent, ArtistDetailComponent, SpotifyPlayerComponent, SpotifyArtistInfoComponent],
  providers: [SpotifyService, ArtistsService, {provide:APP_CONFIG, useValue: APP_DI_CONFIG}],
  bootstrap: [App]
})
export class AppModule { }

