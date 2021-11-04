import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

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
  student: getDefaultStudent
})

type RootState = ReturnType<typeof state>


export const mutations = mutationTree(state, {
  updateStudentProperty(state: State, payload): void {
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
    async addStudent({ }, payload: Student): Promise<void> {
      await axios.post("/api/students/new", {
        student: payload
      })
    },
    async updateStudent({ }, payload: any): Promise<any> {
      await axios.put(`/api/students/${payload._id}`, {
        student: payload.student,
        group: payload.group
      })
    }
  }
)

export const accessorType = getAccessorType({
  state,
  mutations,
  actions,
})