import { LayoutDirection } from "./enums";
import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
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

    constructor(
        @Inject(DOCUMENT) private document: Document,
        public layoutService: LayoutService
    ) {
        this.alignUi();
    }

    public onChangeDirectionClick(): void {
        this.layoutService.layoutDirection = this.layoutService.layoutDirection === LayoutDirection.Ltr ? LayoutDirection.Rtl : LayoutDirection.Ltr;
        this.alignUi();
    }

  private alignUi() {
    const bodyElement: HTMLElement | null = this.document.getElementById("mf-body");
    if (bodyElement) {
      bodyElement.style.direction = this.layoutService.layoutDirection === LayoutDirection.Rtl ? "rtl" : "ltr";
    }
  }
}
