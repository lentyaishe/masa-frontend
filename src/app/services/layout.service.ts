import { LayoutDirection } from "./../enums";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

interface ILayoutService{
  layoutDirection: LayoutDirection;
  footerMessage: string;

  onLayoutDirectionChanged: Observable<void>;
}

@Injectable({
  providedIn: "root"
})
export class LayoutService implements ILayoutService {

  private _footerMessage: string = "";
  private _layoutDirection: LayoutDirection = LayoutDirection.Ltr;

  private _onLayoutDirectionChanged: Subject<void> = new Subject<void>();

  constructor() { }

  public get layoutDirection(): LayoutDirection {
    return this._layoutDirection;
  }

  public set layoutDirection(value: LayoutDirection) {
    this._layoutDirection = value;
    this._onLayoutDirectionChanged.next();
  }

  public get footerMessage(): string {
    return this._footerMessage;
  }

  public set footerMessage(value: string) {
    this._footerMessage = value;
  }

  public get onLayoutDirectionChanged(): Observable<void> {
    return this._onLayoutDirectionChanged.asObservable();
  }
}
