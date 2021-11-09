import { Student } from './student'

export interface State {
    student: Student,
}
export interface Getters {
    fullNameGetters(student: string): string
}
export interface Mutations {
    updateStudentProperty(state: State, payload: any): void
    resetStudent(state: State, payload: any): void
    initGrade(state: State, payload: any): void
    updateGrade(state: State, payload: any): void
    removeGrade(state: State, payload: any): void
}