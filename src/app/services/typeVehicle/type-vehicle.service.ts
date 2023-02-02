import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeVehicle } from 'src/app/helpers/models/typeVehicle.model';

@Injectable({
  providedIn: 'root',
})
export class TypeVehicleService {
  constructor(private http: HttpClient) {}
  async getTypeVehicles(): Promise<TypeVehicle[]> {
    const TypeVehiclePivot: Map<String, any>[] = (await this.http
      .get('http://localhost:3000/typevehicle')
      .toPromise()) as Map<String, any>[];
    const Typevehicles: TypeVehicle[] = TypeVehiclePivot.map((TypeVehiclePivot: Map<String, any>) => {
      return TypeVehicle.Create(TypeVehiclePivot);
    });
    return Typevehicles;
  }
  async deleteTypeVehicle(id: number): Promise<void> {
    await this.http.delete('http://localhost:3000/typevehicle/' + id).toPromise();
  }
}
