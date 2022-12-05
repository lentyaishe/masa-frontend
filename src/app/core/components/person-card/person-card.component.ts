import { Component, EventEmitter, Input, Output } from "@angular/core";

enum ViewMode {
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

  @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public ViewMode = ViewMode;

  public buttonTitle: string = "";
  public mode: ViewMode = ViewMode.ReadOnly;

  public test: boolean = true;

  constructor() {
    this.setButtonTitle();
  }

  public onToggleModeClick(): void {
    this.mode = this.mode === ViewMode.ReadOnly ? ViewMode.Edit : ViewMode.ReadOnly;
    this.setButtonTitle();
    this.onModeChange.emit(this.mode === ViewMode.Edit);
  }

  public onPersonNameChange(): void {
    this.personNameChange.emit(this.personName);
  }

  public onPersonIdChange(): void {
    this.personIdChange.emit(this.personId);
  }

  public onPersonAddressChange(): void {
    this.personAddressChange.emit(this.personAddress);
  }

  public onPersonEmailChange(): void {
    this.personEmailChange.emit(this.personEmail);
  }

  private setButtonTitle() {
    this.buttonTitle = this.mode === ViewMode.ReadOnly ? Edit : Save;
  }
}
