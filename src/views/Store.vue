<template>
  <div class="row">
    <div class="col-md-6">
      <h1 class="text-left">Inventory</h1>
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    BookCard: () => import('@/components/BookCard')
  },
  async mounted () {
    await this.getBooks()
  },
  methods: {
    ...mapActions(['getBooks'])
  },
  computed: {
    ...mapState(['books'])
  }
}
</script>
