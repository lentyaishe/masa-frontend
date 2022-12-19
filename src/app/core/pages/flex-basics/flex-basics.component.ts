import { LayoutService } from "src/app/services/layout.service";
import { Component } from "@angular/core";
import { BasePage } from "../base-page";
import { States } from "src/app/constants";

@Component({
  selector: "app-flex-basics",
  templateUrl: "./flex-basics.page.html",
  styleUrls: ["./flex-basics.page.less"]
})
export class FlexBasicsPage extends BasePage {
  constructor(
    layoutService: LayoutService
  ) {
    super(layoutService, States.flexBasics);
  }

  protected initialize(): void { }
}
