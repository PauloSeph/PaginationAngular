import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListPersonExempleComponent } from "./list-person-exemple/list-person-exemple.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListPersonExempleComponent],
  template: ` <app-list-person-exemple> </app-list-person-exemple> `,
  styles: [],
})
export class AppComponent {
  title = "PaginationAngular";
}
