import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/helpers/models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}
  async getVehicles(): Promise<Vehicle[]> {
    const VehiclePivot: Map<String, any>[] = (await this.http
      .get('http://localhost:3000/vehicle')
      .toPromise()) as Map<String, any>[];
    const vehicles: Vehicle[] = VehiclePivot.map((VehiclePivot: Map<String, any>) => {
      return Vehicle.Create(VehiclePivot);
    });
    return vehicles;
  }
  async deleteVehicle(id: number): Promise<void> {
    await this.http.delete('http://localhost:3000/vehicle/' + id).toPromise();
  }
  async saveVehicle(vehicle: Vehicle): Promise<void> {
    await this.http.post('http://localhost:3000/vehicle', vehicle).toPromise();
  }
}

