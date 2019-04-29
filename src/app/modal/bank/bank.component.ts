import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal) {
  }
  openLg(aiml) {
    this.modalService.open(aiml, { size: 'lg' });
  }

  ngOnInit() {
  }

}
