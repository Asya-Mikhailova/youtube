import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-task';
  public loadedResults: boolean = false;

  onDisplayResults(answer: boolean) {
    this.loadedResults = answer;
  }
}
