import { getAccessorType, getterTree, mutationTree } from 'typed-vuex'

import { State, Getters, Mutations, Student, Parent, Address, SingleGrade } from '@/store/models';

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
  test: 'test',
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
type UpdateStudent = {
  property: keyof Omit<Student, "_id"|"grades"|"address"|"mother"|"father">,
  value: string,
  subProperty?: keyof Student["address"|"mother"|"father"]
}

export const mutations = mutationTree(state, {
  updateStudentProperty(state: State, payload: UpdateStudent): void {
    // if(payload.subProperty) state.student[payload.property][payload.subProperty] = payload.value;
    // else state.student[payload.property] = payload.value;
  },
  resetStudent(state: State): void {
    state.student = {...getDefaultStudent}
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