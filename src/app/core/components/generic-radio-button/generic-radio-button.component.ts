import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from "@angular/core";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "mf-generic-radio-button",
  templateUrl: "./generic-radio-button.component.html",
  styleUrls: ["./generic-radio-button.component.less"]
})
export class GenericRadioButtonComponent<T> implements OnInit, AfterViewInit {
  @Input() value: T | undefined;
  @Input() options: ISelectableOption<T>[] = [];
  @Input() layout: Layout = Layout.Vertical;
  @Input() isMultiselect: boolean = false;

  @Output() valueChange: EventEmitter<T> = new EventEmitter<T>();

  @ViewChild("optionsWrapper") optionsWrapper: ElementRef | undefined;
    
  public Layout = Layout;

  public unique: string = uuidv4();

  constructor(
    private element: ElementRef
  ) {
    
  }

  public ngOnInit(): void {
    console.log("ngOnInit: ", this.element);
    console.log("ngOnInit: ", this.optionsWrapper);
  }

  public ngAfterViewInit(): void {
    console.log("ngAfterViewInit: ", this.optionsWrapper);

    const wrapper: HTMLDivElement = this.optionsWrapper?.nativeElement;
    wrapper.style.backgroundColor = "silver";
  }

  public onChange(): void {
    this.valueChange.emit(this.value);
  }
}
