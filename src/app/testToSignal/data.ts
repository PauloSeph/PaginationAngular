import { interval, Observable, timer } from "rxjs";

export class Data {
  private idade = 20;
  private nome = 0;
  private start!: number;
  private end!: number;

  // Simulando registros
  private data = [
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
    { nome: `Ana ${this.nome++}`, idade: Number.parseInt(`${this.idade++}`) },
  ];

  // Lógica para definir um numero aleatorio para o atributo start e end,
  // para determinar o Slicing no Array
  private randomNumber(): void {
    this.start = Number.parseFloat((Math.random() * 1 + 1).toPrecision(1));
    this.end = Number.parseFloat((Math.random() * 10 + 1).toPrecision(1));

    if (this.start > this.end) {
      this.start = this.end + 3;
    }
  }

  private resultDataSlice!: any[];

  public getDataSlice(): Observable<any[]> {
    this.randomNumber();
    this.resultDataSlice = this.data.slice(this.start, this.end);

    return new Observable<any[]>((observer) => {
      observer.next(this.resultDataSlice);
    });
  }
}

// export function testData() {
//   let randomValue = Number.parseFloat((Math.random() * 10 + 1).toPrecision(1));
//   console.log(randomValue);

//   if (randomValue > 5) {
//     return dataExemple;
//   } else {
//     return dataExemple2;
//   }
// }
