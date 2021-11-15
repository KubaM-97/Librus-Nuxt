'use strict'

const database = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    project: process.env.DB_PROJECT,
}

export default `mongodb+srv://${database.username}:${database.password}@test.fya0l.mongodb.net/${database.project}?retryWrites=true&w=majority`
