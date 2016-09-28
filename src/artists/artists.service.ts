import {Injectable, Inject} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import './../rx-js.extensions';
import {APP_CONFIG, AppConfig} from './../app/app.config';

import {ArtistInfo} from './artist-info';

@Injectable()
export class ArtistsService {
    private apiUrl: string;
    constructor(private http: Http, @Inject(APP_CONFIG)private appConfig:AppConfig) {
        this.apiUrl = this.appConfig.apiUrl;
    }
    public getArtists(): Observable<ArtistInfo[]> {
        return this.http.get(this.apiUrl + "api/artists").map(r => r.json() as ArtistInfo[]);
    };

    public createArtist(data): Observable<ArtistInfo> {
        return this.http.post(this.apiUrl + "api/artists", data).map(val => val.json() as ArtistInfo);
    };

    public updateArtist(id, data) {
        return this.http.put(this.apiUrl + "api/artists/" + id, data).map(val => val).catch(console.log);
    };

    public deleteArtist(id) {
        return this.http.delete(this.apiUrl + "api/artists/" + id).map(val => val).catch(console.log);;
    };
}