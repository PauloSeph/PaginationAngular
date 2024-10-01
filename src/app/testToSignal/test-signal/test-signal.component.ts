import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TestandoOnPushComponent } from "../../testando-on-push/testando-on-push.component";

@Component({
  selector: "app-test-signal",
  standalone: true,

  imports: [RouterOutlet, CommonModule, TestandoOnPushComponent],
  template: `
    <!-- <h2>App Component</h2>

    <button (click)="getNewData()">Atualizando data</button>

    @for(item of dataSignal(); track $index){
    <p>{{ item.nome }}</p>
    } -->
  `,
})
export class TestSignalComponent {
  // public dataTest = new Data();
  // public dataBehaviorSub$ = new BehaviorSubject([]);
  // public dataSignal: Signal<any>;
  // public subscription: Subscription;
  // constructor() {
  //   const newData: Observable<any> = this.dataTest.getDataSlice();
  //   this.subscription = newData.subscribe((v) => this.dataBehaviorSub$.next(v));
  //   // this.subscription = newData.subscribe(this.dataBehaviorSub$);
  //   const toObservable = this.dataBehaviorSub$.asObservable();
  //   this.dataSignal = toSignal(toObservable);
  //   console.log(this.dataSignal());
  // }
  // public getNewData() {
  //   // Atualizando os dados dentro do BehaviorSubject
  //   const newData: Observable<any> = this.dataTest.getDataSlice();
  //   this.subscription = newData.subscribe((v) => this.dataBehaviorSub$.next(v));
  //   // newData.subscribe(this.dataBehaviorSub$);
  // }
  // ngDoCheck(): void {
  //   console.log("NgDOCheck");
  // }
  // ngOnDestroy() {
  //   // Cancela a inscrição quando o componente for destruído
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
