<template>
  <div class="home">
    <h1>Welcome home</h1>
    <p>{{$t('message')}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    axios.get('/api/books')
      .then(res => console.log(res))
  }
}
</script>
