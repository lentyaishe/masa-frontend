import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "mf-generic-multiselect",
  templateUrl: "./generic-multiselect.component.html",
  styleUrls: ["./generic-multiselect.component.less"]
})
export class GenericMultiselectComponent<T> implements OnInit, AfterViewInit {
  @Input() value: T | T[] | undefined;
  @Input() options: ISelectableOption<T>[] = [];
  @Input() layout: Layout = Layout.Vertical;
  @Input() isMultiselect: boolean = false;

  @Output() valueChange: EventEmitter<T | T[]> = new EventEmitter<T | T[]>();

  @ViewChild("optionsWrapper") optionsWrapper: ElementRef | undefined;

  public Layout = Layout;

  public multiselectedValue: T[] = [];
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

  public onChange(option: T): void {
    if (!this.isMultiselect) {
      this.valueChange.emit([option]);
    }
    else {
      const temp: T[] = this.value as T[];
      const index: number | undefined = temp?.indexOf(option);
      if (index !== undefined && index > -1) {
        temp?.splice(index, 1);
      }
      else {
        temp?.push(option);
      }
    }
  }

  public isChecked(option: T): boolean {
    if (this.value) {
      const temp: T[] = this.value as T[];
      return temp.indexOf(option) > -1;
    }
    return false;
  }
}
