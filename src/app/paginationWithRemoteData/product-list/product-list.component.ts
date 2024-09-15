import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "../../paginationWithLocalData/pagination/pagination.component";
import { pagWithparamComponent } from "../pagWithparam.component";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [pagWithparamComponent, CommonModule],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent {}
