import { Routes } from "@angular/router";
import { ListPersonExempleComponent } from "./paginationWithLocalData/list-person-exemple/list-person-exemple.component";
import { ProductListComponent } from "./paginationWithRemoteData/product-list/product-list.component";
import { TestComponent } from "./test/test.component";

export const routes: Routes = [
  { path: "", redirectTo: "productList", pathMatch: "full" },
  { path: "test", component: TestComponent },
  { path: "personList", component: ListPersonExempleComponent },
  { path: "productList", component: ProductListComponent },
];
