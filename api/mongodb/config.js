'use strict'

const database = {
    username: 'KubaM97',
    password: 'Pieseł12',
    project: 'Librus',
}

export default `mongodb+srv://${database.username}:${database.password}@test.fya0l.mongodb.net/${database.project}?retryWrites=true&w=majority`
