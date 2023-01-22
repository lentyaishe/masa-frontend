import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Endpoints } from "src/app/constants";
import { IUser } from "src/app/entities";

interface ILoginResponse {
    token: string;
}

interface ILoginRequest {
    login: string;
    password: string;
}

interface IHttpRequestOptions {
    headers?: HttpHeaders;
}

interface IAuthenticationService {
    login(user: IUser): Observable<void>;
    get<T>(url: string): Observable<T>;
}

@Injectable({
    providedIn: "root"
})
export class AuthenticationService implements IAuthenticationService {
    private _token: string = "";

    constructor(
        private httpService: HttpClient
    ) { }
    
    public login(user: IUser): Observable<void> {
        return this.httpService.post<ILoginResponse>(Endpoints.login, this.toServerUser(user))
            .pipe(
                map((result: ILoginResponse) => {
                    this._token = result.token;
                })
            );
    }

    public get<T>(url: string): Observable<T> {
        return this.httpService.get<T>(url, this.getHttpOptions());
    }

    private getHttpOptions(): IHttpRequestOptions {
        const headers: HttpHeaders = new HttpHeaders()
            .set("Authorization", `Bearer ${this._token}`);

        const options: IHttpRequestOptions = {
            headers: headers
        };

        return options;
    }

    private toServerUser(user: IUser): ILoginRequest {
        return {
            login: user.username,
            password: user.password
        };
    }
}
