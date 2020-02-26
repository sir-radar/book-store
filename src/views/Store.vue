<template>
  <div class="row">
    <div class="col-md-6">
      <h1 class="text-left">{{ $t('store.title') }}</h1>
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        :customerId="authUser.id"
        @buyBook="buyBook"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Store',
  components: {
    BookCard: () => import('@/components/BookCard')
  },
  async mounted () {
    await this.getBooks()
  },
  methods: {
    ...mapActions(['getBooks', 'createOrder']),
    ...mapMutations(['showNotify']),
    async buyBook (credentials) {
      // checks if user is currently logged in before book can be bought
      if (this.authUser.id) {
        await this.createOrder(credentials)
        this.showNotify({
          type: 'success',
          message: this.$t('notify.success_message')
        })
      } else {
        this.showNotify({
          type: 'danger',
          message: this.$t('notify.error_message')
        })
      }
    }
  },
  computed: {
    ...mapState(['books', 'authUser'])
  }
}
</script>
