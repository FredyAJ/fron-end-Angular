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
  getLabelInput(field: string) {
    return this.mapData.get(field)!.get('label');
  }
  getTypesInput(field: string) {
    return this.mapData.get(field)!.get('type');
  }
  submitF() {
    this.submit.emit(this.data);
  }
}
