import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "doubleMe" })
export class DoublePipe implements PipeTransform {

    public transform(value: number | undefined): number | undefined {
        if (value) {
            return value * 2;
        }
        else {
            return undefined;
        }
    }
}