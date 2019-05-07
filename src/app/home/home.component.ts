import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header = {
    headings: '"How we help you to achieve your goals and career"',
    headingtext: 'Offline and online mode of learning, according to time and flexibility of student to provide ease of learning to deliver a quality of the result.',
  };

  constructor() { }

  ngOnInit() {
  }

}
