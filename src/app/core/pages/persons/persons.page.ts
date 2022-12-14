import { Component } from "@angular/core";
import { States } from "src/app/constants";
import { IPerson, ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { LayoutService } from "src/app/services/layout.service";
import { PersonService } from "../../services/person.service";
import { BasePage } from '../base-page';

@Component({
  selector: "app-persons.page",
  templateUrl: "./persons.page.html",
  styleUrls: ["./persons.page.less"]
})
export class PersonsPage extends BasePage {

  public JSON = JSON;
  public Layout = Layout;

  public personOptions: ISelectableOption<IPerson>[] = [];
  public selectedPersons: IPerson[] = [];

  public layoutOptions: ISelectableOption<Layout>[] = [];
  public selectedPersonLayout: Layout = Layout.Vertical;

  public cardMessage: string = "";

  public myProperty: string = "Hooray!!";
  public htmlProperty: string = "<i>La-la!!</i>"

  public filterPersonBy: string = "";
  public filteredPersons: IPerson[] = [];

  constructor(
    public personService: PersonService,
    layoutService: LayoutService
  ) {
    super(layoutService, States.persons);

    layoutService.footerMessage = "Now we are on a Persons page";

  }

  protected initialize(): void {
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

      this.filteredPersons = this.personService.persons;
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
    this.personService.save();
  }

  public setOptionValue<T>(property: string, value: T | T[]): void {
    (this as any)[property] = value;
  }

  public onFilterPersonChange(): void {
    const filterBy: string = this.filterPersonBy.toLowerCase();
    this.filteredPersons = this.personService.persons.filter((person: IPerson) => {
      return person.name.toLowerCase().indexOf(filterBy) > -1 || person.email.toLowerCase().indexOf(filterBy) > -1;
    });
  }
}
