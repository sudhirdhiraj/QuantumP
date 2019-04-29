import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {  

closeResult: string;
  constructor(private modalService: NgbModal) {   
  }
openLg(testing) {
    this.modalService.open(testing, { size: 'lg' });
  }

  ngOnInit() {
  }

}
