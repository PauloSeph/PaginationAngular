import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  /** O total de registros */
  @Input() collectionSize!: number;

  /** Tamanho das paginas, que será usado para ver a quantidade de paginas - talvez nem fosse preciso estar aqui */
  @Input() pageSize = 5;

  /** Current page - pagina atual*/
  @Input() currentPage = 1;

  /** The number of buttons to show either side of the current page */
  @Input() maxSize = 3;

  /** Display the First/Last buttons - mostrar o primeiro e ultimo button*/
  @Input() ShowFirstLastButtons = true;

  /** Display the Next/Previous buttons - mostrar o next e previous button*/
  @Input() showNextPreviousButtons = true;

  /** Display small pagination buttons - isso é para aplicar estilo CSS */
  @Input() small = false;

  /** Notifica o pai com o valor atual da pagina selecioanda */
  @Output() pageSelect = new EventEmitter<number>();

  /** variavel usada para armazena a quantidade de paginas, para serem definidas os botões */
  totalPages: number[] = [];

  // Total de pages é determinado pelo tamanho do tamanho da pagina.

  /** Gerando uma sequencia de posições no Array com base no total de paginas */
  // ele nao gera dados igualmente como na paginação simples que vimos. Por isso os indices é o que contaram nesse caso,
  // cada indice corresponde a uma pagina.
  public generateSequence() {
    this.totalPages = Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  ngOnInit(): void {
    this.generateSequence();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generateSequence();
  }

  /** Set page number */
  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    this.pageSelect.emit(pageNumber);
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    // nextPage <= this.totalPages.length && this.selectPageNumber(nextPage); // Equivalente a sintaxe tradicional (porém sintaxe resumida para verificar a expressao e se for verdadeira chamaria o metodo)
    if (nextPage <= this.totalPages.length) {
      this.selectPageNumber(nextPage);
      this.pageSelect.emit(this.currentPage);
    }
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    // previousPage >= 1 && this.selectPageNumber(previousPage); --  // Equivalente a sintaxe tradicional (porém sintaxe resumida para verificar a expressao e se for verdadeira chamaria o metodo)
    if (previousPage >= 1) {
      this.selectPageNumber(previousPage);
      this.pageSelect.emit(this.currentPage);
    }
  }

  verificForDisabled(value: number) {
    return this.currentPage === value ? "disabled" : "page-item";
  }
}
