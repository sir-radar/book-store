<template>
  <div class="row">
    <div class="col-md-6">
      <h4 class="text-left">Recently added books</h4>
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
      />
    </div>
    <div class="col-md-6">
      <h4>Special offers</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    BookCard: () => import('@/components/BookCard')
  },
  data () {
    return {
      books: []
    }
  },
  mounted () {
    axios.get('/api/books')
      .then(res => { this.books = res.data.books })
  }
}
</script>
