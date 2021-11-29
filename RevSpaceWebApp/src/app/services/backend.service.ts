import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  /**
   * @returns The URL of the backend api
   */
  public getBackendURL():string
  {
    return environment.backendURL;
  }
}
