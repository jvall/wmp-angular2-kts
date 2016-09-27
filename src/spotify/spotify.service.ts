import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import './../rx-js.extensions';

import {SpotifyArtistSearchResponse, SpotifyTopTracksSearchResponse, SpotifyArtistModel} from './spotify.artist.model';

@Injectable()
export class SpotifyService {
    private spotifyUrl: string = "https://api.spotify.com/v1/";
    constructor(private http: Http) {

    }

    public getSpotifyArtistIdByName(name: string): Observable<SpotifyArtistSearchResponse> {
        var uri = this.spotifyUrl + "search?q=" + name + "&type=artist"
        var getResponseObservable = this.http.get(uri)
            .map((r: Response) => {
                console.log(r);
                return r.json() as SpotifyArtistSearchResponse
            }
            );
        return getResponseObservable;
    }
    public getTopTrackForArtist(id: string) {
        var url = this.spotifyUrl + "artists/" + id + "/top-tracks?country=US";
        return this.http.get(url).map((r: Response) => {
            return r.json() as SpotifyTopTracksSearchResponse;
        });        

    }
        public getArtist(id: string) {
        var url = this.spotifyUrl + "artists/" + id;
        return this.http.get(url).map((r: Response) => {
            return r.json() as SpotifyArtistModel;
        });        

    }
}