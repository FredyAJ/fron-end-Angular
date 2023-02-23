import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/helpers/helpersModule/components/dialog/dialog.component';
import { DialogData } from 'src/app/helpers/models/dialogData.model';
import { TypeVehicle } from 'src/app/helpers/models/typeVehicle.model';
import { TypeVehicleService } from 'src/app/services/typeVehicle/type-vehicle.service';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  addTypeVehicleForm: boolean = false;
  sourceTypeVehicle: DataSource<TypeVehicle> = new DataSource<TypeVehicle>(

    new Map([
      ['id', 'Identificion'],
      ['name', 'Nombre'],
    ]),
    new Map([
      ['id', 'text'],
      ['name', 'text'],
    ]),
    [],
    ['id', 'name']
  );
  constructor(public dialog: MatDialog, private typeVehicleService: TypeVehicleService) {}
  ngOnInit(): void {
    this.getTypeVehicles();
  }
  async getTypeVehicles() {
    this.sourceTypeVehicle.data = await this.typeVehicleService.getTypeVehicles();
  }
  deletetypeVehicle(event: TypeVehicle) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new DialogData(
        'Eliminar tipo de vehiculo ' + event.name,
        '¿Estas seguro de eliminar estatipo de vehiculo?',
        async () => {
          await this.typeVehicleService.deleteTypeVehicle(event.id);
          dialogRef.close();
          await this.getTypeVehicles();
        },
        function () {
          dialogRef.close();
        }
      ),
    });
  }
  editTypeVehicle(event: TypeVehicle) {}
  saveVehicle(event: TypeVehicle) {
    this.typeVehicleService
      .saveTypeVehicle(event)
      .then(() => {
        this.getTypeVehicles();
      })
      .catch((error) => {
        this.dialog.open(DialogComponent, {
          data: new DialogData(
            'Error al guardar tipo de vehiculo',
            error.error.message,
            function () {},
            function () {}
          ),
        });
      });
  }
  addTypeVehicle(event: any) {
    console.log(event);

    this.addTypeVehicleForm = !this.addTypeVehicleForm;
  }
}
