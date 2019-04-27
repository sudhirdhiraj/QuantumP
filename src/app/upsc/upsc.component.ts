import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upsc',
  templateUrl: './upsc.component.html',
  styleUrls: ['./upsc.component.css']
})
export class UpscComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {
   
  }

openLg(upsc) {
    this.modalService.open(upsc, { size: 'lg' });
  }


  ngOnInit() {
  }

}
