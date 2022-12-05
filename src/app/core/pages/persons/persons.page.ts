import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { LocalStorageService } from "../../services/local-storage.service";

interface IPerson {
  name: string;
  id: number;
  address: string;
  email: string;
}

@Component({
  selector: "app-persons.page",
  templateUrl: "./persons.page.html",
  styleUrls: ["./persons.page.less"]
})
export class PersonsPage implements OnInit {

  public JSON = JSON;

  public persons: IPerson[] | null = null;
  public cardMessage: string = "";

  public myProperty: string = "Hooray!!";
  public htmlProperty: string = "<i>La-la!!</i>"

  constructor(
    private localStorageService: LocalStorageService
  ) {

  }

  public ngOnInit(): void {
    this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);
  }

  public onClickMeClick(): void {
    this.myProperty = "New data!!";
  }

  public onCardModeChanged(isEdit: boolean, index: number): void {
    this.cardMessage = isEdit ?
      "Please, fill the data" :
      "Data saved";

    // console.log("Index: ", index);
  }

  public onSaveClicked(): void {
    this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
  }
}
