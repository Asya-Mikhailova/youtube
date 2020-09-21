import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoImagePath: string = '../../assets/logo.png';
  public loginImagePath: string = '../../assets/login.png';
  public isFilterOn: boolean = false;

  @Output() public showResults = new EventEmitter<boolean>();
  public searchInput: string;

  public constructor(private youtubeService: YoutubeService) {
    this.youtubeService.saveInput(this.searchInput);
  }

  ngOnInit() {}

  onFilterToggle() {
    this.isFilterOn = !this.isFilterOn;
  }

  onShowingResults(answer: boolean) {
    this.showResults.emit(answer);
  }
}
