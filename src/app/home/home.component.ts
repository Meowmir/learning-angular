import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubs: Subscription;
  constructor() {}

  ngOnInit() {
    /*
    this.firstObsSubs = interval(1000).subscribe((count) => {
      console.log(count);
    });
     */
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.firstObsSubs.unsubscribe();
  }
}
