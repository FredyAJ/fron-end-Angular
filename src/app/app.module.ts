import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandModule } from './module/brand/brand.module';
import { OwnerModule } from './module/owner/owner.module';
import { TypeVehicleModule } from './module/type-vehicle/type-vehicle.module';
import { VehicleModule } from './module/vehicle/vehicle.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    TypeVehicleModule,
    VehicleModule,
    BrandModule,
    OwnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
