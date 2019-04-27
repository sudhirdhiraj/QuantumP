import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-iitjee',
  templateUrl: './iitjee.component.html',
  styleUrls: ['./iitjee.component.css']
})
export class IitjeeComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(iitjee) {
    this.modalService.open(iitjee, { size: 'lg' });
  }

  ngOnInit() {
  }

}
