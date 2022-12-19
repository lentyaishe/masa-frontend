import { States } from "./../../constants";
import { LayoutService } from "src/app/services/layout.service";
import { Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Directive()
export abstract class BasePage implements OnInit, OnDestroy {

    protected subscriptions: Subscription[] = [];

    private _pageRoute: States = "";

    constructor(
        private layoutService: LayoutService,
        pageRoute: States
    ) {
        this._pageRoute = pageRoute;
    }

    public ngOnInit(): void {
        this.subscriptions.push(
            this.layoutService.onLayoutDirectionChanged.subscribe(() => {
                console.log(`${this._pageRoute} page: layout changed happened`);
            })
        );

        this.initialize();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    protected abstract initialize(): void;
}
