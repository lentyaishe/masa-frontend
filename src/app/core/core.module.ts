import { RxjsPage } from "./pages/rxjs/rxjs.page";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { States } from "../constants";
import { PersonCardComponent } from "./components/person-card/person-card.component";
import { PersonsPage } from "./pages/persons/persons.page";
import { NotFoundPage } from "./pages/404/404.page";
import { RadioButtonComponent } from "./components/radio-button/radio-button.component";
import { GenericMultiselectComponent } from "./components/generic-multiselect/generic-multiselect.component";
import { DoublePipe } from "./pipes/double.pipe";
import { PersonService } from "./services/person.service";
import { LoginPage } from "./pages/login/login.page";
import { FlexBasicsPage } from "./pages/flex-basics/flex-basics.component";
import { MatInputModule } from "@angular/material/input";
import { FilterObjectPipe } from "./pipes/filter.pipe";

const routes: Routes = [
  { path: States.persons, component: PersonsPage },
  { path: States.rxjs, component: RxjsPage },
  { path: States.flexBasics, component: FlexBasicsPage },
  { path: States.login, component: LoginPage },
  { path: "**", component: NotFoundPage }
];

@NgModule({
  declarations: [
    PersonCardComponent,
    PersonsPage,
    NotFoundPage,
    RadioButtonComponent,
    GenericMultiselectComponent,
    DoublePipe,
    RxjsPage,
    LoginPage,
    FlexBasicsPage,
    FilterObjectPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatInputModule
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
