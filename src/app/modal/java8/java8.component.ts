import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-java8',
  templateUrl: './java8.component.html',
  styleUrls: ['./java8.component.css']
})
export class Java8Component implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(java8) {
    this.modalService.open(java8, { size: 'lg' });
  }

  ngOnInit() {
  }

}
