import { Component } from "@angular/core";
import { IUser } from "src/app/entities";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { States } from "src/app/constants";

@Component({
    selector: "app-login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.less"]
})
export class LoginPage {
    public user: IUser;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.user = {} as any;
        this.initialize();
    }

    public onLoginClick(): void {
        this.authenticationService.login(this.user)
            .subscribe(() => {
                console.log("Logged in");

                this.router.navigate([States.boardTypes, 2]);

                // this.userService.getUserById(2)
                //     .subscribe((result: IUserInfo) => console.log(result));
            });
    }

    public onClearClick(): void {
        this.initialize();
    }

    private initialize(): void {
        this.user = {
            username: "lentyai",
            password: "12345678"
        };
    }
}
