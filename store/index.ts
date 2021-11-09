import { getAccessorType, getterTree, mutationTree } from 'typed-vuex'

import { State, Mutations, Student } from '@/store/models';

const getDefaultGrade = {
  score: null,
  weight: null, 
  description: '',
  date: ''
}
const getDefaultStudent = {
  firstName: '',
  lastName: '',
  pesel: '',
  phone: '',
  email: '',
  grades: [getDefaultGrade],
  address: {
    streetName: '',
    streetNr: '',
    flatNr: '',
    postCode: '',
    city: '',
  },
  mother: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  father: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  }
}
export const state = () => ({
  student: getDefaultStudent,
  auth:{
    loggedIn: false,
    user: {}
  }
})

type RootState = ReturnType<typeof state>
type ExactlyOne<T, TKey = keyof T> = TKey extends keyof T
  ? { [key in Exclude<keyof T, TKey>]?: never } & { [key in TKey]: T[key] }
  : never;
export const getters = getterTree(state, {
    isAuthenticated(state: RootState) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state: RootState) {
      return state.auth.user
    }
})
export const mutations = mutationTree(state, {
  // updateStudentProperty(state: State, payload: keyof Student): void {
  updateStudentProperty(state: State, payload: any): void {
    // state.student[payload.property = payload.value
    if(payload.subProperty) state.student[payload.property][payload.subProperty] = payload.value;
    else state.student[payload.property] = payload.value;
  },
  resetStudent(state: State): void {
    state.student = getDefaultStudent
  },
  initGrade(state: State): void {
    state.student.grades.push(getDefaultGrade)
  },
  updateGrade(state: State, payload): void {
    state.student.grades[payload.index] = payload.grade;
  },
  removeGrade(state: State, payload: any): void {
    state.student.grades[payload] = getDefaultGrade;
  },
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
})