<template>
  <div class="d-flex col-md-4">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/store">Store</router-link>
    <a href="">LogIn</a>
    <!-- <router-link>Home</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Menu'
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
