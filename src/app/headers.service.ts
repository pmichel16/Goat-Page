import { Injectable } from '@angular/core';
import { HEADERS } from './headers';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor() { }

  getHeaders(): Map<string, Array<string>> {
    return HEADERS;
  }
}
