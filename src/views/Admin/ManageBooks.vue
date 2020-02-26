<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <BackButton/>
        <h1 class="text-left">{{ $t('dashboard.manage_books') }}</h1>
        <button class="ml-auto rounded" @click.prevent="$router.push('/admin/add-book')">{{ $t('util.add_btn') }}</button>
      </div>
      <b-table
        :data="books"
        :bordered="true"
        :striped="true"
        :loading="loading">

        <template slot-scope="props">
            <b-table-column field="id" :label="$t('table.id')" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="title" :label="$t('table.title')">
                {{ props.row.title }}
            </b-table-column>

            <b-table-column field="author" :label="$t('table.author')">
                {{ props.row.author }}
            </b-table-column>

            <b-table-column field="date" :label="$t('table.date')" centered>
                {{ props.row.date }}
            </b-table-column>

            <b-table-column label="Options">
                <router-link :to="{ name: 'bookEdit', params: { id: `${props.row.id}` } }">{{ $t('table.edit') }}</router-link>
                <span class="m-1">-</span>
                <a href="#" @click.prevent="deleteBook(props.row.id)">{{ $t('table.delete') }}</a>
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
  components: {
    BackButton: () => import('@/components/BackButton')
  },
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
