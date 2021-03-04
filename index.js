const express = require('express')
const app = express()

app.use(express.json())

const morgan = require('morgan')

morgan.token('body', function(req, res) {return JSON.stringify(req.body)});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

const generateId = () => {
  return Math.floor(Math.random()*100000)+1
}

let persons = [
  {
  	name: "Henkilö A",
  	number: 100100,
    id: generateId(),
    date: Date()
  },
  {
  	name: "Henkilö B",
  	number: 200200,
    id: generateId(),
    date: Date()
  }
]

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people. <br>
  	${Date()}`)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
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

  const person = {
   	name: body.name,
   	number: body.number,
   	id: generateId(),
   	date: Date()
  }

  persons = persons.concat(person)

  response.json(person)

})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})