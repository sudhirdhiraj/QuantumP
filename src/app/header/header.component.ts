import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header ={
    headings:'How QunatumP works and beneficial for career',
    headingtext:'Individual metaphorical journey through learning, work and other aspects of knowledge. ',
    buttontext:'do some action',
    //buttonlink:'\home'
  };

  constructor() { }

  ngOnInit() {
  }

}
