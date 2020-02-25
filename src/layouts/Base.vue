<template>
  <section class="container">
    <div class="row">
      <div class="d-flex justify-content-end align-items-center col-12">
        <div class="" v-if="authUser !== '' && authUser.role === 'Admin'">
          <p>Welcome, {{ authUser.username }} <router-link to="/admin">Admin Panel</router-link></p>
        </div>
         <select-language></select-language>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-7">
         <Menu/>
      </div>
    </div>
    <div class="row align-items-center">
      <img src="../assets/logo.png" alt="Logo" class="logo mr-5">
      <h1>Active Learning Online Store</h1>
    </div>
    <router-view/>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Base',
  components: {
    SelectLanguage: () => import('@/components/LanguageSelect'),
    Menu: () => import('@/components/Menu')
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['authUser'])
  }
}
</script>
<style lang="scss" scoped>
.logo{
  width: 12%;
}
</style>
