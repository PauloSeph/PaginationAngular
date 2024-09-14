import { Routes } from "@angular/router";
import { ListPersonExempleComponent } from "./list-person-exemple/list-person-exemple.component";

export const routes: Routes = [
  { path: "", redirectTo: "personList", pathMatch: "full" },
  { path: "personList", component: ListPersonExempleComponent },
];
