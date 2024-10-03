import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TestandoService {
  private cores: Cores[] = [
    { nome: "Azul" },
    { nome: "Verde" },
    { nome: "Amarelo" },
    { nome: "Roxo" },
    { nome: "Rosa" },
    { nome: "Laranja" },
  ];

  private dataObs = new Observable((sub) => sub.next(this.cores));
  public getData() {
    return this.dataObs;
  }
}

export interface Cores {
  nome: string;
}
