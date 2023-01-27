import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() displayedColumns: String[] = [];
  @Input() mapData: Map<String, String> = new Map();
  @Input() canEdit!: boolean;
  @Input() canDelete!: boolean;
  @Input() canAdd!: boolean;
  @Output() deleteElement = new EventEmitter<any>()
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
  deleteElementF(item:any){
    
    this.deleteElement.emit(item);
  }
}
