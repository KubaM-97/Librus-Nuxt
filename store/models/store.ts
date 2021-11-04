import { User } from './loginForm'
import { Student } from './student'

export interface State {
    user: User,
    student: Student,
}
export interface Getters {
    fullNameGetters(student: string): string
}
export interface Mutations {
    updateStudentProperty(state: State, payload: User): void
    resetStudent(state: State, payload: User): void
    initGrade(state: State, payload: User): void
    updateGrade(state: State, payload: User): void
    removeGrade(state: State, payload: User): void
}
export interface Actions {
    checkLogData({ }, payload: Object): void
    addStudent({ }, payload: Object): void
    updateStudent({ }, payload: Object): void
}