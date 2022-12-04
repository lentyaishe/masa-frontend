import { Component, EventEmitter, Input, Output } from "@angular/core";

enum Mode {
  ReadOnly,
  Edit
}

const Edit: string = "Edit";
const Save: string = "Save";

@Component({
  selector: "mf-person-card",
  templateUrl: "./person-card.component.html",
  styleUrls: ["./person-card.component.less"]
})
export class PersonCardComponent {
  @Input() personName: string = "";
  @Input() personId: string = "";
  @Input() personAddress: string = "";
  @Input() personEmail: string = "";

  @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public buttonTitle: string = "";

  private _mode: Mode = Mode.ReadOnly;

  constructor() {
    this.setButtonTitle();
  }

  public onToggleModeClick(): void {
    this._mode = this._mode === Mode.ReadOnly ? Mode.Edit : Mode.ReadOnly;
    this.setButtonTitle();
    this.onModeChange.emit(this._mode === Mode.Edit);
  }

  private setButtonTitle() {
    this.buttonTitle = this._mode === Mode.ReadOnly ? Edit : Save;
  }
}
