import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './modules/brand/brand/brand.component';
import { OwnerComponent } from './modules/owner/owner/owner.component';
import { TypeVehicleComponent } from './modules/type-vehicle/type-vehicle/type-vehicle.component';
import { VehicleComponent } from './modules/vehicle/vehicle/vehicle.component';

const routes: Routes = [
  { path: 'vehicle', component: VehicleComponent },
  { path: 'owner', component: OwnerComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'typeVehicle', component: TypeVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
