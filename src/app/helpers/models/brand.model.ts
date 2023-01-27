export class Brand {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  static Create(data: Map<String, any>) {
    const dataMap = JSON.parse(JSON.stringify(data));

    return new Brand(dataMap['_id'], dataMap['name']);
  }
}
