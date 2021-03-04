const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://phonebook_admin:${password}@cluster0.hriq0.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date
})

const Person = mongoose.model('Person', personSchema)


if(process.argv.length === 3){
  console.log('Phonebook:')

  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}else{
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
    date: new Date()
  })

  person.save().then(response => {
    console.log('person saved!')
    mongoose.connection.close()
  })

}




