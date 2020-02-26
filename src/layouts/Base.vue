<template>
  <section class="base container">
    <div class="row">
      <div class="d-flex justify-content-end align-items-center col-12">
        <div class="" v-if="authUser !== '' && authUser.role === 'Admin'">
          <p>{{ $t('admin_link.welcome') }}, {{ authUser.username }} <router-link to="/admin">{{ $t('admin_link.admin_panel') }}</router-link></p>
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
    <Notify v-if="notify.type" :notify="notify"/>
    <Footer />
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Base',
  components: {
    SelectLanguage: () => import('@/components/LanguageSelect'),
    Menu: () => import('@/components/Menu'),
    Notify: () => import('@/components/Notify'),
    Footer: () => import('@/components/Footer')
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['authUser', 'notify'])
  }
}
</script>
<style lang="scss" scoped>
.base{
  min-height: 98vh;
  display: flex;
  flex-direction: column;
}
.logo{
  width: 12%;
}
</style>
