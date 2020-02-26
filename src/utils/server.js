import { Server, Model, Factory, hasMany, belongsTo } from 'miragejs'
import faker from 'faker'

export default new Server({
  models: {
    user: Model.extend({
      orders: hasMany()
    }),
    book: Model,
    order: Model.extend({
      user: belongsTo()
    })
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
      image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg'
    })
  },
  seeds (server) {
    server.db.loadData({
      books: [
        {
          author: 'Adam Shift',
          title: 'Never walk alone in the dark',
          price: 5,
          date: new Date().toLocaleDateString(),
          image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg',
          promotion: true
        },
        {
          author: 'Sr. Olm',
          title: 'Sweet sun in the garden',
          price: 10,
          date: new Date().toLocaleDateString(),
          image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg',
          promotion: false
        },
        {
          author: 'Mathew Cook',
          title: 'Home alone with my shadow',
          price: 15,
          date: new Date().toLocaleDateString(),
          image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg',
          promotion: true
        },
        {
          author: 'Johnny Qirk',
          title: 'Security and a will to live',
          price: 7,
          date: new Date().toLocaleDateString(),
          image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg',
          promotion: false
        },
        {
          author: 'Jame Battle',
          title: 'War front stories and lasting effect',
          price: 8,
          date: new Date().toLocaleDateString(),
          image: process.env.VUE_APP_BOOK_COVER || '/img/cover2.97f2c218.jpg',
          promotion: true
        }
      ],
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
      ],
      orders: [
        {
          book: 'Yell all you want',
          date: '1/2/2020',
          userId: '1'
        },
        {
          book: 'Never let go',
          date: '5/2/2020',
          userId: '2'
        }
      ]
    })
  },
  routes () {
    this.timing = 500
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
        id: user.id,
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

    // order routes
    this.get('/api/orders', (schema) => {
      const orders = schema.orders.all()
      const data = orders.models.map(order => {
        return {
          id: order.id,
          book: order.book,
          date: order.date,
          user: order.user
        }
      })
      return {
        orders: data
      }
    })

    this.post('/api/order', (schema, request) => {
      const newOrder = JSON.parse(request.requestBody)
      return schema.orders.create(newOrder)
    })

    this.del('/api/order/:id', (schema, request) => {
      schema.orders.find(request.params.id).destroy()
      return { message: 'Success' }
    })
  }
})
