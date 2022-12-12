import { Injectable } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { IPerson } from "src/app/entities";
import { LocalStorageService } from "./local-storage.service";

interface storedPerson {
    name: string;
    id: number;
    address: string;
    email: string;
    gender: string;
    birthdate: string;
    salary: number;
}

interface IPersonService {
    persons: IPerson[];

    initialize(): void;
    save(): void;
}

@Injectable({
    providedIn: "root"
})
export class PersonService implements IPersonService {
    private _persons: IPerson[] = [];

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    public get persons(): IPerson[] {
        return this._persons;
    }

    public initialize(): void {
        const persons: storedPerson[] | null = this.localStorageService.get(LocalStorageKeys.PERSONS);

        if (persons) {
            this._persons = persons.map((person: storedPerson) => this.toLocal(person));
        }
    }

    public save(): void {
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }

    private toLocal(person: storedPerson): IPerson {
        return {
            name: person.name,
            id: person.id,
            address: person.address,
            email: person.email,
            gender: person.gender,
            birthdate: new Date(person.birthdate),
            salary: person.salary
        };
    }
}
