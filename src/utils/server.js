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
        return faker.lorem.text()
      },
      price: 5.00,
      date () {
        return faker.date.past().toLocaleDateString()
      }
    }),
    user: Factory.extend({
      firstName () {
        return faker.name.findName()
      },
      lasttName () {
        return faker.name.findName()
      },
      username () {
        return this.firstName.replace(' ', '').toLowerCase()
      },
      email () {
        return faker.internet.email()
      },
      password: 'secret',
      role (i) {
        const roles = ['User', 'Admin']
        return roles[i % roles.length]
      }
    })
  },
  seeds (server) {
    server.createList('book', 5)
    server.createList('user', 3)
  },
  routes () {
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
  }
})
