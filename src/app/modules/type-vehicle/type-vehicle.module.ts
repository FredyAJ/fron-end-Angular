import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeVehicleComponent } from './type-vehicle/type-vehicle.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    TypeVehicleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class TypeVehicleModule { }
