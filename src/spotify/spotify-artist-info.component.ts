import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ArtistInfo} from './../artists/artist-info'
import {SpotifyService} from './spotify.service';
import {SpotifyArtistModel} from './spotify.artist.model';

@Component({
    selector: 'spotify-artist-info',
    templateUrl: 'src/spotify/spotify-artist-info.component.html'
})
export class SpotifyArtistInfoComponent {
    constructor(private spotifyService: SpotifyService) {

    }
    @Input()
    set artistInfo(artistInfo: ArtistInfo) {
        this._artistInfo = artistInfo;
        this.start();
    };
    private _artistInfo: ArtistInfo;
    spotifyArtist:SpotifyArtistModel;
    public start() {
        this.spotifyService.getSpotifyArtistIdByName(this._artistInfo.name).subscribe(info => {
            this.spotifyArtist = info.artists.items[0];
        });

    }
 
}   
