import { ErrorHandler } from "@angular/core";

export class SystemErrorHandler implements ErrorHandler {

    public handleError(error: any) {
        console.log("Unhandled exception caught:", error);
    }
}
