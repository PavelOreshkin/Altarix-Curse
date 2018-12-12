import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngApp';
  list: Date[] = [new Date(2018, 11, 11), new Date(2018, 11, 12), new Date(2018, 11, 13)]
}
