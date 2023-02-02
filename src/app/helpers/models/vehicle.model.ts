export class Vehicle {
  id: number;
  name: string;
  model: string;
  brand: string;
  color: string;

  constructor(id: number, name: string, model: string, brand: string, color: string) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.brand= brand;
    this.color = color;
  }
  static Create(data: Map<String, any>) {
    const dataMap = JSON.parse(JSON.stringify(data));

    return new Vehicle(dataMap['_id'], dataMap['name'], dataMap['model'], dataMap['brand'], dataMap['color']);
  }
}
