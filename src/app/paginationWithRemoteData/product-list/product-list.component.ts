import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { pagWithparamComponent } from "../pagWithparam.component";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./product.service";
import { Person } from "./Person";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [pagWithparamComponent, CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  public activatedRoute = inject(ActivatedRoute);
  public prodService = inject(ProductService);
  public data!: Person[];

  /** Aqui estou fornecendo o pageSize no componente, mas poderia ser definido pelo usuário por exemplo */
  public pageSize: number = 10;

  public currentPage!: number;
  public totalPage!: number;

  /** Essa lógica estará no banco, só precisamos das mesmas informações: itens por pagina e a currence page */
  public getData() {
    return this.prodService.getItemsPaginated(this.currentPage, this.pageSize);
  }

  ngOnInit() {
    this.totalPage = this.prodService.getTotalPages(this.pageSize); // primeiro temos o total de paginas

    // depois pegamos o parametro da rota.
    this.activatedRoute.queryParamMap.subscribe((params) => {
      let param = Number.parseInt(params.get("page")!);

      if (param <= this.totalPage) {
        this.currentPage = param || 1;
      } else {
        this.currentPage = 1;
      }
    });

    this.data = this.getData(); // depois obtemos os dados.
  }

  ngDoCheck() {
    //  Atualizar os dados quando a pagina mudar *quando evento ocorrer no component pagination*, já que o change detection acionar.
    this.data = this.getData();
  }
}
