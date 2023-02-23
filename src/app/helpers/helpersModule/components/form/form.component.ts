import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() title: String = '';
  @Input() fields: string[] = [];
  data: any = {};
  @Input() edit: boolean = false;
  //mapa de mapas en donde vamos a asociar la key de label y type para definicion de campos
  @Input() mapData: Map<String, Map<String, any>> = new Map();
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.mapData);
  }
  cancelF() {
    this.cancel.emit();
  }
  //obtenemos del mapa de datos el campo de la etiqueta
  getLabelInput(field: string) {
    return this.mapData.get(field)!.get('label');
  }
  //obtenemos del mapa de datos el tipo
  getTypesInput(field: string) {
    return this.mapData.get(field)!.get('type');
  }
  submitF() {
    this.submit.emit(this.data);
  }
}
