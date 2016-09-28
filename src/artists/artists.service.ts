import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import './../rx-js.extensions';
import {ArtistInfo} from './artist-info';

@Injectable()
export class ArtistsService {
    private apiUrl: string = 'http://angulardotnetch22.azurewebsites.net/';
    constructor(private http: Http) {

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