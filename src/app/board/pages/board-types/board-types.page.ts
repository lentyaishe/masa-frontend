import { Component, OnInit } from "@angular/core";
import { IBoardType } from "src/app/entities";
import { BoardTypeService } from "../../services/board-type.service";

@Component({
    selector: "app-board-types",
    templateUrl: "./board-types.page.html",
    styleUrls: ["./board-types.page.less"]
})
export class BoardTypesPage implements OnInit {
    public boardTypes: IBoardType[] = [];
    
    constructor(
        private boardTypeService: BoardTypeService
    ) {}
    
    public ngOnInit(): void {
        this.boardTypeService.get()
            .subscribe((results: IBoardType[]) => {
                this.boardTypes = results;
            });
    }
}
