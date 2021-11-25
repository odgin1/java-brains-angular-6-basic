import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  currentDate: string;
  today: Date;
  date: string;
  time: string;

  constructor() {
    setInterval(() => {
      this.today = new Date();
      this.date =
        this.today.getFullYear() +
        '-' +
        (this.today.getMonth() + 1) +
        '-' +
        this.today.getDate();
      this.time =
        this.today.getHours() +
        ':' +
        this.today.getMinutes() +
        ':' +
        this.today.getSeconds();
      this.currentDate = this.date + ' ' + this.time;
    }, 1000);
  }

  ngOnInit() {}
}
