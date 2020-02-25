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
    <div class="row">
      <div class="w-100 h-100 logo">
        <img src="@/assets/logo.png" alt="">
      </div>
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

</style>
