import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) {
  }
  openLg(springboot) {
    this.modalService.open(springboot, { size: 'lg' });
  }

  ngOnInit() {
  }

}
