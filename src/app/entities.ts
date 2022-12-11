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
