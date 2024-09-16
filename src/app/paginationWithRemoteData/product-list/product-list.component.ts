import {
  ChangeDetectionStrategy,
  Component,
  inject,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "../../paginationWithLocalData/pagination/pagination.component";
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

  /** Aqui estou fornecendo o pageSize no componente, mas poderia ser definido pelo usuário por exemplo */
  public pageSize: number = 10;
  public currentPage!: number;
  public totalPage!: number;
  public data!: Person[];
  public prodService = inject(ProductService);

  /** Essa lógica estará no banco, pois no banco precisamos apenas dos itens por pagina e currence page também*/

  public getData() {
    return this.prodService.getItemsPaginated(this.currentPage, this.pageSize);
  }

  ngOnInit() {
    this.totalPage = this.prodService.getTotalPages(this.pageSize);
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.currentPage = Number.parseInt(params.get("page")!) || 1;
    });

    this.data = this.getData();
    console.log(this.data);
    console.log("OnInit");
  }

  ngDoCheck() {
    this.data = this.getData();
    console.log(this.data);
    console.log("DoCHECK");
  }
}
