import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { States } from "../constants";
import { PersonCardComponent } from "./components/person-card/person-card.component";
import { PersonsPage } from "./pages/persons/persons.page";
import { NotFoundPage } from "./pages/404/404.page";
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { GenericMultiselectComponent } from './components/generic-multiselect/generic-multiselect.component';
import { DoublePipe } from "./pipes/double.pipe";
import { PersonService } from "./services/person.service";

const routes: Routes = [
  { path: States.persons, component: PersonsPage },
  { path: "**", component: NotFoundPage }
];

@NgModule({
  declarations: [
    PersonCardComponent,
    PersonsPage,
    NotFoundPage,
    RadioButtonComponent,
    GenericMultiselectComponent,
    DoublePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      PersonCardComponent
  ]
})
export class CoreModule {
  constructor(
    personService: PersonService
  ) {
    personService.initialize();
  }
}