import { Component } from "@angular/core";
import { States } from "./constants";
import { LayoutService } from "./services/layout.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    public States = States;

    public title: string = "masa-frontend";
    public isRtl: boolean = false;

    constructor(
        public layoutService: LayoutService
    ) {}
}
