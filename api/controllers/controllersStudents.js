import { mongo } from '../mongodb'
const mongodb = require('mongodb')
class StudentController {
  async getAllStudents(req, res) {
    console.log('przesłąne:', req.body);
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
    const id = req.params.id;
    console.log(req.body);
    const group = req.body.group;
    
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group||'3B'}`);

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
    const student = req.body.student;
    const group = req.body.group;

    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);
      await collection.insertOne(student)

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
