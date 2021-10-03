export type SignInData = {
    login: string,
    password: string
}
type SingleGrade = {
    marks: number[],
    weights: number[],
    descriptions: string[],
    dates: string[]
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
    newGrade: SingleGrade,
}
export interface Getters {
    fullNameGetters(student: string): string
}
export interface Mutations {
    toggleLog(state: State): void,
    setUser(state: State, payload: User): void
}
export interface Actions {
    checkLogData(context: any, payload: Object): void,
    fetchStudents(context: any): void,
}