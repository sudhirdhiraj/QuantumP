import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.css']
})
export class GateComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {

  }

  openLg(gate) {
    this.modalService.open(gate, { size: 'lg' });
  }

  ngOnInit() {
  }

}
