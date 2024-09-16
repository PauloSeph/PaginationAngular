import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "../../paginationWithLocalData/pagination/pagination.component";
import { pagWithparamComponent } from "../pagWithparam.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [pagWithparamComponent, CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent {
  public activatedRoute = inject(ActivatedRoute);

  public pageSize!: number;
  public currentPage: number = null!;
  // public data = data;

  /** Essa lógica estará no banco, pois no banco precisamos apenas dos itens por pagina e currence page também*/
  paginatedData() {
    const start = (this.currentPage! - 1) * this.pageSize;
    const end = start + this.pageSize;
    // return this.data.slice(start, end);
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.currentPage = Number.parseInt(params.get("page")!);
      this.pageSize = Number.parseInt(params.get("size")!);
    });
  }
}
