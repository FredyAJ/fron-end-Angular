import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { MainComponent } from './components/main/main.component';
import { HelpersModule } from 'src/app/helpers/helpersModule/helpers.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
      MainComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    HelpersModule,
    MatDialogModule
  ]
})
export class OwnerModule { }
