import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

closeResult: string;
constructor(private modalService: NgbModal) {
}
openLg(cat) {
  this.modalService.open(cat, { size: 'lg' });
}

ngOnInit() {
}

}
