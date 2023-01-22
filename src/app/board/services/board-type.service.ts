import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Endpoints } from "src/app/constants";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { IBoardType } from "src/app/entities";

interface serverBoardType {
    id: number;
    type: string;
}

interface serverBoardTypesResponse {
    types: serverBoardType[];
}

interface IBoardTypeService {
    get(): Observable<IBoardType[]>;
}

@Injectable({
    providedIn: "root"
})
export class BoardTypeService implements IBoardTypeService {

    constructor(
        private authenticationService: AuthenticationService
    ) {}

    public get(): Observable<IBoardType[]> {
        return this.authenticationService.get<serverBoardTypesResponse>(Endpoints.boardTypes)
            .pipe(
                map((response: serverBoardTypesResponse) => {
                    return response.types.map((serverBoardType: serverBoardType) => this.toLocalBoardType(serverBoardType));
                })
            );
    }

    private toLocalBoardType(input: serverBoardType): IBoardType {
        return {
            id: input.id,
            title: input.type
        };
    }
}