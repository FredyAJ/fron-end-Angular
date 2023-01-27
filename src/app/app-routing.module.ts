import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./module/vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  {
    path: 'type-vehicle',
    loadChildren: () =>
      import('./module/type-vehicle/type-vehicle.module').then(
        (m) => m.TypeVehicleModule
      ),
  },
  {
    path: 'owner',
    loadChildren: () =>
      import('./module/owner/owner.module').then((m) => m.OwnerModule),
  },
  {
    path: 'brand',
    loadChildren: () =>
      import('./module/brand/brand.module').then((m) => m.BrandModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
