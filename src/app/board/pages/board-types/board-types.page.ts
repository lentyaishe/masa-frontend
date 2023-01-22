import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, Observable } from "rxjs";
import { IBoardType, IBoardTypesPageParams } from "src/app/entities";
import { BoardTypeService } from "../../services/board-type.service";

@Component({
    selector: "app-board-types",
    templateUrl: "./board-types.page.html",
    styleUrls: ["./board-types.page.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardTypesPage implements OnInit {
    private _boardTypesData$: Observable<IBoardType[]> = this.boardTypeService.boardTypes$;
    
    private _refreshSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private _refreshAction$: Observable<number> = this._refreshSubject.asObservable();

    public boardTypes$: Observable<IBoardType[]> = combineLatest([
        this._boardTypesData$,
        this._refreshAction$
    ])
        .pipe(
            map(([boards, _]) => {
                return boards;
            }),
            catchError((error) => {
                console.error(error);
                return EMPTY;
            })
        );
    
    constructor(
        private boardTypeService: BoardTypeService,
        private changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe((value: Params) => {
            const params: IBoardTypesPageParams = value as IBoardTypesPageParams;
            console.log("Passed id:", params.id);
        });
    }
    
    public onUpdateClick(): void {
        this.boardTypeService.update({
            id: 22,
            title: "New title from client"
        })
            .subscribe(() => {
                this._refreshSubject.next(0);
                this.changeDetectorRef.detectChanges();
            });
    }
}
