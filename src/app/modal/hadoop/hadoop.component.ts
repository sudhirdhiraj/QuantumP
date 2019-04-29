import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hadoop',
  templateUrl: './hadoop.component.html',
  styleUrls: ['./hadoop.component.css']
})
export class HadoopComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) {
  }
  openLg(hadoop) {
    this.modalService.open(hadoop, { size: 'lg' });
  }

  ngOnInit() {
  }

}
