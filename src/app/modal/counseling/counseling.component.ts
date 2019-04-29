import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class CounselingComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) {
  }
  openLg(counseling) {
    this.modalService.open(counseling, { size: 'lg' });
  }

  ngOnInit() {
  }

}
