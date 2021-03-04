const express = require('express')
const app = express()

app.use(express.json())

const morgan = require('morgan')

morgan.token('body', function(req, res) {return JSON.stringify(req.body)});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

//MONGODB
require('dotenv').config()
const Person = require('./models/person')


const generateId = () => {
  return Math.floor(Math.random()*100000)+1
}

let persons = []

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people. <br>
  	${Date()}`)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {

  const body = request.body

  if(!body.name){
  	return response.status(400).json({ 
      error: 'Name missing' 
    })
  }
  if(!body.number){
  	return response.status(400).json({ 
      error: 'Number missing' 
    })
  }

  if(persons.find(candidate => candidate.name === body.name)){
  	return response.status(400).json({
  		error: 'Name must be unique'
  	})
  }

  const person = new Person({
   	name: body.name,
   	number: body.number,
   	date: Date()
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })

})



const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})