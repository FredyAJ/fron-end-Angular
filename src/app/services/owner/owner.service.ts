import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from 'src/app/helpers/models/owner.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private http: HttpClient) {}
  async getOnwers(): Promise<Owner[]> {
    const ownersPivot: Map<String, any>[] = (await this.http
      .get('http://localhost:3000/owner')
      .toPromise()) as Map<String, any>[];
    const owners: Owner[] = ownersPivot.map((ownersPivot: Map<String, any>) => {
      return Owner.Create(ownersPivot);
    });
    return owners;
  }
  async deleteOwner(id: number): Promise<void> {
    await this.http.delete('http://localhost:3000/owner/' + id).toPromise();
  }
}
