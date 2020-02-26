<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <BackButton/>
        <h1 class="text-left">{{ $t('dashboard.manage_users') }}</h1>
      </div>
      <b-table
        :data="users"
        :bordered="true"
        :striped="true"
        :loading="loading">

        <template slot-scope="props">
            <b-table-column field="id" :label="$t('table.id')" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="first_name" :label="$t('table.f_name')">
                {{ props.row.firstName }}
            </b-table-column>

            <b-table-column field="last_name" :label="$t('table.l_name')">
                {{ props.row.lastName }}
            </b-table-column>

            <b-table-column field="email" :label="$t('table.email')" centered>
                {{ props.row.email }}
            </b-table-column>

            <b-table-column label="Options">
                <router-link :to="{ name: 'userEdit', params: { id: `${props.row.id}` } }">{{ $t('table.edit') }}</router-link>
                <span class="m-1">-</span>
                <a href="#" @click.prevent="deleteUser(props.row.id)">{{ $t('table.delete') }}</a>
            </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ManageUsers',
  components: {
    BackButton: () => import('@/components/BackButton')
  },
  async mounted () {
    this.loading = true
    await this.getUsers()
    this.loading = false
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['getUsers', 'deleteUser'])
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>
