import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/helpers/models/brand.model';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}
  async getBrands(): Promise<Brand[]> {
    const brandsPivot: Map<String, any>[] = (await this.http
      .get('http://localhost:3000/brand')
      .toPromise()) as Map<String, any>[];
    const brands: Brand[] = brandsPivot.map((brandPivot: Map<String, any>) => {
      return Brand.Create(brandPivot);
    });
    return brands;
  }
  async deleteBrand(id: number): Promise<void> {
    await this.http.delete('http://localhost:3000/brand/' + id).toPromise();
  }
}
