import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import './../rx-js.extensions';
import { APP_CONFIG, AppConfig } from './../app/app.config';

import { SpotifyArtistSearchResponse, SpotifyTopTracksSearchResponse, SpotifyArtistModel } from './spotify.artist.model';

@Injectable()
export class SpotifyService {
    private spotifyUrl: string;

    constructor(private http: Http, @Inject(APP_CONFIG) private appConfig: AppConfig) {
        this.spotifyUrl = this.appConfig.spotifyUrl;
    }

    public getSpotifyArtistIdByName(name: string): Observable<SpotifyArtistSearchResponse> {
        let uri = this.spotifyUrl + "search?q=" + name + "&type=artist"
        let getResponseObservable = this.http.get(uri)
            .map((r: Response) => {
                return r.json() as SpotifyArtistSearchResponse
            });
        return getResponseObservable;
    }
    public getTopTrackForArtist(id: string) {
        let url = this.spotifyUrl + "artists/" + id + "/top-tracks?country=US";
        return this.http.get(url).map((r: Response) => {
            return r.json() as SpotifyTopTracksSearchResponse;
        });

    }
    public getArtist(id: string) {
        let url = this.spotifyUrl + "artists/" + id;
        return this.http.get(url).map((r: Response) => {
            return r.json() as SpotifyArtistModel;
        });

    }
}