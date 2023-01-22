import { Params } from "@angular/router";

export interface ISelectableOption<T> {
    title: string;
    value: T;
}

export interface IPerson {
    name: string;
    id: number;
    address: string;
    email: string;
    gender: string;
    birthdate: Date;
    salary: number;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IUserInfo {
    id: number;
    name: string;
}

export interface IBoardType {
    id: number;
    title: string;
}

export interface IBoardTypesPageParams {
    id: number;
}
