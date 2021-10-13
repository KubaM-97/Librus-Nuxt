const { Router } = require('express')
import { mongo } from '../mongodb'
const mongodb = require('mongodb')
const router = Router()

router.post('/students', async function (req, res) {

  const group = req.body.group;

  try {
    const db = await mongo.connect('students');
    const collection = db.collection(`group_${group}`);

    const results = await collection.find().toArray()
    res.json(results)
    
    mongo.close();

  } catch (err) {
    // res.throw(500, err)
  }

})

router.post('/students/new', async function (req, res) {

  const student = req.body.student;

  try {
    const db = await mongo.connect('students');
    const collection = db.collection(`group_${group}`);

    const results = await collection.insertOne({
      student
    }).$sort({
        ss: student.lastName
    })

    res.json(results)
    
    mongo.close();

  } catch (err) {
    // res.throw(500, err)
  }

})

router.get('/students/:id', async function (req, res, next) {
  const id = req.params.id
  console.log(id);
  try{
    const db = await mongo.connect('students');
    const collection = db.collection(`group_3B`);

    await collection.findOne({_id: mongodb.ObjectId(id)}).then(data => {
      data ? res.json(data) : res.sendStatus(404)
    });

  } catch (err) {
    console.log('błąd', err);
    // res.throw(500, err)
  }
  
})

module.exports = router
