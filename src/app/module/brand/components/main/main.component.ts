import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/helpers/helpersModule/components/dialog/dialog.component';
import { Brand } from 'src/app/helpers/models/brand.model';
import { DataSource } from 'src/app/helpers/models/dataSource.inteface';
import { DialogData } from 'src/app/helpers/models/dialogData.model';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
//definimos la clase Main en donde vamos a tener la logica de los componentes
export class MainComponent implements OnInit {
  //definimos una variable booleana para los formularios
  addBrandForm: boolean = false;
  //hacemos un mapeo de datos para definir los campos existentes en la base de datos y lla asignamos como un tipo "brand"
  sourceBrand: DataSource<Brand> = new DataSource<Brand>(
    new Map([
      ['id', 'Identificion'],
      ['name', 'Nombre'],
    ]),
    new Map([
      ['id', 'text'],
      ['name', 'text'],
    ]),
    //aqui definimos los campos que se vean a visualizar en la vista
    [],
    ['id', 'name']
  );
  constructor(public dialog: MatDialog, private brandService: BrandService) {}
  //obtenemos todas las marcas al ejecutar el proyecto
  ngOnInit(): void {
    this.getBrands();
  }
//metodo para obtener todas las marcas, esta busca el service de getBrands con una promesa asincrona, por eso el metodo tambien es asincrono
  async getBrands() {
    this.sourceBrand.data = await this.brandService.getBrands();
  }
  //recibimos un parametro del evento a eliminar, y desplegamos un dialogData para preguntar si esta seguro de eliminar
  deleteBrand(event: Brand) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new DialogData(
        'Eliminar Marca ' + event.name,
        '¿Estas seguro de eliminar esta marca?',
        //luego mediante un funcion callback llamamos al servicio de eliminacion y pasamos por parametro el id del brand
        async () => {
          await this.brandService.deleteBrand(event.id);
          dialogRef.close();
        //cerramos el dialog y traemos nuevamente todas las marcas
          await this.getBrands();
        },
        //luego en una funcion definimos el close de la referencia en caso de salir sin eliminar nada
        function () {
          dialogRef.close();
        }
      ),
    });
  }
  editBrand(event: Brand) {}

  //recibimos un parametro del evento para despues usarlo en la vista
  //mediante el servicio llamamos al metodo saveBrand y pasamos el parametro, luego la funcion callback trae todas las marcas nuevamente
  saveBrand(event: Brand) {
    this.brandService
      .saveBrand(event)
      .then(() => {
        this.getBrands();
      })
      .catch((error) => {
        this.dialog.open(DialogComponent, {
          data: new DialogData(
            'Error al guardar marca',
            error.error.message,
            function () {},
            function () {}
          ),
        });
      });
  }

  //pasarlo al false nuevamente
  addBrand(event: any) {
    this.addBrandForm = !this.addBrandForm;
  }
}
