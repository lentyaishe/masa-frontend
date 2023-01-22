import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { States } from "src/app/constants";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private authenticationService: AuthenticationService,
        public router: Router
    ) { }
    
    public canActivate(): boolean {
        if (!this.authenticationService.isAuthenticated) {
            this.router.navigate([States.login]);
            return false;
        }

        return true;
    }
}