import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISearchResponse } from '../models/search-response.model';
import response from './../mockups/response';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  // myMethod$: Observable<any>;
  public response: ISearchResponse = response;
  public myMethodSubject = new Subject<any>();

  constructor() {
    // this.myMethod$ = this.myMethodSubject.asObservable();
  }

  saveInput(data: string) {
    this.myMethodSubject.next(data);
  }
}
