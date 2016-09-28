import {OpaqueToken} from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');
export interface AppConfig {
  spotifyUrl: string;
  apiUrl: string;
}
export const APP_DI_CONFIG: AppConfig = {
  spotifyUrl: 'https://api.spotify.com/v1/',
  apiUrl: 'http://angulardotnetch22.azurewebsites.net/'
};
