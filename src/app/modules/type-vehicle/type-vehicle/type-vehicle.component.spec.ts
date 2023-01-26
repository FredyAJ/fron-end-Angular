import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehicleComponent } from './type-vehicle.component';

describe('TypeVehicleComponent', () => {
  let component: TypeVehicleComponent;
  let fixture: ComponentFixture<TypeVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
