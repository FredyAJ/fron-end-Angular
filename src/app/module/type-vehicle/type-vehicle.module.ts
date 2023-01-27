import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeVehicleRoutingModule } from './type-vehicle-routing.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TypeVehicleRoutingModule
  ]
})
export class TypeVehicleModule { }
