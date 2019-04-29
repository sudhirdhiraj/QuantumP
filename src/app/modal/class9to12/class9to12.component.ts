import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class9to12',
  templateUrl: './class9to12.component.html',
  styleUrls: ['./class9to12.component.css']
})
export class Class9to12Component implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(class912) {
    this.modalService.open(class912, { size: 'lg' });
  }

  ngOnInit() {
  }

}
