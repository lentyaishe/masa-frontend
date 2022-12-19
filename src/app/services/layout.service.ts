import { LayoutDirection } from "./../enums";
import { Injectable } from "@angular/core";

interface ILayoutService{
  layoutDirection: LayoutDirection;
  footerMessage: string;
}

@Injectable({
  providedIn: "root"
})
export class LayoutService implements ILayoutService {

  private _footerMessage: string = "";
  private _layoutDirection: LayoutDirection = LayoutDirection.Ltr;

  constructor() { }

  public get layoutDirection(): LayoutDirection {
    return this._layoutDirection;
  }

  public set layoutDirection(value: LayoutDirection) {
    this._layoutDirection = value;
  }

  public get footerMessage(): string {
    return this._footerMessage;
  }

  public set footerMessage(value: string) {
    this._footerMessage = value;
  }
}
