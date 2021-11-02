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
    pesel: '',
    phone: '',
    email: '',
    grades: [],
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
  },
  gradesLength: 1,
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
  updateStudent(state: State, payload) :void {
    console.log('mutacja:', payload);
    if(payload.subProperty) state.student[payload.property][payload.subProperty] = payload.value;
    else state.student[payload.property] = payload.value;
  },
  increase(state):void{
    state.gradesLength++
  },
  setStudent(state, payload):void{
    console.log(payload);
    state.student = payload
  },
  resetStudent(state: State, payload) :void {
    state.gradesLength = 1

    state.student = {
        firstName: '',
        lastName: '',
        pesel: '',
        phone: '',
        email: '',
        grades: [],
        address: {
          streetName: '',
          streetNr: '',
          flatNr: '',
          postCode: '',
          city: ''
        },
        mother: {
          firstName: '',
          lastName: '',
          phone: '',
          email: ''
        },
        father: {
          firstName: '',
          lastName: '',
          phone: '',
          email: ''
        }
      
    }
    console.log(state);
  },
  removeGrade(state: State, payload: any) :void {
    state.student.grades[payload] = {
      score: '',
      weight: '',
      description: '',
      date: '',
    }
  },
})
export const actions = actionTree(
  { state },
  {
    async checkLogData({commit}: {commit: Commit}, payload: SignInData): Promise<any> {
      return axios.post('/api/users/', {
        login: payload.login, 
        password: payload.password
      })
      // .then(response => {return response.data}).catch(err => err)
    //   return new Promise((resolve, reject) => {
    //   axios.post('/api/users/', {
    //     login: payload.login, 
    //     password: payload.password
    //   }).then(response => resolve(response)).catch(err => reject(err))
    // })
  },
    async addStudent({commit}: {commit: Commit}, payload: Student): Promise<any> {
      return new Promise((resolve, reject) => {
        axios.post("/api/students/new", {
          student: payload
        }).then(response=>resolve(response)).catch(err => reject(err))
    })
  },
    async updateStudent2({commit}: {commit: Commit}, payload: Student): Promise<any> {
      return new Promise((resolve, reject) => {
        axios.put(`/api/students/${payload._id}`, {
          student: payload
        }).then(response=>resolve(response)).catch(err => reject(err))
    })
  },
    async fetchUser({commit}: {commit: Commit}, payload: SignInData): Promise<void> {
      console.log(payload);
      await axios.get(`/api/students/${payload}`).then(response => {
        console.log('actions', response);
        commit("setStudent", response.data);
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