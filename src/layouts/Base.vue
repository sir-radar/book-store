<template>
  <section class="base container">
    <div class="row">
      <div class="d-flex justify-content-end align-items-center col-12">
        <div class="" v-if="authUser !== '' && authUser.role === 'Admin'">
          <p>{{ $t('admin_link.welcome') }}, {{ authUser.username }} <router-link to="/admin">{{ $t('admin_link.admin_panel') }}</router-link></p>
        </div>
         <select-language :currentLang="lang" @changeLang="changeLang"></select-language>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-sm-3 offset-md-7">
         <Menu/>
      </div>
    </div>
    <div class="row align-items-center">
      <img @click="$router.push('/')" src="../assets/logo.png" alt="Logo" class="logo mr-5">
      <h1>Active Learning Online Store</h1>
    </div>
    <router-view/>
    <Notify v-if="notify.type" :notify="notify"/>
    <Footer />
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import i18n from '../i18n'
import Notify from '@/components/Notify'
export default {
  name: 'BaseLayout',
  components: {
    SelectLanguage: () => import('@/components/LanguageSelect'),
    Menu: () => import('@/components/Menu'),
    Notify,
    Footer: () => import('@/components/Footer')
  },
  mounted () {
    i18n.locale = this.lang
  },
  methods: {
    ...mapMutations(['setLang']),
    // change language to the selected language
    changeLang (lang) {
      i18n.locale = lang
      this.setLang(lang)
    }
  },
  computed: {
    ...mapState(['authUser', 'notify', 'lang'])
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
  cursor: pointer;
}
</style>
