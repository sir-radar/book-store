import { Server } from 'miragejs'

export default new Server({
  seeds (server) {
    server.db.loadData({
      books:[
        {
          author: 'Mark Noah',
          title: 'What happens in life',
          price: 5.00,
          date: new Date()
        },
        {
          author: 'Dick James',
          title: 'Tech updates',
          price: 10.00,
          date: new Date()
        }
      ]
    })
  },
  routes () {
    this.get('/api/books', (schema) => {
      return schema.db.books
    })

    this.post('/api/books', (schema, request) => {
      const book = JSON.parse(request.requestBody).data
      return schema.db.books.insert(book)
    })

    this.patch('/api/books/:id', (schema, request) => {
      const book = JSON.parse(request.requestBody).data
      return schema.db.books.update(request.params.id, book)
    })
  }
})
