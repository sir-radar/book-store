<template>
  <div class="form-group col-md-2">
    <select v-model="lang" @change="changeLang" id="inputState" class="form-control">
      <option selected value='en'>English</option>
      <option value='fr'>French</option>
    </select>
  </div>
</template>

<script>
import i18n from '../i18n'
export default {
  name: 'LanguageSelect',
  data () {
    return {
      lang: 'en'
    }
  },
  methods: {
    changeLang () {
      i18n.locale = this.lang
    }
  }
}
</script>

<style scoped lang="scss">
</style>
