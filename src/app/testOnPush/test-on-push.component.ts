import { Cores, TestandoService } from "./Testando.service";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";

@Component({
  selector: "app-test-on-push",
  standalone: true,
  imports: [],
  template: ` <p>test-on-push works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestOnPushComponent {
  public myData!: Cores;
  constructor(
    private cdr: ChangeDetectorRef,
    private serviceTest: TestandoService
  ) {}

  someAsyncOperations() {
    this.serviceTest.getData().subscribe({
      next: (v) => {
        this.myData = v as Cores;
        this.cdr.detectChanges();
      },
    });
  }
}
