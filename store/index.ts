import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex'

import { SignInData, User, State, Getters, Mutations, Actions, Student } from '@/store/models/store.models';
import { Context } from '@nuxt/types'
import axios from 'axios';
import { Commit } from 'vuex'; 
// type RootState = ReturnType<typeof state>
export const state = () => ({
  isLogged: true,
  user: {
    lastName: '',
    firstName: '',
    group: ''
  },
  student: {
    firstName: '',
    lastName: '',
    pesel: null,
    phone: null,
    email: '',
    grades: [],
    street: {
      name: '',
      nr: null,
      flat: null,
      postcode: '',
      city: '',
    },
    mother: {
      firstName: '',
      lastName: '',
      phone: null,
      email: '',
    },
    father: {
      firstName: '',
      lastName: '',
      phone: null,
      email: '',
    }
  }
})

type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  // email: (state: RootState) => state.email,

  // fullNameGetters: (student: any) => `${student.lastName.toUpperCase()} ${student.firstName}`
})

export const mutations = mutationTree(state, {
  toggleLog(state: State): void {
    state.isLogged = !state.isLogged;
  },
  setUser(state: State, payload: User): void {
    state.user = payload;
  },
  setStudent(state: State, payload: Student): void {
    state.student = payload;
  },
  // updateStudent(state: State, payload: { property}) :void {
  //   state.student[payload.property] = payload.value;
  // },
  removeGrade(state: State, payload: any) :void {
    state.student.grades.splice(payload, 1)
  },
})
export const actions = actionTree(
  { state },
  {
    // async checkLogData({commit}: {commit: Commit,}, payload: SignInData): Promise<void> {
    async checkLogData( context, payload: SignInData): Promise<void> {
      console.log(context);
      await axios.post('/api/users/', {
        login: payload.login, 
        password: payload.password
      })
    },
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
})