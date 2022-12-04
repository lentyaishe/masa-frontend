import { NgModule } from "@angular/core";
import { PersonCardComponent } from "./components/person-card/person-card.component";

@NgModule({
  declarations: [
    PersonCardComponent
    ],
    exports: [
        PersonCardComponent
    ]
})
export class CoreModule {

}