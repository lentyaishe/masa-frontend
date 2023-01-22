import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardTypesPage } from "./board-types.page";

describe("BoardTypesComponent", () => {
    let component: BoardTypesPage;
    let fixture: ComponentFixture<BoardTypesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BoardTypesPage]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BoardTypesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
