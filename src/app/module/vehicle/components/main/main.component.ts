import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/helpers/helpersModule/components/dialog/dialog.component';
import { DialogData } from 'src/app/helpers/models/dialogData.model';
import { Vehicle } from 'src/app/helpers/models/vehicle.model';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  sourceVehicle: DataSource<Vehicle> = new DataSource<Vehicle>(
    new Map([
      ['id', 'Identificacion'],
      ['name', 'Nombre Vehiculo'],
      ['model', 'modelo'],
      ['brand', 'marca'],
      ['color', 'color'],

    ]),
    [],
    ['id', 'name']

   );
   constructor(public dialog: MatDialog, private vehicleService: VehicleService) {}
   ngOnInit(): void {
     this.getVehicles();
   }
   async getVehicles() {
    this.sourceVehicle.data = await this.vehicleService.getVehicles();
  }
  deleteVehicle(event: Vehicle) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new DialogData(
        'Eliminar vehiculo ' + event.name,
        '¿Estas seguro de eliminar este vehiculo?',
        async () => {
          await this.vehicleService.deleteVehicle(event.id);
          dialogRef.close();
          await this.getVehicles();
        },
        function () {
          dialogRef.close();
        }
      ),
    });
  }

}
