import { LayoutService } from "src/app/services/layout.service";
import { Component } from "@angular/core";
import { map, Observable, Observer, of, Subscription, tap } from "rxjs";
import { BasePage } from "../base-page";
import { States } from "src/app/constants";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.page.html",
  styleUrls: ["./rxjs.page.css"]
})
export class RxjsPage extends BasePage {

  constructor(
    layoutService: LayoutService
  ) {
    super(layoutService, States.rxjs);
    // this.simpleSubscription();

    // this.fullSubscription();

    // this.subscriptionWithTap();

    this.subscriptionWithMap();
  }

  protected initialize(): void { }


  private simpleSubscription(): void {
    // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    // Simple subscriber
    observable$.subscribe((item: number) => console.log(item));
  }

  private fullSubscription(): void {
    // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    // Observer with next, error, complete
    const observer: Observer<number> = {
      next(value: number) {
        if (value === 2) {
          throw new Error("Bad value");
        }
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log("Observer completed, GO HOME!!!");
      }
    };

    // Creating subscription so we could unsubscribe in case needed
    const subscription: Subscription = observable$.subscribe(observer);

  }

  private subscriptionWithTap(): void {
        // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    observable$.pipe(
      tap((item: number) => {
        console.log(item);
      })
    ).subscribe();
  }

  private subscriptionWithMap(): void {
    // Observable creation
    const observable$: Observable<number> = of(1, 2, 3);

    observable$.pipe(
      map((item: number) => {
        return item + "-cool!";
      }),
      tap((item: string) => console.log(item)),
      map((item: string) => {
        return item.substring(0, 2)
      }),
      tap((item: string) => {
        console.log(item);
        item = item + " tapped";
      }),
      map((item: string) => {
        return "Hooray: " + item;
      })
    ).subscribe((item: string) => console.log(`Final: ${item}`));
  }

}
