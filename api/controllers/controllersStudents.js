import { mongo } from '../mongodb'
class StudentController {
  async getAllStudents(req, res) {
    console.log('getAllStudents');

    const group = req.body.group;
    try {

      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      const results = await collection.find().toArray()

      results.length ? res.json(results) : res.sendStatus(404)

      mongo.close();

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }


  }
  async getStudent(req, res) {
    console.log('getStudent');
    const name = decodeURIComponent(req.params.name)
    const lastName = name.split(' ')[0]
    const firstName = name.split(' ')[1]
    const group = req.body.group;
    console.log(lastName, firstName, group);
    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      await collection.findOne({
        lastName, firstName  
      }).then(data => {
        data ? res.json(data) : res.sendStatus(404)
      });

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }
  }
  async createStudent(req, res) {
    console.log('createStudent');
    const student = req.body.student;
    const group = req.body.group;

    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);
      const isStudentExists = await collection.findOne({
        lastName: student.lastName, firstName: student.firstName 
      })
      
      !isStudentExists ? await collection.insertOne(student) : res.sendStatus(422)

      const x = await collection.find({}).sort({lastName: -1})
      console.log(x);
      // await collection.find({}).sort({id:-1})


      res.sendStatus(201)

      mongo.close();

    } catch (err) {
      console.error(err);
      res.sendStatus(500)
    }

  }
  async updateStudent(req, res) {
    console.log('updateStudent');
    const student = req.body.student;
    const group = req.body.group;

    try {
      const db = await mongo.connect('students');
      const collection = db.collection(`group_${group}`);

      await collection.updateOne(  {
        lastName: student.lastName, firstName: student.firstName 
      },
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
