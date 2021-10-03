import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import { SignInData, User, State, Getters, Mutations, Actions } from '@/store/models/store.models';
import { Context } from '@nuxt/types'
import axios from 'axios';
import { Commit } from 'vuex'; 
type RootState = ReturnType<typeof state>
export const state = () => ({
  isLogged: true,
  user: {
    lastName: '',
    firstName: '',
    group: ''
  },
  newGrade:{
      marks: [],
      weights: [],
      descriptions: [],
      dates: []
  },
}) as State


const getters = {
  fullNameGetters: (student: any) => `${student.lastName.toUpperCase()} ${student.firstName}`
}

const mutations = mutationTree(state, {
  toggleLog(state: State): void {
    state.isLogged = !state.isLogged;
  },
  setUser(state: State, payload: User): void {
    state.user = payload;
  },
  setStudentsGroup(state: State, payload: User): void {
    state.user = payload;
  }
})

const actions = actionTree(
  { state },
  {
    fetchUser({commit}: {commit: any}, payload: SignInData): void {
      axios.post('/api/user/', {
        login: payload.login, 
        password: payload.password
      }).then(response => commit("setUser", response.data.data))
    },

    fetchStudents({commit, state}: any): void {
      axios.post("/api/students/", {
        group: state.user.group
      }).then((response)=> commit("setStudentsGroup", response.data.students))
    }
  }
)

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
})