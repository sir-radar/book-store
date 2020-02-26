<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row mb-5">
        <BackButton/>
        <h1 class="text-left">{{ $t('dashboard.manage_orders') }}</h1>
      </div>
      <b-table
        :data="orders"
        :bordered="true"
        :striped="true"
        :loading="loading"
        >

        <template slot-scope="props">
            <b-table-column field="id" :label="$t('table.id')" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="book" :label="$t('table.book')">
                {{ props.row.book }}
            </b-table-column>

            <b-table-column field="customer" :label="$t('table.customer')">
                {{ props.row.user.lastName }} {{ props.row.user.firstName }}
            </b-table-column>

            <b-table-column field="date" :label="$t('table.date')" centered>
                {{ props.row.date }}
            </b-table-column>

            <b-table-column label="Options">
                <a href="#">{{ $t('table.edit') }}</a>
                <span class="m-1">-</span>
                <a href="#" @click.prevent="deleteOrder(props.row.id)">{{ $t('table.delete') }}</a>
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
  components: {
    BackButton: () => import('@/components/BackButton')
  },
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
