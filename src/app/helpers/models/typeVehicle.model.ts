export class TypeVehicle {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  static Create(data: Map<String, any>) {
    const dataMap = JSON.parse(JSON.stringify(data));

    return new TypeVehicle(dataMap['_id'], dataMap['name']);
  }
}
