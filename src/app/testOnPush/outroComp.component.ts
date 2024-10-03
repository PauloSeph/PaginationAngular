import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-outro-comp",
  standalone: true,
  imports: [CommonModule],
  template: `<p>outroComp works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutroCompComponent {
  public testando!: string;

  constructor() {
    this.testando = "Qualquer coisa";
  }

  public alterandoValor() {
    this.alterandoValor
  }
}
