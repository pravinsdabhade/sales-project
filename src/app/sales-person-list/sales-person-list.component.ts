import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of object.
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Ram","Sundar"),
    new SalesPerson("Sham","Varma"),
    new SalesPerson("Yusuf","Khan"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
