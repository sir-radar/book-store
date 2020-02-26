<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <button class="p-1 mr-4 rounded" @click.prevent="$router.go(-1)">Prev page</button>
        <h1 class="text-left">Manage Orders</h1>
      </div>
      <b-table
        :data="orders"
        :bordered="true"
        :striped="true"
        :loading="loading"
        >

        <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="book" label="Book">
                {{ props.row.book }}
            </b-table-column>

            <b-table-column field="customer" label="Customer">
                {{ props.row.user.lastName }} {{ props.row.user.firstName }}
            </b-table-column>

            <b-table-column field="date" label="Date" centered>
                {{ props.row.date }}
            </b-table-column>

            <b-table-column label="Options">
                <!-- <router-link :to="{ name: 'bookEdit', params: { id: `${props.row.id}` } }">Edit</router-link> -->
                <a href="#">Edit</a>
                <span class="m-1">-</span>
                <a href="#" @click.prevent="deleteOrder(props.row.id)">Delete</a>
            </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ManageOrders',
  async mounted () {
    this.loading = true
    await this.getOrders()
    this.loading = false
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['getOrders', 'deleteOrder'])
  },
  computed: {
    ...mapState(['orders'])
  }
}
</script>
