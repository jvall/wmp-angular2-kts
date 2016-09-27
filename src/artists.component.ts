import {Component, OnInit} from '@angular/core';
import {ArtistInfo} from './artist-info'
import {SpotifyArtistModel} from './spotify/spotify.artist.model';
import {ArtistsService} from './artists.service';

@Component({
    selector: 'artists',
    templateUrl: 'src/artists.component.html'
})
export class ArtistsComponent implements OnInit {
    constructor(private artistsService: ArtistsService) {

    }
    public ngOnInit() {
        this.getArtists();
    }
    artists: ArtistInfo[];
    showDetail: boolean = false;
    private mode: string;
    selectedArtist: ArtistInfo = null;
    playingArtist: ArtistInfo = null;

    public getArtists() {
        this.artistsService.getArtists().subscribe((artists) => {
            this.artists = artists;
        });
    }

    public addArtist() {
        this.selectedArtist = new ArtistInfo();
        this.mode = "add";
        this.showDetails();
    }
    public editMode(artist) {
        this.selectedArtist = artist;
        this.showDetails();
        this.mode = "edit";
        console.log('editing...');
    }
    public onSaved(event: SpotifyArtistModel) {
        console.log('onSaved');
        if (this.mode === "add") {
            this.artists.push(this.selectedArtist);
            this.artistsService.createArtist(this.selectedArtist).subscribe(res => {
                console.log("saved");
            });
        }else{
            this.artistsService.updateArtist(this.selectedArtist.id, this.selectedArtist).subscribe(res => {
                  console.log("saved");
            });
        }
        this.resetMode();
    }
    public onCanceled() {
        this.resetMode();
    }
    private resetMode() {
        this.selectedArtist = null;
        this.mode = null;
    }
    public delete(id) {
        this.artistsService.deleteArtist(id).subscribe(res => console.log('deleted'));
        this.artists = this.artists.filter((artist) => {
            return artist.id !== id;
        });
        console.log('deleted...');
    }

    public play(artist) {
        this.playingArtist = artist;
    }
    public closePlayer(event: boolean) {
        this.playingArtist = null;
    }

    private showDetails() {
        this.showDetail = true;
    }
    private hideDetails() {
        this.showDetail = false;
    }
}

