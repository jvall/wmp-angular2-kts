import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ArtistInfo} from './artist-info';


@Component({
    selector: 'artists-list',
    templateUrl: 'src/artists/artists-list.component.html'
})
export class ArtistsListComponent implements OnInit {
    constructor() { }

    public playingArtist: ArtistInfo;
    public selectedArtist: ArtistInfo;

    @Input()
    public artists: ArtistInfo[];
    @Output()
    public deleteClicked = new EventEmitter<number>();
    @Output()
    editClicked = new EventEmitter<ArtistInfo>();

    ngOnInit() { }

    public play(artist) {
        this.playingArtist = artist;
    }
    public edit(artist) {
        this.selectedArtist = artist;
        this.editClicked.emit(artist);
    }
    public delete(id) {
        this.deleteClicked.emit(id);
    }
}
