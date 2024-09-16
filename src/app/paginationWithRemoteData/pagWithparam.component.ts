import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-paginationWithParam",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./pagWithparam.component.html",
  styleUrl: "./pagWithparam.component.scss",
})
export class pagWithparamComponent {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  /** The number of buttons to show either side of the current page */
  @Input() maxSize = 2;

  /** Display the First/Last buttons - mostrar o primeiro e ultimo button*/
  @Input() showFirstLastButtons = true;

  /** Display the Next/Previous buttons - mostrar o next e previous button*/
  @Input() showNextPreviousButtons = true;

  /** Display small pagination buttons - isso é para aplicar estilo CSS */
  @Input() small = false;

  /** O total de registros */
  @Input() totalPages!: number;

  /** Tamanho das paginas, que será usado para ver a quantidade de paginas*/
  @Input() pageSize!: number;

  /** Current page - pagina atual */
  public currentPage!: number;

  /** variavel usada para armazena a quantidade de paginas, para serem definidas os botões */
  public sequenceTotalPages: number[] = [];

  /** Gerando uma sequencia de posições no Array com base no total de paginas */
  // Total de pages é determinado pelo tamanho do tamanho da pagina.
  public generateSequence() {
    this.sequenceTotalPages = Array(this.totalPages);
  }

  ngOnInit(): void {
    console.log(`OnINIT Pagination`);
    this.generateSequence();
    this.currentPage = 1;
    this.updateQueryParam(); // atualizando a url com QueryParam.
    this.navigateToNextPage(); //
  }

  ngOnCheck(changes: SimpleChanges) {
    // this.generateSequence();
  }

  //* Pegandos os dados enviados pelo queryParam na URL para atualizar também como currentPage. */
  updateQueryParam() {
    this.activatedRouter.queryParamMap.subscribe((params) => {
      let current = Number.parseInt(params.get("page")!);
      console.log(`Pagina atual ${current}`);

      if (current <= this.sequenceTotalPages.length && current >= 1) {
        this.currentPage = current;
      }
    });
  }

  public navigateToNextPage() {
    this.router.navigate([], {
      queryParams: { page: this.currentPage },
    });
  }

  /** Set page number */
  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
    this.navigateToNextPage();
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    // nextPage <= this.totalPages.length && this.selectPageNumber(nextPage); // Equivalente a sintaxe tradicional (porém sintaxe resumida para verificar a expressao e se for verdadeira chamaria o metodo)
    if (nextPage <= this.sequenceTotalPages.length) {
      this.selectPageNumber(nextPage);
    }
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    // previousPage >= 1 && this.selectPageNumber(previousPage); --  // Equivalente a sintaxe tradicional (porém sintaxe resumida para verificar a expressao e se for verdadeira chamaria o metodo)
    if (previousPage >= 1) {
      this.selectPageNumber(previousPage);
    }
  }

  verificForDisabled(value: number) {
    return this.currentPage === value ? "disabled" : "page-item";
  }
}
