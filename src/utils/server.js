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
    server.db.loadData({
      users: [
        {
          firstName: 'Samson',
          lastName: 'Nwokike',
          email: 'nwokikesamson@gmail.com',
          username: 'radar',
          password: 'secret',
          role: 'Admin'
        },
        {
          firstName: 'William',
          lastName: 'Okafor',
          email: 'okaforwill@gmail.com',
          username: 'will',
          password: 'secret',
          role: 'User'
        }
      ]
    })
  },
  routes () {
    // book routes
    this.get('/api/books', (schema) => {
      return schema.books.all()
    })

    this.post('/api/book', (schema, request) => {
      const newBook = JSON.parse(request.requestBody)
      return schema.books.create(newBook)
    })

    this.patch('/api/books/:id', (schema, request) => {
      const editedBook = JSON.parse(request.requestBody)
      const book = schema.books.find(request.params.id)
      return book.update(editedBook)
    })

    this.del('/api/book/:id', (schema, request) => {
      schema.books.find(request.params.id).destroy()
      return { message: 'Success' }
    })

    // auth routes
    this.post('/api/login', (schema, request) => {
      const userDetails = JSON.parse(request.requestBody)
      const user = schema.users.findBy({ username: userDetails.username, password: userDetails.password })
      if (user === null) {
        return {
          error: 'User does not exist'
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

    this.patch('/api/users/:id', (schema, request) => {
      const editedUser = JSON.parse(request.requestBody)
      const user = schema.users.find(request.params.id)
      return user.update(editedUser)
    })

    this.del('/api/user/:id', (schema, request) => {
      schema.users.find(request.params.id).destroy()
      return { message: 'Success' }
    })
  }
})
