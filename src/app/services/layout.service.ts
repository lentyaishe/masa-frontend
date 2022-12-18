import { Injectable } from "@angular/core";

interface ILayoutService{
  footerMessage: string;
}

@Injectable({
  providedIn: "root"
})
export class LayoutService implements ILayoutService {

  private _footerMessage: string = "";

  constructor() { }

  public get footerMessage(): string {
    return this._footerMessage;
  }

  public set footerMessage(value: string) {
    this._footerMessage = value;
  }
}
