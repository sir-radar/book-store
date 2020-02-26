<template>
  <div class="menu d-flex align-items-center col-md-4">
    <router-link to="/">{{ $t('menu.home') }}</router-link>
    <router-link to="/about">{{ $t('menu.about') }}</router-link>
    <router-link to="/store">{{ $t('menu.store') }}</router-link>
    <router-link v-if="authUser === ''" to="/login">{{ $t('menu.login') }}</router-link>
    <a @click.prevent="logout" href="#" v-else>{{ $t('menu.logout') }}</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Menu',
  methods: {
    ...mapMutations(['logout'])
  },
  computed: {
    ...mapState(['authUser'])
  }
}
</script>

<style scoped lang="scss">
.menu{
  a{
    padding: .3rem 1rem;
    border: .5px solid #000;
    color: #000;
    display: block;
  }
  a:hover{
    text-decoration: none;
  }
  .router-link-exact-active{
    background-color: rgb(91, 161, 182);
  }
}
</style>
