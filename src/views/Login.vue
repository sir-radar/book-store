<template>
  <div class="login max-vh-100 row">
    <div class="col-md-6">
      <h1 class="text-left">{{ $t('login.title') }}</h1>
      <form @submit.prevent="login(credentials)" class="mt-5">
        <div class="form-group row">
          <label for="inputUsername" class="col-sm-2 col-form-label">{{ $t('auth.username') }}</label>
          <div class="col-sm-10">
            <input v-model="credentials.username" type="text" class="form-control" id="inputUsername" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">{{ $t('auth.password') }}</label>
          <div class="col-sm-10">
            <input v-model="credentials.password" type="password" class="form-control" id="inputPassword" required>
          </div>
        </div>
        <p class="text-danger">{{ error }}</p>
        <button type="submit" class="btn btn-primary float-right">{{ $t('login.btn_text') }}</button>
        <p>{{ $t('login.have_account') }} <router-link to="/create-account">{{ $t('login.sign_up') }}</router-link></p>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginPage',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
