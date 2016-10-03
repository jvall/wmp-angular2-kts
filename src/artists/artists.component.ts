import {Component, OnInit, ViewChild} from '@angular/core';
import {ArtistInfo} from './artist-info'
import {SpotifyArtistModel} from './../spotify/spotify.artist.model';
import {ArtistsService} from './artists.service';
import {ArtistsListComponent} from  './artists-list.component';

@Component({
    selector: 'artists',
    templateUrl: 'src/artists/artists.component.html',
})
export class ArtistsComponent implements OnInit {
    constructor(private artistsService: ArtistsService) {

    }
    public ngOnInit() {
        this.getArtists();
    }
    
    @ViewChild(ArtistsListComponent)
    private artistsListComponent:ArtistsListComponent;

    
    artists: ArtistInfo[];
    private mode: string;

    playingArtist: ArtistInfo = null;

    

    public getArtists() {
        this.artistsService.getArtists().subscribe((artists) => {
            this.artists = artists;
        });
    }

   
    public onSaved(event: SpotifyArtistModel, artistInfo:ArtistInfo) {
        if (this.mode === "add") {
            let newArtist = artistInfo;
            this.artists.push(newArtist);
            this.artistsService.createArtist(newArtist).subscribe(res => {
                this.artists[this.artists.indexOf(newArtist)].id = res.id;
            });
        }else{
            this.artistsService.updateArtist(artistInfo.id, artistInfo).subscribe(res => {});
        }
        this.resetMode();
    }
    public onCanceled() {
        this.resetMode();
    }
    private resetMode() {
        this.artistsListComponent.selectedArtist = null;
        this.mode = null;
    }
    public add() {
        this.mode = "add";
        this.artistsListComponent.selectedArtist = new ArtistInfo();
    }
    public edit(artist:ArtistInfo){
        this.mode = "edit";        
    }
    public delete(id) {
        console.log('deleting...');
        this.artistsService.deleteArtist(id).subscribe(res => console.log('deleted'));
        this.artists = this.artists.filter((artist) => {
            return artist.id !== id;
        });
    }
}

