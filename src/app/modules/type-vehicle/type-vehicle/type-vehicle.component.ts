import { Component } from '@angular/core';

@Component({
  selector: 'app-type-vehicle',
  templateUrl: './type-vehicle.component.html',
  styleUrls: ['./type-vehicle.component.css']
})
export class TypeVehicleComponent {
  displayedColumns: string[] = ['Tipo de vehiculo', 'Acciones'];
  dataSource = ELEMENT_DATA;
}
export interface typeVehicleElement {
  nameType: string;
}


const ELEMENT_DATA: typeVehicleElement[] = [
  {nameType: 'a'},
  {nameType: 'b'},
];

