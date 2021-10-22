import { Component } from '@angular/core';
import { DateService } from './date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any;
  constructor(private readonly dateService: DateService) {
    this.dateService.getDate().subscribe(
      (response) => { this.date = response; console.log(response); },
      (error) => { console.log(error); }
    ); //`Year: ${response.year}, Month: ${response.month}, Day: ${response.day}`;
  }
}
