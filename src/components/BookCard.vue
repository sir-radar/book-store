<template>
  <div class="d-flex align-items-center justify-content-between col-12 px-0">
    <div class="book-cover col-md-5 mb-2 px-0">
      <img class="" :src="book.image" alt="">
      <h5 class="">{{ book.title }}</h5>
    </div>
    <div class="author-details col-md-4">
      <h5>{{ book.author }}</h5>
      <p>{{ book.date }}</p>
    </div>
    <div class="col-md-3">
      <a href="#" @click.prevent="orderBook">Buy Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: Object,
    customerId: String
  },
  methods: {
    orderBook () {
      const credentials = {
        book: this.book.title,
        date: new Date().toLocaleDateString(),
        userId: this.customerId
      }
      this.$emit('buyBook', credentials)
    }
  }
}
</script>
