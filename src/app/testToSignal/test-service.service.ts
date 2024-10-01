import { Injectable } from "@angular/core";
import { delay, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TestServiceService {
  constructor() {}

  someMethod(): Observable<any> {
    return new Observable((obs) => obs.next([2, 3, 4])).pipe(delay(2000));
  }
}
