'use strict'

const mongodb = require('mongodb')
import url from './config'

const MongoClient = mongodb.MongoClient

class Mongo {
  constructor () {
    this.connection = null
    this.objectId = mongodb.ObjectId
  }

  async connect (dbname) {
    this.connection = await MongoClient.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    return this.connection.db(dbname)
  }

  close () {
    this.connection.close()
  }
}
export const mongo = new Mongo()