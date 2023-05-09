import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  textSearch: Subject<string>;

  constructor() {
    this.textSearch = new Subject<string>();
  }

  setTextSearch(data: string) {
    this.textSearch.next(data);
  }

  getTextSearch() {
    return this.textSearch.asObservable();
  }
}
