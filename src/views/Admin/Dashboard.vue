<template>
  <div class="login row">
    <div class="col-md-6">
      <h1 class="text-left">{{ $t('dashboard.title') }}</h1>
      <div class="d-flex flex-column align-items-start col-md-6 mt-5 p-4 border">
        <router-link to="/admin/manage-users">{{ $t('dashboard.manage_users') }}</router-link>
        <router-link to="/admin/manage-books">{{ $t('dashboard.manage_books') }}</router-link>
        <router-link to="/admin/manage-orders">{{ $t('dashboard.manage_orders') }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Admin-Dashboard'
}
</script>
