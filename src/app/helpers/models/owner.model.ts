export class Owner {
  id: number;
  nameUser: string;
  email: string;
  password: string;

  constructor(id: number, nameUser: string, email: string, password: string) {
    this.id = id;
    this.nameUser = nameUser;
    this.email = email;
    this.password= password;
  }
  static Create(data: Map<String, any>) {
    const dataMap = JSON.parse(JSON.stringify(data));

    return new Owner(dataMap['_id'], dataMap['nameUser'], dataMap['email'], dataMap['password']);
  }
}
