import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Owner } from 'src/app/helpers/models/owner.model';
import { OwnerService } from 'src/app/services/owner/owner.service';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';
import { DialogComponent } from 'src/app/helpers/helpersModule/components/dialog/dialog.component';
import { DialogData } from 'src/app/helpers/models/dialogData.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 sourceOwner: DataSource<Owner> = new DataSource<Owner>(
  new Map([
    ['id', 'Identificacion'],
    ['nameUser', 'Nombre Usuario'],
    ['email', 'correo'],
    ['password', 'contraseña'],

  ]),
  [],
  //son los datos que van a aparecer en la tabla para personalizacion.//

  ['id', 'nameUser', 'email']


 );
 constructor(public dialog: MatDialog, private ownerService: OwnerService) {}
 ngOnInit(): void {
   this.getOnwers();
 }
 async getOnwers() {
  this.sourceOwner.data = await this.ownerService.getOnwers();
}
deleteOwner(event: Owner) {
  const dialogRef = this.dialog.open(DialogComponent, {
    data: new DialogData(
      'Eliminar Usuario ' + event.nameUser,
      '¿Estas seguro de eliminar esta usuario?',
      async () => {
        await this.ownerService.deleteOwner(event.id);
        dialogRef.close();
        await this.getOnwers();
      },
      function () {
        dialogRef.close();
      }
    ),
  });
}

}
