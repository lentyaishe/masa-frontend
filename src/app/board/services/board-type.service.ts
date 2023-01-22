import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, Observable } from "rxjs";
import { Endpoints } from "src/app/constants";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { IBoardType } from "src/app/entities";

interface serverBoardType {
    id?: number;
    type: string;
}

interface serverBoardTypesResponse {
    types: serverBoardType[];

    update(id: number): Observable<void>;
}

interface IBoardTypeService {
    boardTypes$: Observable<IBoardType[]>;
}

@Injectable({
    providedIn: "root"
})
export class BoardTypeService implements IBoardTypeService {
    public boardTypes$: Observable<IBoardType[]> = this.authenticationService.get<serverBoardTypesResponse>(Endpoints.boardTypes)
        .pipe(
            map((response: serverBoardTypesResponse) => {
                return response.types.map((serverBoardType: serverBoardType) => this.toLocalBoardType(serverBoardType));
            })
        );

    constructor(
        private authenticationService: AuthenticationService
    ) { }
    
    public update(board: IBoardType): Observable<void> {
        return this.authenticationService.put<serverBoardType, serverBoardType>(`${Endpoints.boardType}${board.id}`, this.toServerBoardType(board))
            .pipe(
                map(() => {
                    this.boardTypes$.subscribe();
                    return;
                })
            );
    }

    private toLocalBoardType(input: serverBoardType): IBoardType {
        return {
            id: input.id as number,
            title: input.type
        };
    }

    private toServerBoardType(input: IBoardType): serverBoardType {
        return {
            type: input.title
        };
    }
}