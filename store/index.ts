import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex'

import { SignInData, State, Mutations, Actions, Student } from '@/store/models';
import axios from 'axios';

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
  user: {
    lastName: '',
    firstName: '',
    group: ''
  },
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
export const actions = actionTree(
  { state },
  {
    async checkLogData({ }, payload: SignInData): Promise<any> {
      return await axios.post('/api/users/', {
        login: payload.login,
        password: payload.password
      })
    },
    async addStudent({ }, payload: any): Promise<void> {
      console.log("store", payload.student, payload.token);

      await axios.post("/api/auth/students/new", {
        student: payload.student
      },{headers: payload.token})
    },
    async updateStudent({ }, payload: any): Promise<any> {
      await axios.put(`/api/auth/students/${payload._id}`, {
        student: payload.student,
        group: payload.group
      })
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
})