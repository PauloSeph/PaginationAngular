import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SignalExempleService {
  private subjectTest$ = new BehaviorSubject<number>(1);

  getSubjectTest(): Observable<number> {
    return this.subjectTest$.asObservable();
  }
}
