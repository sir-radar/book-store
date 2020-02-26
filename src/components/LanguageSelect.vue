<template>
  <div class="form-group col-3">
    <select v-model="lang" @change="changeLang" id="inputState" class="form-control">
      <option selected value='en'>English</option>
      <option value='fr'>French</option>
      <option value='rou'>Romanian</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelect',
  props: {
    currentLang: String
  },
  data () {
    return {
      lang: this.currentLang
    }
  },
  methods: {
    changeLang () {
      // emit change language event
      this.$emit('changeLang', this.lang)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
