import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { IPerson, ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-persons.page",
  templateUrl: "./persons.page.html",
  styleUrls: ["./persons.page.less"]
})
export class PersonsPage implements OnInit {

  public JSON = JSON;
  public Layout = Layout;

  public personOptions: ISelectableOption<IPerson>[] = [];
  public selectedPerson: IPerson | null = null;

  public layoutOptions: ISelectableOption<Layout>[] = [];
  public selectedPersonLayout: Layout = Layout.Vertical;

  public cardMessage: string = "";

  public myProperty: string = "Hooray!!";
  public htmlProperty: string = "<i>La-la!!</i>"

  constructor(
    public personService: PersonService
  ) {

  }

  public ngOnInit(): void {
    this.layoutOptions.push({
      title: Layout.Horizontal,
      value: Layout.Horizontal
    });

    this.layoutOptions.push({
      title: Layout.Vertical,
      value: Layout.Vertical
    });

    if (this.personService.persons) {
      this.personOptions = this.personService.persons.map((person: IPerson) => {
        return {
          title: person.name,
          value: person
        };
      });

      this.selectedPerson = this.personService.persons.length > 0 ? this.personService.persons[0] : null;
    }
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
    //this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
  }
}
