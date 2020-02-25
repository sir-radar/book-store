<template>
  <div class="login row">
    <div class="col-md-6">
      <h1 class="text-left">Login</h1>
      <form @submit.prevent="login(credencials)" class="mt-5">
        <div class="form-group row">
          <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input v-model="credencials.username" type="text" class="form-control" id="inputUsername" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input v-model="credencials.password" type="password" class="form-control" id="inputPassword" required>
          </div>
        </div>
        <p class="text-danger">{{ error }}</p>
        <button type="submit" class="btn btn-primary float-right">Sign in</button>
        <p>Don't have an account? <router-link to="/create-account">SignUp</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginPage',
  data () {
    return {
      credencials: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    axios.get('/api/users')
      .then(res => console.log(res.data))
  },
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
