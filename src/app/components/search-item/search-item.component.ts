import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  constructor() {}
  @Input() result: ISearchItem;
  public publicationDate: string = '';

  ngOnInit(): void {
    this.publicationDate = this.result.snippet.publishedAt;
  }
}
