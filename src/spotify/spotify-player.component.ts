import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ArtistInfo} from './../artist-info'
import {SpotifyService} from './spotify.service';
import {SpotifyTopTracksSearchResponse, SpotifyTrack} from './spotify.artist.model';

@Component({
    selector: 'spotify-player',
    templateUrl: 'src/spotify/spotify-player.component.html'
})
export class SpotifyPlayerComponent {
    constructor(private spotifyService: SpotifyService) {

    }
    @Output()
    public playerClosed = new EventEmitter<boolean>();

    @Input()
    set artistInfo(artistInfo: ArtistInfo) {
        this._artistInfo = artistInfo;
        this.start();
    };
    private _artistInfo: ArtistInfo;
    topTrack: SpotifyTrack;
    public start() {
        this.spotifyService.getSpotifyArtistIdByName(this._artistInfo.name).subscribe(info => {
            this.spotifyService.getTopTrackForArtist(info.artists.items[0].id).subscribe(val => {
                if (val.tracks && val.tracks.length > 0) {
                    this.topTrack = val.tracks[0];
                }
            });
        });

    }
    public getAudioUrl() {
        return this.topTrack.preview_url;
    }
    public closePlayer() {
        this.topTrack = null;
        this.playerClosed.emit(true);
    }
}   
