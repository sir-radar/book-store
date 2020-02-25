<template>
  <div class="d-flex col-md-4">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/store">Store</router-link>
    <router-link v-if="authUser === ''" to="/login">LogIn</router-link>
    <a href="#" v-else>LogOut</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Menu',
  computed: {
    ...mapState(['authUser'])
  }
}
</script>

<style scoped lang="scss">
a{
  padding: .3rem 1rem;
  border: .5px solid #000;
  color: #000;
}
a:hover{
  text-decoration: none;
}
.router-link-exact-active{
  background-color: rgb(91, 161, 182);
}
</style>
