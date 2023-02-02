import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() title: String = '';
  @Input() data: any[] = [];
  @Input() displayedColumns: String[] = [];
  @Input() mapData: Map<String, String> = new Map();
  @Input() filedType: Map<String, String> = new Map();
  @Input() canEdit!: boolean;
  @Input() canDelete!: boolean;
  @Input() canAdd: boolean = false;
  @Input() addForm!: boolean;
  @Output() deleteElement = new EventEmitter<any>();
  @Output() editElement = new EventEmitter<any>();
  @Output() addElement = new EventEmitter<any>();
  @Output() saveElement = new EventEmitter<any>();
  fieldData: Map<String, Map<String, any>> = new Map();
  constructor() {}
  ngOnInit(): void {
    if (this.canEdit || this.canDelete) {
      this.displayedColumns.push('actions');
    }
  }
  getProparitys(item: any) {
    return Object.keys(item);
  }
  getItemName(item: any) {
    return this.mapData.get(item);
  }
  deleteElementF(item: any) {
    this.deleteElement.emit(item);
  }
  editElementF(item: any) {
    this.editElement.emit(item);
  }
  saveElementF(item: any) {
    this.saveElement.emit(item);
  }
  deleteIdToFields(fields: string[]) {
    return fields.filter((item) => item !== 'id');
  }
  addElementF() {
    this.createFieldData();
    this.addElement.emit();
  }
  createFieldData() {
    this.fieldData = new Map();
    this.getProparitys(this.data[0]).forEach((item) => {
      if (item !== 'id') {
        this.fieldData.set(
          item,
          new Map([
            ['label', this.mapData.get(item)!],
            ['type', this.filedType.get(item)!],
          ])
        );
      }
    });
  }
}
