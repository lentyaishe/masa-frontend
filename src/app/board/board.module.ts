import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { States } from "../constants";
import { AuthenticationGuard } from "../core/guards/authentication.guard";
import { BoardTypesPage } from "./pages/board-types/board-types.page";

const routes: Routes = [
    { path: States.boardTypes, component: BoardTypesPage, canActivate: [AuthenticationGuard] },
    { path: States.boardTypeById, component: BoardTypesPage, canActivate: [AuthenticationGuard] },
];

@NgModule({
    declarations: [
        BoardTypesPage
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
    providers: [AuthenticationGuard]
})
export class BoardModule {}
