<template>
  <section class="container">
    <div class="row">
      <div class="col-8 offset-10">
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
export default {
  name: 'Base',
  components: {
    SelectLanguage: () => import('@/components/LanguageSelect'),
    Menu: () => import('@/components/Menu')
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.logo{
  width: 12%;
}
</style>
