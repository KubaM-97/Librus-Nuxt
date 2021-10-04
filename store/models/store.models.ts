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
    // newGrade: SingleGrade,
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