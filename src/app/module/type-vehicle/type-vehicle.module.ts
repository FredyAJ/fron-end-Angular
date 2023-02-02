import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeVehicleRoutingModule } from './type-vehicle-routing.module';
import { MainComponent } from './components/main/main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpersModule } from 'src/app/helpers/helpersModule/helpers.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TypeVehicleRoutingModule,
    HelpersModule,
    MatDialogModule
  ]
})
export class TypeVehicleModule { }
