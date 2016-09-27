export interface SpotifyArtistSearchResponse {
    artists: SpotifyArtists;

}
export interface SpotifyTopTracksSearchResponse {
    tracks: SpotifyTrack[];

}
export interface SpotifyTrack {
    artists;
    available_markets;
    disc_number;
    duration_ms;
    explicit;
    external_urls;
    href;
    id;
    is_playable;
    linked_from;
    name;
    preview_url;
    track_number;
    type;
    uri;
}
export interface SpotifyArtists {
    href: string;
    limit: number;
    next: number;
    offset: number;
    previous: number;
    total: number;
    items: SpotifyArtistModel[];
}
export interface SpotifyArtistModel {
    id: string,
    name: string,
    href: string,
    type: string,
    external_urls: string,
    uri: string

}