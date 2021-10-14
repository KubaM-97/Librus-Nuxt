import { HostAddress } from "mongodb"

export type SignInData = {
    login: string,
    password: string
}
export type SingleGrade = {
    score: number,
    weight: number,
    description: string,
    date: never
}
export type User = {
    id?: number,
    lastName: string,
    firstName: string,
    group: string
}
export interface State {
    isLogged: boolean,
    user: User,
    student: any,
    // student: Student,
}
export interface Getters {
    fullNameGetters(student: string): string
}
export interface Mutations {
    toggleLog(state: State): void,
    setUser(state: State, payload: User): void
}
export interface Actions {
    checkLogData(context: any, payload: Object): void
}

type Parent = {
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
}
type Address = {
    name: string,
    nr: number,
    flat: number,
    postcode: string,
    city: string,
}

// export interface Student {
//     _id?: Object,
//     firstName: string,
//     lastName: string,
//     pesel: number,
//     phone: number,
//     email: string,
//     grades: SingleGrade[],
//     street: Address,
//     mother: Parent,
//     father: Parent,
// }