<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="text-left">Manage Users</h1>

      <b-table
        :data="users"
        :bordered="true"
        :striped="true">

        <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="first_name" label="First Name">
                {{ props.row.firstName }}
            </b-table-column>

            <b-table-column field="last_name" label="Last Name">
                {{ props.row.lastName }}
            </b-table-column>

            <b-table-column field="email" label="Email" centered>
                {{ props.row.email }}
            </b-table-column>

            <b-table-column label="Options">
                <router-link :to="{ name: 'userEdit', params: { id: `${props.row.id}` } }">Edit</router-link>
                <span class="m-1">-</span>
                <a href="#">Delete</a>
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
  async mounted () {
    await this.getUsers()
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>
