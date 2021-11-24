import { Injectable } from '@angular/core';

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
    return "http://localhost:8080";
  }
}
