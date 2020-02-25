<template>
  <div class="login row">
    <div class="col-md-6">
      <h1 class="text-left">Dashboard</h1>
      <div class="d-flex flex-column align-items-start col-md-6 mt-5 p-4 border">
        <router-link to="">Manage users</router-link>
        <router-link to="">Manage books</router-link>
        <router-link to="">Manage orders</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Admin-Dashboard'
}
</script>
