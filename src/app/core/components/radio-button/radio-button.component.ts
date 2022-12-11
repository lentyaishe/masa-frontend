import { Component, EventEmitter, Input, Output } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "mf-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"]
})
export class RadioButtonComponent {
  @Input() value: string = "";
  @Input() options: string[] = [];

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  public unique: string = uuidv4();

  public onChange(): void {
    this.valueChange.emit(this.value);
  }
}
