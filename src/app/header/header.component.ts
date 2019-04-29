import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header ={
    headings:'"How we help you to achieve your goals and career"',
    headingtext:'Offline and online mode of learning, according to time and flexibility of student to provide ease of learning to deliver a quality of the result.',
    
    // buttontext:'do some action',
    //buttonlink:'\home'
  };

  constructor() { }

  ngOnInit() {
  }

}
