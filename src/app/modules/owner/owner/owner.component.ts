import { Component } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  displayedColumns: string[] = ['Usuario', 'Correo', 'Acciones'];
  dataSource = ELEMENT_DATA;
}
export interface ownerElement {
  nameUser: string;
  email: string;
  password: string;
}


const ELEMENT_DATA: ownerElement[] = [
  {nameUser: 'a', email: 'Hydrogen', password: '1.0079'},
  {nameUser: 'b', email: 'Helium', password: '4.0026'},
];
