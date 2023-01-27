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
export class MainComponent implements OnInit {
  sourceBrand: DataSource<Brand> = new DataSource<Brand>(
    new Map([
      ['id', 'Identificion'],
      ['name', 'Nombre'],
    ]),
    [],
    ['id', 'name']
  );
  constructor(public dialog: MatDialog, private brandService: BrandService) {}
  ngOnInit(): void {
    this.getBrands();
  }
  async getBrands() {
    this.sourceBrand.data = await this.brandService.getBrands();
  }
  deleteBrand(event: Brand) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new DialogData(
        'Eliminar Marca ' + event.name,
        '¿Estas seguro de eliminar esta marca?',
        async () => {
          await this.brandService.deleteBrand(event.id);
          dialogRef.close();
          await this.getBrands();
        },
        function () {
          dialogRef.close();
        }
      ),
    });
  }
}
