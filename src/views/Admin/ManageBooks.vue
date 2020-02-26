<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <button class="p-1 mr-4 rounded" @click.prevent="$router.go(-1)">Prev page</button>
        <h1 class="text-left">Manage Books</h1>
        <button class="ml-auto rounded" @click.prevent="$router.push('/admin/add-book')">Add book</button>
      </div>
      <b-table
        :data="books"
        :bordered="true"
        :striped="true">

        <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="title" label="Title">
                {{ props.row.title }}
            </b-table-column>

            <b-table-column field="author" label="Author">
                {{ props.row.author }}
            </b-table-column>

            <b-table-column field="date" label="Date" centered>
                {{ props.row.date }}
            </b-table-column>

            <b-table-column label="Options">
                <router-link :to="{ name: 'bookEdit', params: { id: `${props.row.id}` } }">Edit</router-link>
                <span class="m-1">-</span>
                <a href="#" @click.prevent="deleteBook(props.row.id)">Delete</a>
            </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ManageBooks',
  async mounted () {
    this.loading = true
    await this.getBooks()
    this.loading = false
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['getBooks', 'deleteBook'])
  },
  computed: {
    ...mapState(['books'])
  }
}
</script>
