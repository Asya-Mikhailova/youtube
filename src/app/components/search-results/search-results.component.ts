import { Component, Input, OnInit } from '@angular/core';
import response from '../../mockups/response';
import { ISearchItem } from 'src/app/models/search-item.model';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public results: ISearchItem[] = response.items;
  public searchInput: string;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.myMethodSubject.subscribe((data) => {
      this.searchInput = data;
    });
  }
}
