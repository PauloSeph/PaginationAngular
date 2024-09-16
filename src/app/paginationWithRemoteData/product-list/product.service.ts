import { Injectable } from "@angular/core";
import { Person } from "./Person";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  public num = 0;

  public data: Person[] = [
    { name: `Test ${this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
    { name: `Test ${++this.num}`, idade: 22 },
  ];

  // representação do metodos Skip e Take para ser usado no Banco de dados.
  getItemsPaginated(currentPage: number, pageSize: number) {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return this.data.slice(start, end);
  }

  getTotalPages(pageSize: number) {
    return Math.ceil(this.data.length / pageSize);
  }
}
