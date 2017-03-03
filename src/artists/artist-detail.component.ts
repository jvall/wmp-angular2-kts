import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from './../spotify/spotify.service';
import { SpotifyArtistSearchResponse, SpotifyArtistModel } from './../spotify/spotify.artist.model';
import { ArtistInfo } from './artist-info';

@Component({
    selector: 'artist-detail',
    templateUrl: 'src/artists/artist-detail.component.html',
    styleUrls: ['src/artists/artist-detail.component.css']
})
export class ArtistDetailComponent {
    constructor(private spotifyService: SpotifyService) {
    }

    @Input()
    public set model(artistInfo: ArtistInfo) {
        this._model = artistInfo;
        if (artistInfo !== null && artistInfo.id) {
            // this.spotifyService.getArtist(artistInfo.id).subscribe((val) => {
            //     this.selectedArtist = val;
            // });
            this.selectArtist();
        } else {
            this.selectedArtist = null;
        }
    }
    public get model() {
        return this._model;
    }

    private _model: ArtistInfo;
    public artistsNotFound: boolean = false;

    @Output()
    public onSaved = new EventEmitter<SpotifyArtistModel>();
    @Output()
    public onCanceled = new EventEmitter();

    public spotifySearchResult: SpotifyArtistSearchResponse;
    public selectedArtist: SpotifyArtistModel;

    public add() {
        this.model = new ArtistInfo();
    }
    public onSave() {
        this.model.name = this.selectedArtist.name;
        this.onSaved.emit(this.selectedArtist);
    }
    public onCancel() {
        this.onCanceled.emit();
    }
    public selectArtist() {
        this.artistsNotFound = false;
        let query = this.spotifyService.getSpotifyArtistIdByName(this.model.name);
        query.subscribe((val: SpotifyArtistSearchResponse) => {
            this.spotifySearchResult = val;
            this.setSelectedArtist();
        });
    }
    private setSelectedArtist() {
        if (this.spotifySearchResult && this.spotifySearchResult.artists && this.spotifySearchResult.artists.total > 0) {
            this.selectedArtist = this.spotifySearchResult.artists.items[0];

        } else {
            this.selectedArtist = null;
            this.artistsNotFound = true;
        }
    }
}
