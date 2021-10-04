import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import { SignInData, User, State, Getters, Mutations, Actions } from '@/store/models/store.models';
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
  newGrade:{
      score: [],
      weight: [],
      description: [],
      date: []
  },
})


export const getters = {
  fullNameGetters: (student: any) => `${student.lastName.toUpperCase()} ${student.firstName}`
}

export const mutations = mutationTree(state, {
  setEmail(){
    console.log('dddddddd');
  },
  toggleLog(state: State): void {
    state.isLogged = !state.isLogged;
  },
  setUser(state: State, payload: User): void {
    state.user = payload;
  },
})

export const actions = actionTree(
  { state },
  {
    async checkLogData({commit}: {commit: Commit}, payload: SignInData): Promise<void> {
      await axios.post('/api/users/', {
        login: payload.login, 
        password: payload.password
      }).then(response => {
        commit("setUser", response.data);
        commit("toggleLog");
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