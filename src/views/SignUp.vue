<template>
  <div class="signup row">
    <div class="col-md-6">
      <h1 class="text-left">Create an account</h1>
      <form @submit.prevent="createAccount(credentials)" class="mt-5">
        <div class="form-group row">
          <label for="inputUsername" class="col-sm-4 col-form-label">Username</label>
          <div class="col-sm-8">
            <input v-model="credentials.username" type="text" class="form-control" id="inputUsername" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
          <div class="col-sm-8">
            <input v-model="credentials.password" type="password" class="form-control" id="inputPassword" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputConPassword" class="col-sm-4 col-form-label">Confirm Password</label>
          <div class="col-sm-8">
            <input v-model="confirmPassword" type="password" class="form-control" id="inputConPassword" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputLastName" class="col-sm-4 col-form-label">Last Name</label>
          <div class="col-sm-8">
            <input v-model="credentials.lastName" type="text" class="form-control" id="inputLastName" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputFirstName" class="col-sm-4 col-form-label">First Name</label>
          <div class="col-sm-8">
            <input v-model="credentials.firstName" type="text" class="form-control" id="inputFirstName" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-8">
            <input v-model="credentials.email" type="email" class="form-control" id="inputEmail" required>
          </div>
        </div>
        <button :disabled="credentials.password !== confirmPassword" type="submit" class="btn btn-primary float-right">Create Account</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignUpPage',
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['createAccount'])
  }
}
</script>
