import { SystemErrorHandler } from "./error-handler";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        CoreModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        FormsModule,
        CommonModule
    ],
    providers: [
        { provide: ErrorHandler, useClass: SystemErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
