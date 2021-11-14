import { getAccessorType, getterTree, mutationTree } from 'typed-vuex'

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
  test: 'teścik',
  student: getDefaultStudent,
  auth:{
    loggedIn: false,
    user: {}
  }
})

export const getters = getterTree(state, {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
})

export const mutations = mutationTree(state, {
  updateStudentProperty(state, payload) {
    if(payload.subProperty) state.student[payload.property][payload.subProperty] = payload.value;
    else state.student[payload.property] = payload.value;
  },
  resetStudent(state) {
    state.student = {...getDefaultStudent}
  },
  initGrade(state) {
    state.student.grades.push(getDefaultGrade)
  },
  updateGrade(state, payload) {
    state.student.grades[payload.index] = payload.grade;
  },
  removeGrade(state, payload) {
    state.student.grades[payload] = getDefaultGrade;
  },
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
})