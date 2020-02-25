import { Server, Model, Factory } from 'miragejs'
import faker from 'faker'

export default new Server({
  models: {
    user: Model,
    book: Model
  },
  factories: {
    book: Factory.extend({
      author () {
        return faker.name.findName()
      },
      title () {
        return faker.lorem.sentence()
      },
      price: 5.00,
      date () {
        return faker.date.recent().toLocaleDateString()
      },
      image () {
        return faker.image.business()
      }
    })
  },
  seeds (server) {
    server.createList('book', 5)
    // server.create('user')
    // server.createList('user', 3)
  },
  routes () {
    // book routes
    this.get('/api/books', (schema) => {
      return schema.books.all()
    })

    this.post('/api/books', (schema, request) => {
      const newbBook = JSON.parse(request.requestBody).data
      return schema.books.insert(newbBook)
    })

    this.patch('/api/books/:id', (schema, request) => {
      const editedBook = JSON.parse(request.requestBody).data
      const book = schema.books.find(request.params.id)
      return book.update(editedBook)
    })

    // auth routes
    this.post('/api/login', (schema, request) => {
      const userDetails = JSON.parse(request.requestBody)
      const user = schema.users.findBy({ username: userDetails.username, password: userDetails.password })
      if (user === null) {
        return {
          error: 'User not found'
        }
      }
      return {
        username: user.username,
        email: user.email,
        role: user.role,
        lastName: user.lastName,
        firstName: user.firstName
      }
    })

    // user routes
    this.get('/api/users', (schema) => {
      return schema.users.all()
    })

    this.post('/api/user', (schema, request) => {
      const newUser = JSON.parse(request.requestBody)
      return schema.users.create(newUser)
    })
  }
})
