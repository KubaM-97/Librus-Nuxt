export const getDefaultGrade = {
  score: '',
  weight: '',
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
})

export const getters = {
  loggedInUser(state) {
    return state.auth.user
  },
}

export const mutations = {
  updateStudentProperty(state, payload) {
    if (payload.subProperty) state.student[payload.property][payload.subProperty] = payload.value;
    else state.student[payload.property] = payload.value;
  },
  resetStudent(state) {
    state.student = {
      ...getDefaultStudent
    }
  },
  initGrade(state) {
    state.student.grades.push(getDefaultGrade)
  },
}
