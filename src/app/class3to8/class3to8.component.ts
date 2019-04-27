import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class3to8',
  templateUrl: './class3to8.component.html',
  styleUrls: ['./class3to8.component.css']
})
export class Class3to8Component implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(class38) {
    this.modalService.open(class38, { size: 'lg' });
  }

  ngOnInit() {
  }

}
