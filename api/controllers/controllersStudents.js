import { mongo } from '../mongodb'
const mongodb = require('mongodb')
class StudentController {
  async getAllStudents(req, res) {
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


  }
  async getStudent(req, res) {
    const id = req.params.id
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_3B`);

      await collection.findOne({
        _id: mongodb.ObjectId(id)
      }).then(data => {
        data ? res.json(data) : res.sendStatus(404)
      });

    } catch (err) {
      console.log('błąd', err);
      // res.throw(500, err)
    }
  }
  async createStudent(req, res) {
    const student = req.body.student;

    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_3B`);
      const results = await collection.insertOne(student)

      res.json(results)

      mongo.close();

    } catch (err) {
      // res.throw(500, err)
    }

  }
  async updateStudent(req, res) {
    const student = req.body.student;
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_3B`);

      await collection.updateOne(  {_id: mongodb.ObjectId(student._id)},
      {
        $set: {
          firstName: student.firstName,
          lastName: student.lastName,
          pesel: student.pesel,
          phone: student.phone,
          email: student.email,
          street: student.street,
          mother: student.mother,
          father: student.father,
          grades: student.grades,
        }
      }
      
      )
      res.sendStatus(201)

    } catch (err) {
      console.log('błąd', err);
      res.sendStatus(500)
    }

  }
}
export const StudentActions = new StudentController()
// module.exports = new UserController()
