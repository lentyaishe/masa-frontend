import { Injectable } from "@angular/core";

interface ILocalStorageService {
    get<T>(key: string): T | null;
    set<T>(key: string, value: T): void;
}

@Injectable({
    providedIn: "root"
})
export class LocalStorageService implements ILocalStorageService {

    public get<T>(key: string): T | null {
        const value: string | null = localStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
        else {
            return null;
        }
    }

    public set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}