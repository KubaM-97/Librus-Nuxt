const { Router } = require('express')
import { mongo } from '../mongodb'

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

router.get('/students/:id', async function (req, res, next) {
  const id = parseInt(req.params.id)

  try{

    // await collection.find({
    //   id
    // }).then(data => res.json(data));
    await collection.find(id).then(data => {
      data ? res.json(data) : res.sendStatus(404)
    });

  } catch (err) {
    // res.throw(500, err)
  }
  
})

module.exports = router
