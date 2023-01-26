import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  displayedColumns: string[] = ['Marca', 'Acciones'];
  dataSource = ELEMENT_DATA;
}
export interface brandElement {
  nameBrand: string;
}


const ELEMENT_DATA: brandElement[] = [
  {nameBrand: 'a'},
  {nameBrand: 'b'},
];

