import { mongo } from '../mongodb'
const mongodb = require('mongodb')
class StudentController {
  async getAllStudents(req, res) {
    console.log('getallstudentes');
    const group = req.body.group;
    try {

      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      const results = await collection.find().toArray()

      results.length ? res.json(results) : res.sendStatus(404)

      mongo.close();

    } catch (err) {
      // console.error(err);
      res.sendStatus(500)
    }


  }
  async getStudent(req, res) {
    console.log('jakim prawem?');
    const id = req.params.id;
    const group = req.body.group;
    
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      await collection.findOne({
        _id: mongodb.ObjectId(id)
      }).then(data => {
        data ? res.json(data) : res.sendStatus(404)
      });

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }
  }
  async createStudent(req, res) {
    console.log('create2');
    const student = req.body.student;
    const group = req.body.group;

    try {
    console.log('1111111111111111111111');
    const db = await mongo.connect('students');
    console.log('2222222222222222222222222');
    const collection = db.collection(`group_${group}`);
    console.log('333333333333333333333333333');
    await collection.insertOne(student)
    console.log('44444444444444444444444');

      res.sendStatus(201)

      mongo.close();

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }

  }
  async updateStudent(req, res) {
    const student = req.body.student;
    console.log('oceny:', student.grades);
    const group = req.body.group;
    console.log(group);
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      await collection.updateOne(  {_id: mongodb.ObjectId(student._id)},
      {
        $set: {
          firstName: student.firstName,
          lastName: student.lastName,
          pesel: student.pesel,
          phone: student.phone,
          email: student.email,
          address: student.address,
          mother: student.mother,
          father: student.father,
          grades: student.grades,
        }
      }
      
      )
      res.sendStatus(201)

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }

  }
}
export const StudentActions = new StudentController()
// module.exports = new UserController()
