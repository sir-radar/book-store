<template>
  <div class="row">
    <div class="col-md-6">
      <h4 class="text-left">{{ $t('home.recent_books') }}</h4>
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        :customerId="authUser.id"
        @buyBook="buyBook"
      />
    </div>
    <div class="col-md-6">
      <h4>{{ $t('home.promotions') }}</h4>
      <BookCard
        v-for="(book, index) in promotions"
        :key="index"
        :book="book"
        :customerId="authUser.id"
        @buyBook="buyBook"
      />

    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    BookCard: () => import('@/components/BookCard')
  },
  async beforeRouteEnter (to, from, next) {
    store.dispatch('getBooks').then(res => next())
  },
  methods: {
    ...mapActions(['createOrder']),
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
    ...mapState(['books', 'authUser']),
    // filter out books with special promotions
    promotions () {
      return this.books.filter(book => book.promotion === true)
    }
  }
}
</script>
