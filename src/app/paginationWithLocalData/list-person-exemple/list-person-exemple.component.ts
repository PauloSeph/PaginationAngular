import { Component } from "@angular/core";
import { Person } from "./person";
import { data } from "./data";
import { PaginationComponent } from "../pagination/pagination.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-list-person-exemple",
  standalone: true,
  imports: [PaginationComponent, CommonModule],
  templateUrl: "./list-person-exemple.component.html",
  styleUrl: "./list-person-exemple.component.scss",
})
export class ListPersonExempleComponent {
  public itemsPerPage = 10;
  public TotalSize!: number;
  public currentPage = 1;
  public data = data;

  /** Obtendo o range de itens para pegar dentro do nosso array de registros local*/
  paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.data.slice(start, end);
  }

  public changePage(page: number) {
    this.currentPage = page;
  }
}
