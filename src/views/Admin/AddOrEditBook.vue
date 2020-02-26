<template>
  <div class="signup row">
    <div class="col-md-10">
      <div class="row">
        <BackButton/>
        <h1 class="text-left">{{ $t('book_fields.title') }}</h1>
      </div>
      <div class="col-md-8">
        <form @submit.prevent="submit" class="mt-5">
          <div class="form-group row">
            <label for="inputTitle" class="col-sm-4 col-form-label">{{ $t('book_fields.b_title') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.title" type="text" class="form-control" id="inputTitle" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputAuthor" class="col-sm-4 col-form-label">{{ $t('book_fields.b_author') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.author" type="text" class="form-control" id="inputAuthor" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputCover" class="col-sm-4 col-form-label">{{ $t('book_fields.b_cover') }}</label>
            <div class="col-sm-8">
              <input type="file" @change="onFileChange" style="display:none" ref="fileInput" :required="$route.params.id === null">
              <div
                @click="$refs.fileInput.click()"
                class="cover-image-wrapper p-1 rounded border bg-secondary"
                :style="{ backgroundImage: 'url(' + credentials.image + ')'}"
                >
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPrice" class="col-sm-4 col-form-label">{{ $t('book_fields.b_price') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.price" type="number" class="form-control" id="inputPrice" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="promotions" class="col-sm-4 col-form-label">{{ $t('book_fields.b_promotion') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.promotion" type="checkbox" class="" id="promotions">
            </div>
          </div>
          <button type="submit" class="btn btn-primary float-right">{{ $t('book_fields.btn_text') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'EditBookPage',
  components: {
    BackButton: () => import('@/components/BackButton')
  },
  async mounted () {
    // checks if we are trying to edit a book
    // id would exist if we are trying to edit
    if (this.$route.params.id) {
      const check = this.books.some((book) => book.id === this.$route.params.id)
      if (!check) {
        await this.getBooks()
      }
      const book = this.books.filter((book) => book.id === this.$route.params.id)
      if (book.length > 0) {
        this.credentials = book[0]
      }
    }
  },
  data () {
    return {
      credentials: {
        title: '',
        author: '',
        image: '',
        date: new Date().toLocaleDateString(),
        price: '',
        promotion: false
      }
    }
  },
  methods: {
    ...mapActions(['getBooks', 'updateBook', 'createBook']),
    async submit () {
      if (this.$route.params.id) {
        await this.updateBook(this.credentials)
      } else {
        await this.createBook(this.credentials)
      }
      this.$router.go(-1)
    },
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        this.credentials.image = e.target.result
      }
      reader.readAsDataURL(file)
    }
  },
  computed: {
    ...mapState(['books'])
  }
}
</script>
<style lang="scss" scoped>
.cover-image-wrapper{
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center;
}
</style>
