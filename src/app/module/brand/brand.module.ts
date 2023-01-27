import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { MainComponent } from './components/main/main.component';
import { HelpersModule } from 'src/app/helpers/helpersModule/helpers.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    HelpersModule,
    MatDialogModule
  ]
})
export class BrandModule { }
