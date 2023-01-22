export class LocalStorageKeys {
    public static PERSONS: string = "PERSONS";
}

export class States {
    public static persons: string = "persons";
    public static rxjs: string = "rxjs";
    public static login: string = "login";
    public static flexBasics: string = "flex-basics";

    public static boardTypes: string = "board-types";
}

export class Endpoints {
    private static baseUrl: string = "http://localhost:6060/"

    public static login: string = `${Endpoints.baseUrl}auth/login`;
    public static userById: string = `${Endpoints.baseUrl}user/`;

    public static boardTypes: string = `${Endpoints.baseUrl}general/board-types/`;
}
