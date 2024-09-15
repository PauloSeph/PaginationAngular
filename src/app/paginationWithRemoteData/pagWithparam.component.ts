import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-paginationWithParam",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./pagWithparam.component.html",
  styleUrl: "./pagWithparam.component.scss",
})
export class pagWithparamComponent {
  constructor(private router: Router) {}

  /** O total de registros */
  @Input() collectionSize: number = 555;

  /** Tamanho das paginas, que será usado para ver a quantidade de paginas - talvez nem fosse preciso estar aqui */
  @Input() pageSize: number = 10;

  /** Current page - pagina atual*/
  @Input() currentPage = 1;

  /** The number of buttons to show either side of the current page */
  @Input() maxSize = 3;

  /** Display the First/Last buttons - mostrar o primeiro e ultimo button*/
  @Input() showFirstLastButtons = true;

  /** Display the Next/Previous buttons - mostrar o next e previous button*/
  @Input() showNextPreviousButtons = true;

  /** Display small pagination buttons - isso é para aplicar estilo CSS */
  @Input() small = false;

  /** Notifica o pai com o valor atual da pagina selecioanda */
  @Output() pageSelect = new EventEmitter<number>();

  /** variavel usada para armazena a quantidade de paginas, para serem definidas os botões */
  sequenceTotalPages: number[] = [];

  /** Gerando uma sequencia de posições no Array com base no total de paginas */
  // Total de pages é determinado pelo tamanho do tamanho da pagina.
  public generateSequence() {
    let totalPages = Math.ceil(this.collectionSize / this.pageSize);
    this.sequenceTotalPages = Array(totalPages);
  }

  ngOnInit(): void {
    this.generateSequence();
    this.navigateToNextPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generateSequence();
  }

  public navigateToNextPage() {
    this.router.navigate([], {
      queryParams: { currentPage: this.currentPage, pageSize: this.pageSize },
    });
  }

  /** Set page number */
  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    this.navigateToNextPage();
    this.pageSelect.emit(pageNumber);
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    // nextPage <= this.totalPages.length && this.selectPageNumber(nextPage); // Equivalente a sintaxe tradicional (porém sintaxe resumida para verificar a expressao e se for verdadeira chamaria o metodo)
    if (nextPage <= this.sequenceTotalPages.length) {
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
