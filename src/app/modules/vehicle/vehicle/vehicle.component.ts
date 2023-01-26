import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  displayedColumns: string[] = ['Nombre', 'Modelo', 'Marca', 'Color', 'Acciones'];
  dataSource = ELEMENT_DATA
}

export interface VehiclesData {
  name: string;
  model: Date;
  brand: string;
  color: string;
}

const ELEMENT_DATA: VehiclesData[] = [
  {name: 'Twingo', model: new Date('12/15/2020'), brand: 'Renault', color: 'nigga'},
  {name: 'Twingo', model: new Date('12/15/2020'), brand: 'Renault', color: 'nigga'},
  {name: 'Twingo', model: new Date('12/15/2020'), brand: 'Renault', color: 'nigga'},
];

