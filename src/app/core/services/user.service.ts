import { Endpoints } from "./../../constants";
import { map, Observable } from "rxjs";
import { IUserInfo } from "./../../entities";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

interface IUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  createDate: Date;
  updateDate: Date;
}

interface IUserService {
    getUserById(id: number): Observable<IUserInfo>;
}

@Injectable({
  providedIn: "root"
})
export class UserService implements IUserService {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public getUserById(id: number): Observable<IUserInfo> {
    return this.authenticationService.get<IUserResponse>(`${Endpoints.userById}${id}`)
      .pipe(
        map((result: IUserResponse) => {
          return this.toLocalUserInfo(result);
        })
    );
  }

  private toLocalUserInfo(input: IUserResponse): IUserInfo {
    return {
      id: input.id,
      name: `${input.firstName} ${input.lastName}`
    };
  }
}
